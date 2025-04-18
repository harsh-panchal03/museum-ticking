"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { CheckCircle2, AlertCircle } from "lucide-react"
import { useRouter } from "next/navigation"

interface RazorpayPaymentProps {
  amount: number
  currency?: string
  description: string
  name: string
  email: string
  onSuccess?: () => void
  onError?: (error: string) => void
}

export function RazorpayPayment({
  amount,
  currency = "INR",
  description,
  name,
  email,
  onSuccess,
  onError,
}: RazorpayPaymentProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const router = useRouter()

  const handlePayment = async () => {
    setIsLoading(true)

    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Simulate successful payment
      setShowSuccess(true)
      onSuccess?.()
    } catch (error) {
      console.error("Payment failed:", error)
      setErrorMessage("Payment failed. Please try again.")
      setShowError(true)
      onError?.(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSuccessClose = () => {
    setShowSuccess(false)
    router.push("/dashboard")
  }

  const handleErrorClose = () => {
    setShowError(false)
  }

  return (
    <>
      <Button onClick={handlePayment} disabled={isLoading} className="w-full">
        {isLoading ? "Processing Payment..." : `Pay ${currency} ${amount.toFixed(2)}`}
      </Button>

      {/* Success Dialog */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6 text-green-500" />
              Payment Successful
            </DialogTitle>
            <DialogDescription>
              Your payment of {currency} {amount.toFixed(2)} has been processed successfully.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm text-muted-foreground">
              A confirmation email has been sent to {email}. Your booking reference is{" "}
              <span className="font-medium">BOOK-{Math.floor(Math.random() * 10000)}</span>.
            </p>
          </div>
          <DialogFooter>
            <Button onClick={handleSuccessClose}>View My Bookings</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Error Dialog */}
      <Dialog open={showError} onOpenChange={setShowError}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertCircle className="h-6 w-6 text-red-500" />
              Payment Failed
            </DialogTitle>
            <DialogDescription>{errorMessage}</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={handleErrorClose}>
              Close
            </Button>
            <Button onClick={handlePayment}>Try Again</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
