"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"

// Define user type
type User = {
  id: string
  name: string
  email: string
  role: "user" | "admin"
}

// Define auth context type
type AuthContextType = {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
  login: (email: string, password: string, rememberMe?: boolean) => Promise<void>
  logout: () => void
}

// Create the auth context
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Auth provider props
type AuthProviderProps = {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [isInitialized, setIsInitialized] = useState<boolean>(false)
  const router = useRouter()

  // Check if user is already logged in on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("auth_token") || sessionStorage.getItem("auth_token")

        if (token) {
          // For demo purposes, we'll just set a mock user
          // In a real app, you would validate the token with your API
          setUser({
            id: "1",
            name: "John Doe",
            email: "john@example.com",
            role: "user",
          })
        }
      } catch (error) {
        console.error("Auth initialization error:", error)
      } finally {
        setIsInitialized(true)
      }
    }

    checkAuth()
  }, [])

  // Login function
  const login = async (email: string, password: string, rememberMe = false) => {
    setIsLoading(true)
    setError(null)

    try {
      // In a real app, you would call your API endpoint here
      // const response = await fetch("https://api.example.com/login", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email, password }),
      // })

      // Mock successful login for demo purposes
      // In a real app, you would check if the response is successful
      // if (!response.ok) throw new Error("Invalid credentials")

      // const data = await response.json()

      // Mock token and user data
      const mockToken = "mock_jwt_token_" + Math.random().toString(36).substring(2)
      const mockUser = {
        id: "1",
        name: email.split("@")[0],
        email,
        role: email.includes("admin") ? "admin" : ("user" as "user" | "admin"),
      }

      // Store token in localStorage or sessionStorage based on rememberMe
      if (rememberMe) {
        localStorage.setItem("auth_token", mockToken)
      } else {
        sessionStorage.setItem("auth_token", mockToken)
      }

      setUser(mockUser)

      // Redirect based on user role
      if (mockUser.role === "admin") {
        router.push("/admin/dashboard")
      } else {
        router.push("/dashboard")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred during login")
    } finally {
      setIsLoading(false)
    }
  }

  // Logout function
  const logout = () => {
    localStorage.removeItem("auth_token")
    sessionStorage.removeItem("auth_token")
    setUser(null)
    router.push("/")
  }

  // Auth context value
  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    error,
    login,
    logout,
  }

  // Show loading or children
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// Custom hook to use auth context
export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
