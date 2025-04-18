"use client"

import { useFetchWithFallback } from "@/hooks/use-fetch-with-fallback"
import { events as fallbackEvents } from "@/data"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function UpcomingEvents() {
  const { data: events, isLoading, error } = useFetchWithFallback("/api/events", fallbackEvents)

  // Get only the first 3 events for the homepage
  const upcomingEvents = events?.slice(0, 3)

  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Upcoming Events</h2>
            <p className="text-muted-foreground">Don't miss these special exhibitions and cultural events</p>
          </div>
          <Link href="/events">
            <Button variant="outline" className="mt-4 md:mt-0">
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {error && !isLoading && (
          <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded mb-6">
            <p>There was an error loading upcoming events. Showing fallback data instead.</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            // Loading skeletons
            Array.from({ length: 3 }).map((_, index) => (
              <Card key={index} className="overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <CardContent className="p-4">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2 mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3" />
                </CardContent>
              </Card>
            ))
          ) : upcomingEvents && upcomingEvents.length > 0 ? (
            // Event cards
            upcomingEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image src={event.image || "/placeholder.svg"} alt={event.name} fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>
                      {event.location}, {event.city}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">₹{event.price}</span>
                    <Button size="sm">Book Tickets</Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-muted-foreground">No upcoming events available at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
