// API utility functions

// Base API URL
const API_BASE_URL = "/api"

// Helper function to handle API responses
async function handleResponse(response: Response) {
  if (!response.ok) {
    const error = await response.text()
    throw new Error(error || `Error ${response.status}: ${response.statusText}`)
  }
  return response.json()
}

// Auth API
// Assuming this is the structure of the api.ts file
// Let's enhance it with better error handling and token management

export function getAuthToken(): string | null {
  if (typeof window === "undefined") return null

  // Try to get token from localStorage first, then sessionStorage
  return localStorage.getItem("auth_token") || sessionStorage.getItem("auth_token")
}

// Add a function to check if token is expired
export function isTokenExpired(token: string): boolean {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]))
    return payload.exp && Date.now() >= payload.exp * 1000
  } catch (e) {
    return true // If we can't parse the token, consider it expired
  }
}

// Enhanced API client with better error handling
const auth = {
  login: async (email: string, password: string) => {
    // In a real app, this would be an actual API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "demo@example.com" && password === "password") {
          resolve({
            token: "demo_token",
            user: {
              id: "user_1",
              name: "Demo User",
              email: "demo@example.com",
            },
          })
        } else {
          reject(new Error("Invalid credentials"))
        }
      }, 1000)
    })
  },

  register: async (userData: any) => {
    // In a real app, this would be an actual API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          token: "new_user_token",
          user: {
            id: "new_user_1",
            name: userData.name,
            email: userData.email,
          },
        })
      }, 1000)
    })
  },

  me: async () => {
    // In a real app, this would validate the token with the server
    const token = getAuthToken()

    if (!token) {
      throw new Error("No authentication token found")
    }

    if (isTokenExpired(token)) {
      throw new Error("Token expired")
    }

    // For demo purposes, decode the token to get user info
    try {
      const payload = JSON.parse(atob(token.split(".")[1]))
      return {
        user: {
          id: payload.sub,
          name: payload.name,
          email: payload.email,
        },
      }
    } catch (e) {
      throw new Error("Invalid token")
    }
  },
}

// Museums API
const museums = {
  getAll: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/museums`)
      return handleResponse(response)
    } catch (error) {
      console.error("Failed to fetch museums:", error)
      return null
    }
  },

  getById: async (id: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/museums/${id}`)
      return handleResponse(response)
    } catch (error) {
      console.error(`Failed to fetch museum ${id}:`, error)
      return null
    }
  },
}

// Events API
const events = {
  getAll: async (city?: string) => {
    try {
      const url =
        city && city !== "all" ? `${API_BASE_URL}/events?city=${encodeURIComponent(city)}` : `${API_BASE_URL}/events`

      const response = await fetch(url)
      return handleResponse(response)
    } catch (error) {
      console.error("Failed to fetch events:", error)
      return null
    }
  },
}

// Bookings API
const bookings = {
  create: async (bookingData: any) => {
    try {
      const response = await fetch(`${API_BASE_URL}/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      })
      return handleResponse(response)
    } catch (error) {
      console.error("Failed to create booking:", error)
      return null
    }
  },

  getAll: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/bookings`)
      return handleResponse(response)
    } catch (error) {
      console.error("Failed to fetch bookings:", error)
      return null
    }
  },
}

// Helper function to get auth token
// Export all API functions
export const api = {
  auth,
  museums,
  events,
  bookings,
}
