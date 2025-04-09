// Function to get the authentication token
export function getAuthToken(): string | null {
  if (typeof window === "undefined") return null

  return localStorage.getItem("auth_token") || sessionStorage.getItem("auth_token")
}

// Base API URL
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.example.com"

// Generic fetch function with authentication
export async function fetchWithAuth<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const token = getAuthToken()

  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  })

  if (!response.ok) {
    // Handle different error status codes
    if (response.status === 401) {
      // Unauthorized - clear token and redirect to login
      if (typeof window !== "undefined") {
        localStorage.removeItem("auth_token")
        sessionStorage.removeItem("auth_token")
        window.location.href = "/login"
      }
    }

    // Try to parse error message from response
    let errorMessage: string
    try {
      const errorData = await response.json()
      errorMessage = errorData.message || `Error: ${response.status}`
    } catch {
      errorMessage = `Error: ${response.status}`
    }

    throw new Error(errorMessage)
  }

  return response.json()
}

// API functions for different endpoints
export const api = {
  // Auth endpoints
  auth: {
    login: (email: string, password: string) =>
      fetchWithAuth<{ token: string; user: any }>("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      }),

    register: (userData: any) =>
      fetchWithAuth<{ token: string; user: any }>("/auth/register", {
        method: "POST",
        body: JSON.stringify(userData),
      }),

    me: () => fetchWithAuth<{ user: any }>("/auth/me"),
  },

  // Museums endpoints
  museums: {
    getAll: () => fetchWithAuth<any[]>("/museums"),

    getById: (id: string) => fetchWithAuth<any>(`/museums/${id}`),
  },

  // Events endpoints
  events: {
    getAll: () => fetchWithAuth<any[]>("/events"),

    getById: (id: string) => fetchWithAuth<any>(`/events/${id}`),
  },

  // Bookings endpoints
  bookings: {
    create: (bookingData: any) =>
      fetchWithAuth<any>("/bookings", {
        method: "POST",
        body: JSON.stringify(bookingData),
      }),

    getAll: () => fetchWithAuth<any[]>("/bookings"),
  },
}
