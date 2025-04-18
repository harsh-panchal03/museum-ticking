"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { api, getAuthToken } from "@/utils/api"

type User = {
  id: string
  name: string
  email: string
}

type AuthContextType = {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
  login: (email: string, password: string, remember?: boolean) => Promise<void>
  register: (userData: any) => Promise<void>
  logout: () => void
  clearError: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Token expiration time in milliseconds (30 days)
const TOKEN_EXPIRATION = 30 * 24 * 60 * 60 * 1000

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const clearError = () => setError(null)

  // Check if user is already logged in
  useEffect(() => {
    const checkAuth = async () => {
      const token = getAuthToken()

      if (!token) {
        setIsLoading(false)
        return
      }

      try {
        // Check if token is expired
        const tokenData = JSON.parse(atob(token.split(".")[1]))
        if (tokenData.exp && Date.now() >= tokenData.exp * 1000) {
          throw new Error("Token expired")
        }

        const { user } = await api.auth.me()
        setUser(user)
      } catch (err) {
        console.error("Auth check failed:", err)
        // Clear invalid tokens
        localStorage.removeItem("auth_token")
        sessionStorage.removeItem("auth_token")

        // Redirect to login with session expired parameter
        if (typeof window !== "undefined" && window.location.pathname !== "/login") {
          router.push("/login?sessionExpired=true")
        }
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [router])

  const login = async (email: string, password: string, remember = false) => {
    setIsLoading(true)
    setError(null)

    try {
      // For demo purposes, accept a simple login
      if (email === "demo@example.com" && password === "password") {
        const demoUser = {
          id: "user_1",
          name: "Demo User",
          email: "demo@example.com",
        }

        // Create a simple JWT-like token with expiration
        const now = Date.now()
        const exp = now + TOKEN_EXPIRATION
        const tokenPayload = {
          sub: demoUser.id,
          name: demoUser.name,
          email: demoUser.email,
          iat: Math.floor(now / 1000),
          exp: Math.floor(exp / 1000),
        }

        const tokenHeader = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }))
        const tokenBody = btoa(JSON.stringify(tokenPayload))
        const tokenSignature = btoa("signature") // In a real app, this would be a proper signature

        const token = `${tokenHeader}.${tokenBody}.${tokenSignature}`

        // Store token based on remember preference
        if (remember) {
          localStorage.setItem("auth_token", token)
        } else {
          sessionStorage.setItem("auth_token", token)
        }

        setUser(demoUser)
        router.push("/dashboard")
        return
      }

      const { token, user } = await api.auth.login(email, password)

      // Store token based on remember preference
      if (remember) {
        localStorage.setItem("auth_token", token)
      } else {
        sessionStorage.setItem("auth_token", token)
      }

      setUser(user)
      router.push("/dashboard")
    } catch (err) {
      console.error("Login failed:", err)
      setError(err instanceof Error ? err.message : "Login failed. Please check your credentials.")
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (userData: any) => {
    setIsLoading(true)
    setError(null)

    try {
      const { token, user } = await api.auth.register(userData)

      // Store token in session storage by default for new registrations
      sessionStorage.setItem("auth_token", token)

      setUser(user)
      router.push("/dashboard")
    } catch (err) {
      console.error("Registration failed:", err)
      setError(err instanceof Error ? err.message : "Registration failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem("auth_token")
    sessionStorage.removeItem("auth_token")
    setUser(null)
    router.push("/login")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        error,
        login,
        register,
        logout,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
