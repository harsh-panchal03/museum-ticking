"use client"

import { useState, useEffect, useCallback } from "react"

type FetchState<T> = {
  data: T | null
  isLoading: boolean
  error: Error | null
}

export function useFetchWithFallback<T>(
  fetchFnOrUrl: (() => Promise<T | null>) | string,
  fallbackData: T,
  dependenciesOrOptions: any[] | RequestInit = [],
): FetchState<T> & { refetch: () => Promise<void> } {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    isLoading: true,
    error: null,
  })

  // Determine if we're using a function or URL string
  const isFunction = typeof fetchFnOrUrl === "function"
  const dependencies = Array.isArray(dependenciesOrOptions) ? dependenciesOrOptions : []
  const options = !Array.isArray(dependenciesOrOptions) ? dependenciesOrOptions : undefined

  const fetchData = useCallback(async () => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }))

    try {
      let data: T | null

      if (isFunction) {
        // Call the fetch function
        data = await (fetchFnOrUrl as () => Promise<T | null>)()
      } else {
        // Use the URL string
        const response = await fetch(fetchFnOrUrl as string, options)

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`)
        }

        data = await response.json()
      }

      // Check if data is empty or null
      const isEmpty =
        !data ||
        (Array.isArray(data) && data.length === 0) ||
        (typeof data === "object" && Object.keys(data).length === 0)

      setState({
        data: isEmpty ? fallbackData : data,
        isLoading: false,
        error: null,
      })
    } catch (error) {
      console.error("Error fetching data:", error)
      setState({
        data: fallbackData, // Use fallback data on error
        isLoading: false,
        error: error instanceof Error ? error : new Error(String(error)),
      })
    }
  }, [fetchFnOrUrl, fallbackData, isFunction, options])

  useEffect(() => {
    fetchData()
  }, [fetchData, ...dependencies])

  const refetch = async () => {
    await fetchData()
  }

  return { ...state, refetch }
}
