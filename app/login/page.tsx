"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useAuth } from "@/contexts/auth-context"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, Loader2 } from "lucide-react"
import { useFormValidation } from "@/hooks/use-form-validation"

export default function LoginPage() {
  const { login, isLoading, error, isAuthenticated } = useAuth()
  const [rememberMe, setRememberMe] = useState(false)
  const [loginAttempted, setLoginAttempted] = useState(false)
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard"

  const { values, errors, touched, handleChange, handleBlur, validate } = useFormValidation({
    email: "",
    password: "",
  })

  // Handle redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated && !loginAttempted) {
      window.location.href = callbackUrl
    }
  }, [isAuthenticated, callbackUrl, loginAttempted])

  const handleCheckboxChange = (checked: boolean) => {
    setRememberMe(checked)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoginAttempted(true)

    // Validate form
    const isValid = validate({
      email: { required: true, email: true },
      password: { required: true, minLength: 6 },
    })

    if (isValid) {
      await login(values.email, values.password, rememberMe)
    }
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Welcome back</h1>
          <p className="text-muted-foreground mt-2">Log in to your Modern Museum account</p>
        </div>

        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {searchParams.get("sessionExpired") && (
          <Alert className="mb-6 bg-amber-50 text-amber-800 border-amber-200">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="name@example.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email && touched.email ? "border-red-500" : ""}
              disabled={isLoading}
              autoComplete="email"
            />
            {errors.email && touched.email && <p className="text-sm text-red-500">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.password && touched.password ? "border-red-500" : ""}
              disabled={isLoading}
              autoComplete="current-password"
            />
            {errors.password && touched.password && <p className="text-sm text-red-500">{errors.password}</p>}
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember-me"
              checked={rememberMe}
              onCheckedChange={handleCheckboxChange}
              disabled={isLoading}
            />
            <Label htmlFor="remember-me" className="text-sm font-normal">
              Remember me for 30 days
            </Label>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Logging in...
              </>
            ) : (
              "Log in"
            )}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/signup" className="text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </div>

        <div className="mt-8 p-4 bg-muted rounded-lg">
          <h3 className="font-medium mb-2">Demo Credentials</h3>
          <p className="text-sm">
            <strong>User:</strong> demo@example.com / password
          </p>
        </div>
      </div>
    </div>
  )
}
