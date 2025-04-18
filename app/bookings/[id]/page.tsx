"use client"

import { useAuth } from "@/contexts/auth-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calendar, Ticket, MapPin, ArrowLeft, Download, Clock } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"

// Mock booking data for demonstration
const mockBookings = [
  {
    id: "B001",
    museumName: "National Museum",
    museumImage: "/placeholder.svg?height=300&width=600",
    location: "New Delhi, India",
    date: "2023-12-20",
    time: "10:00 AM",
    ticketCount: 2,
    totalAmount: 1000,
    status: "confirmed",
    tickets: [
      { type: "Adult", count: 1, price: 500 },
      { type: "Child", count: 1, price: 250 },
    ],
    bookingDate: "2023-12-01",
    paymentMethod: "Credit Card",
    transactionId: "TXN123456789",
  },
  {
    id: "B002",
    museumName: "Indian Museum",
    museumImage: "/placeholder.svg?height=300&width=600",
    location: "Kolkata, India",
    date: "2023-12-25",
    time: "11:30 AM",
    ticketCount: 3,
    totalAmount: 1500,
    status: "pending",
    tickets: [
      { type: "Adult", count: 2, price: 700 },
      { type: "Child", count: 1, price: 350 },
    ],
    bookingDate: "2023-12-05",
    paymentMethod: "Debit Card",
    transactionId: "TXN987654321",
  },
]

export default function BookingDetailPage() {
  const { isAuthenticated } = useAuth()
  const router = useRouter()
  const params = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [booking, setBooking] = useState<any>(null)

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login")
      return
    }

    // Find the booking with the matching ID
    const bookingId = params.id as string
    const foundBooking = mockBookings.find((b) => b.id === bookingId)

    if (foundBooking) {
      setBooking(foundBooking)
    }

    setIsLoading(false)
  }, [isAuthenticated, router, params.id])

  if (isLoading) {
    return (
      <div className="container py-10">
        <div className="flex items-center justify-center h-[60vh]">
          <div className="text-center">
            <h2 className="text-xl font-medium mb-2">Loading booking details...</h2>
            <p className="text-muted-foreground">Please wait while we fetch your booking information</p>
          </div>
        </div>
      </div>
    )
  }

  if (!booking) {
    return (
      <div className="container py-10">
        <Link href="/bookings" className="inline-flex items-center mb-6 text-sm">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Bookings
        </Link>

        <div className="text-center py-12 bg-muted rounded-lg">
          <Ticket className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-xl font-medium mb-2">Booking Not Found</h3>
          <p className="text-muted-foreground mb-6">
            We couldn't find the booking you're looking for. It may have been removed or the ID is incorrect.
          </p>
          <Link href="/bookings">
            <Button>View All Bookings</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-10">
      <Link href="/bookings" className="inline-flex items-center mb-6 text-sm">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Bookings
      </Link>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold">Booking Details</h1>
        <Badge
          variant={
            booking.status === "confirmed" ? "success" : booking.status === "pending" ? "outline" : "destructive"
          }
          className="text-base px-3 py-1"
        >
          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <div className="relative h-[200px] md:h-[300px] w-full">
              <Image
                src={booking.museumImage || "/placeholder.svg"}
                alt={booking.museumName}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">{booking.museumName}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 text-muted-foreground mt-0.5" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">{booking.location}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Calendar className="h-5 w-5 mr-2 text-muted-foreground mt-0.5" />
                  <div>
                    <h3 className="font-medium">Visit Date</h3>
                    <p className="text-muted-foreground">{booking.date}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-5 w-5 mr-2 text-muted-foreground mt-0.5" />
                  <div>
                    <h3 className="font-medium">Visit Time</h3>
                    <p className="text-muted-foreground">{booking.time}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Ticket className="h-5 w-5 mr-2 text-muted-foreground mt-0.5" />
                  <div>
                    <h3 className="font-medium">Booking ID</h3>
                    <p className="text-muted-foreground">{booking.id}</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-3">Ticket Details</h3>
                <div className="space-y-2">
                  {booking.tickets.map((ticket: any, index: number) => (
                    <div key={index} className="flex justify-between">
                      <span>
                        {ticket.type} × {ticket.count}
                      </span>
                      <span>₹{ticket.price * ticket.count}</span>
                    </div>
                  ))}
                  <Separator className="my-2" />
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>₹{booking.totalAmount}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Booking Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-1">Booking Date</h3>
                <p className="text-muted-foreground">{booking.bookingDate}</p>
              </div>

              <div>
                <h3 className="font-medium mb-1">Payment Method</h3>
                <p className="text-muted-foreground">{booking.paymentMethod}</p>
              </div>

              <div>
                <h3 className="font-medium mb-1">Transaction ID</h3>
                <p className="text-muted-foreground">{booking.transactionId}</p>
              </div>

              <Separator />

              <div className="space-y-4">
                <Button className="w-full" variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download Ticket
                </Button>

                {booking.status === "pending" && (
                  <Button className="w-full" variant="destructive">
                    Cancel Booking
                  </Button>
                )}

                {booking.status === "confirmed" && (
                  <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-3 text-sm">
                    <p>
                      Your booking is confirmed. Please arrive 15 minutes before your scheduled time and bring a photo
                      ID.
                    </p>
                  </div>
                )}

                {booking.status === "cancelled" && (
                  <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-3 text-sm">
                    <p>This booking has been cancelled. The refund process typically takes 5-7 business days.</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  If you have any questions or need assistance with your booking, our customer support team is here to
                  help.
                </p>
                <Link href="/contact">
                  <Button className="w-full">Contact Support</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
