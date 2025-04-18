"use client"

import { useAuth } from "@/contexts/auth-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Ticket, Calendar, User, Settings } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

// Mock booking data for demonstration
const mockBookings = [
  {
    id: "B001",
    museumName: "National Museum",
    museumImage: "/placeholder.svg?height=100&width=200",
    date: "2023-12-20",
    ticketCount: 2,
    totalAmount: 1000,
    status: "confirmed",
  },
  {
    id: "B002",
    museumName: "Indian Museum",
    museumImage: "/placeholder.svg?height=100&width=200",
    date: "2023-12-25",
    ticketCount: 3,
    totalAmount: 1500,
    status: "pending",
  },
]

export default function DashboardPage() {
  const { user, isAuthenticated } = useAuth()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login")
    } else {
      setIsLoading(false)
    }
  }, [isAuthenticated, router])

  if (isLoading) {
    return (
      <div className="container py-10">
        <div className="flex items-center justify-center h-[60vh]">
          <div className="text-center">
            <h2 className="text-xl font-medium mb-2">Loading dashboard...</h2>
            <p className="text-muted-foreground">Please wait while we prepare your dashboard</p>
          </div>
        </div>
      </div>
    )
  }

  // Use a default user object if user is not available
  const displayUser = user || { name: "User", email: "user@example.com" }

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Welcome, {displayUser.name}</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">My Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{mockBookings.length}</div>
              <Ticket className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">Active bookings</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">3</div>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">Events this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold truncate max-w-[150px]">{displayUser.email}</div>
              <User className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">Your account details</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">Account</div>
              <Settings className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">Manage your preferences</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Link href="/museums">
            <Button variant="outline" className="w-full justify-start">
              <Ticket className="mr-2 h-4 w-4" />
              Book Museum Tickets
            </Button>
          </Link>
          <Link href="/events">
            <Button variant="outline" className="w-full justify-start">
              <Calendar className="mr-2 h-4 w-4" />
              Browse Events
            </Button>
          </Link>
          <Link href="/profile">
            <Button variant="outline" className="w-full justify-start">
              <User className="mr-2 h-4 w-4" />
              Update Profile
            </Button>
          </Link>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Recent Bookings</h2>
        <div className="grid gap-4">
          {mockBookings.map((booking) => (
            <Card key={booking.id}>
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="relative h-40 md:h-auto md:w-1/4">
                    <Image
                      src={booking.museumImage || "/placeholder.svg"}
                      alt={booking.museumName}
                      fill
                      className="object-cover md:rounded-l-lg"
                    />
                  </div>
                  <div className="p-4 flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">{booking.museumName}</h3>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{booking.date}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <Ticket className="h-4 w-4 mr-1" />
                          <span>{booking.ticketCount} tickets</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">₹{booking.totalAmount}</div>
                        <div
                          className={`text-sm mt-1 ${
                            booking.status === "confirmed"
                              ? "text-green-600"
                              : booking.status === "pending"
                                ? "text-amber-600"
                                : "text-red-600"
                          }`}
                        >
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <Link href={`/bookings/${booking.id}`}>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Link href="/bookings">
            <Button variant="outline">View All Bookings</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
