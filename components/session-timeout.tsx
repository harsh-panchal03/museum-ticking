"use client"

import { useState, useEffect, useCallback } from "react"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

// Session timeout in milliseconds (15 minutes)
const SESSION_TIMEOUT = 15 * 60 * 1000
// Warning before timeout in milliseconds (1 minute)
const WARNING_BEFORE_TIMEOUT = 60 * 1000

export function SessionTimeout() {
  const { isAuthenticated, logout } = useAuth()
  const [showWarning, setShowWarning] = useState(false)
  const [timeLeft, setTimeLeft] = useState(0)
  const [lastActivity, setLastActivity] = useState(Date.now())

  // Reset the timer when there's user activity
  const resetTimer = useCallback(() => {
    setLastActivity(Date.now())
    setShowWarning(false)
  }, [])

  // Check for user activity
  useEffect(() => {
    if (!isAuthenticated) return

    const events = ["mousedown", "mousemove", "keypress", "scroll", "touchstart"]

    // Add event listeners for user activity
    events.forEach((event) => {
      window.addEventListener(event, resetTimer)
    })

    return () => {
      // Clean up event listeners
      events.forEach((event) => {
        window.removeEventListener(event, resetTimer)
      })
    }
  }, [isAuthenticated, resetTimer])

  // Check session timeout
  useEffect(() => {
    if (!isAuthenticated) return

    const interval = setInterval(() => {
      const now = Date.now()
      const timeSinceLastActivity = now - lastActivity

      if (
        timeSinceLastActivity >= SESSION_TIMEOUT - WARNING_BEFORE_TIMEOUT &&
        timeSinceLastActivity < SESSION_TIMEOUT
      ) {
        // Show warning dialog
        setShowWarning(true)
        setTimeLeft(Math.ceil((SESSION_TIMEOUT - timeSinceLastActivity) / 1000))
      } else if (timeSinceLastActivity >= SESSION_TIMEOUT) {
        // Log out the user
        logout()
      }

      // Update countdown timer
      if (showWarning) {
        setTimeLeft(Math.ceil((SESSION_TIMEOUT - timeSinceLastActivity) / 1000))
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [isAuthenticated, lastActivity, logout, showWarning])

  if (!isAuthenticated || !showWarning) {
    return null
  }

  return (
    <Dialog open={showWarning} onOpenChange={setShowWarning}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Session Timeout Warning</DialogTitle>
          <DialogDescription>
            Your session will expire in {timeLeft} seconds due to inactivity. Would you like to continue your session?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={logout}>
            Logout
          </Button>
          <Button onClick={resetTimer}>Continue Session</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
