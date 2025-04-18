"use client"

import { useAuth } from "@/contexts/auth-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, Ticket, Search, ArrowLeft } from "lucide-react"
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
    tickets: [
      { type: "Adult", count: 1, price: 500 },
      { type: "Child", count: 1, price: 250 },
    ],
  },
  {
    id: "B002",
    museumName: "Indian Museum",
    museumImage: "/placeholder.svg?height=100&width=200",
    date: "2023-12-25",
    ticketCount: 3,
    totalAmount: 1500,
    status: "pending",
    tickets: [
      { type: "Adult", count: 2, price: 700 },
      { type: "Child", count: 1, price: 350 },
    ],
  },
  {
    id: "B003",
    museumName: "Salar Jung Museum",
    museumImage: "/placeholder.svg?height=100&width=200",
    date: "2024-01-05",
    ticketCount: 4,
    totalAmount: 2000,
    status: "confirmed",
    tickets: [
      { type: "Adult", count: 2, price: 800 },
      { type: "Child", count: 2, price: 400 },
    ],
  },
  {
    id: "B004",
    museumName: "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya",
    museumImage: "/placeholder.svg?height=100&width=200",
    date: "2024-01-10",
    ticketCount: 1,
    totalAmount: 650,
    status: "cancelled",
    tickets: [{ type: "Adult", count: 1, price: 650 }],
  },
]

export default function BookingsPage() {
  const { isAuthenticated } = useAuth()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

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
            <h2 className="text-xl font-medium mb-2">Loading bookings...</h2>
            <p className="text-muted-foreground">Please wait while we fetch your bookings</p>
          </div>
        </div>
      </div>
    )
  }

  // Filter bookings based on search query and active tab
  const filteredBookings = mockBookings.filter((booking) => {
    const matchesSearch = booking.museumName.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTab = activeTab === "all" || booking.status === activeTab
    return matchesSearch && matchesTab
  })

  return (
    <div className="container py-10">
      <Link href="/dashboard" className="inline-flex items-center mb-6 text-sm">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Dashboard
      </Link>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold">My Bookings</h1>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search bookings..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList>
          <TabsTrigger value="all">All Bookings</TabsTrigger>
          <TabsTrigger value="confirmed">Confirmed</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
        </TabsList>
      </Tabs>

      {filteredBookings.length > 0 ? (
        <div className="grid gap-6">
          {filteredBookings.map((booking) => (
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
                  <div className="p-6 flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">{booking.museumName}</h3>
                        <div className="flex items-center text-sm text-muted-foreground mt-2">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>Visit Date: {booking.date}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <Ticket className="h-4 w-4 mr-1" />
                          <span>Booking ID: {booking.id}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant={
                            booking.status === "confirmed"
                              ? "success"
                              : booking.status === "pending"
                                ? "outline"
                                : "destructive"
                          }
                        >
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </Badge>
                        <div className="font-semibold mt-2">₹{booking.totalAmount}</div>
                        <div className="text-sm text-muted-foreground">{booking.ticketCount} tickets</div>
                      </div>
                    </div>

                    <div className="mt-4 border-t pt-4">
                      <h4 className="font-medium mb-2">Ticket Details</h4>
                      <div className="space-y-1">
                        {booking.tickets.map((ticket, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span>
                              {ticket.type} × {ticket.count}
                            </span>
                            <span>₹{ticket.price * ticket.count}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 flex justify-end gap-2">
                      {booking.status === "pending" && (
                        <Button variant="outline" size="sm">
                          Cancel Booking
                        </Button>
                      )}
                      <Link href={`/bookings/${booking.id}`}>
                        <Button size="sm">View Details</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-muted rounded-lg">
          <Ticket className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-xl font-medium mb-2">No bookings found</h3>
          <p className="text-muted-foreground mb-6">
            {searchQuery
              ? "No bookings match your search criteria"
              : "You haven't made any bookings yet. Start exploring museums and events!"}
          </p>
          <Link href="/museums">
            <Button>Browse Museums</Button>
          </Link>
        </div>
      )}
    </div>
  )
}
