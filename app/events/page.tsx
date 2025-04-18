"use client"

import { useState, useEffect } from "react"
import { useFetchWithFallback } from "@/hooks/use-fetch-with-fallback"
import { events as fallbackEvents, cities } from "@/data"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import { Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EventsPage() {
  const [selectedCity, setSelectedCity] = useState<string>("all")
  const [url, setUrl] = useState("/api/events")

  // Update URL when city changes
  useEffect(() => {
    setUrl(selectedCity === "all" ? "/api/events" : `/api/events?city=${selectedCity}`)
  }, [selectedCity])

  // Use the updated hook with URL string
  const { data: events, isLoading, error } = useFetchWithFallback(url, fallbackEvents, [url])

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>

      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="w-full sm:w-64">
            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by city" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Cities</SelectItem>
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <p className="text-muted-foreground">
            Showing {events?.length || 0} events
            {selectedCity !== "all" ? ` in ${selectedCity}` : ""}
          </p>
        </div>
      </div>

      {error && !isLoading && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
          <p>There was an error loading events. Showing fallback data instead.</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          // Loading skeletons
          Array.from({ length: 6 }).map((_, index) => (
            <Card key={index}>
              <Skeleton className="h-48 w-full" />
              <CardContent className="p-4">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2 mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-2/3" />
              </CardContent>
            </Card>
          ))
        ) : events && events.length > 0 ? (
          // Event cards
          events.map((event) => (
            <Card key={event.id} className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={event.image || "/placeholder.svg?height=192&width=384"}
                  alt={event.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-2">{event.name}</h2>
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
                <p className="mb-4">{event.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">₹{event.price}</span>
                  <Button size="sm">Book Tickets</Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          // No events found
          <div className="col-span-full text-center py-10">
            <p className="text-muted-foreground mb-4">No events found in this city.</p>
            <Button onClick={() => setSelectedCity("all")}>View All Cities</Button>
          </div>
        )}
      </div>
    </div>
  )
}
