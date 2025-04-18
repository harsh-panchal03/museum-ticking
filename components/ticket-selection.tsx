"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Clock, Info, Minus, Plus } from "lucide-react"
import { useRouter } from "next/navigation"
import { RazorpayPayment } from "./razorpay-payment"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface TicketSelectionProps {
  museum: {
    id: string
    name: string
    ticketPrice: number
    hours?: string
  }
}

export function TicketSelection({ museum }: TicketSelectionProps) {
  const [adultCount, setAdultCount] = useState(1)
  const [childCount, setChildCount] = useState(0)
  const [date, setDate] = useState<string>(getTomorrowDate())
  const [showPayment, setShowPayment] = useState(false)
  const router = useRouter()

  const adultPrice = museum.ticketPrice
  const childPrice = museum.ticketPrice * 0.5

  const totalAdultPrice = adultCount * adultPrice
  const totalChildPrice = childCount * childPrice
  const totalPrice = totalAdultPrice + totalChildPrice

  function getTomorrowDate() {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split("T")[0]
  }

  const handleIncrement = (type: "adult" | "child") => {
    if (type === "adult") {
      setAdultCount((prev) => Math.min(prev + 1, 10))
    } else {
      setChildCount((prev) => Math.min(prev + 1, 10))
    }
  }

  const handleDecrement = (type: "adult" | "child") => {
    if (type === "adult") {
      setAdultCount((prev) => Math.max(prev - 1, 1))
    } else {
      setChildCount((prev) => Math.max(prev - 1, 0))
    }
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value)
  }

  const handleBookNow = () => {
    setShowPayment(true)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Book Tickets</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="date">Select Date</Label>
          <Input id="date" type="date" value={date} onChange={handleDateChange} min={getTomorrowDate()} />
        </div>

        <div className="space-y-2">
          <Label>Opening Hours</Label>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-1" />
            <span>{museum.hours || "10:00 AM - 6:00 PM"}</span>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label>Adult Tickets</Label>
              <div className="text-sm text-muted-foreground">Ages 13+</div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => handleDecrement("adult")}
                disabled={adultCount <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center">{adultCount}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => handleIncrement("adult")}
                disabled={adultCount >= 10}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label>Child Tickets</Label>
              <div className="text-sm text-muted-foreground">Ages 5-12</div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => handleDecrement("child")}
                disabled={childCount <= 0}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center">{childCount}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => handleIncrement("child")}
                disabled={childCount >= 10}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-muted p-3">
          <div className="flex items-center justify-between text-sm">
            <span>Adult × {adultCount}</span>
            <span>₹{totalAdultPrice.toFixed(2)}</span>
          </div>
          {childCount > 0 && (
            <div className="flex items-center justify-between text-sm mt-1">
              <span>Child × {childCount}</span>
              <span>₹{totalChildPrice.toFixed(2)}</span>
            </div>
          )}
          <Separator className="my-2" />
          <div className="flex items-center justify-between font-medium">
            <span>Total</span>
            <span>₹{totalPrice.toFixed(2)}</span>
          </div>
        </div>

        <div className="rounded-lg border border-blue-100 bg-blue-50 p-3">
          <div className="flex">
            <Info className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
            <div className="text-sm text-blue-700">
              <p>Free cancellation up to 24 hours before your visit.</p>
              <p className="mt-1">Children under 5 enter free with a paying adult.</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Dialog open={showPayment} onOpenChange={setShowPayment}>
          <DialogTrigger asChild>
            <Button className="w-full" onClick={handleBookNow}>
              Book Now
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Complete Your Booking</DialogTitle>
              <DialogDescription>
                You're booking {adultCount} adult {adultCount === 1 ? "ticket" : "tickets"}
                {childCount > 0 && ` and ${childCount} child ${childCount === 1 ? "ticket" : "tickets"}`} for{" "}
                {museum.name} on{" "}
                {new Date(date).toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
                .
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <div className="rounded-lg bg-muted p-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span>Adult × {adultCount}</span>
                  <span>₹{totalAdultPrice.toFixed(2)}</span>
                </div>
                {childCount > 0 && (
                  <div className="flex items-center justify-between text-sm mt-1">
                    <span>Child × {childCount}</span>
                    <span>₹{totalChildPrice.toFixed(2)}</span>
                  </div>
                )}
                <Separator className="my-2" />
                <div className="flex items-center justify-between font-medium">
                  <span>Total</span>
                  <span>₹{totalPrice.toFixed(2)}</span>
                </div>
              </div>
              <RazorpayPayment
                amount={totalPrice}
                description={`Tickets for ${museum.name}`}
                name="John Doe"
                email="john.doe@example.com"
              />
            </div>
            <DialogFooter className="flex flex-col sm:flex-row sm:justify-between sm:space-x-2">
              <Button variant="outline" onClick={() => setShowPayment(false)}>
                Cancel
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}
