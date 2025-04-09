"use client"

import { useState } from "react"
import { cities, getEventsByCity } from "@/lib/data"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, Clock, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"

export default function EventsPage() {
  const [selectedCity, setSelectedCity] = useState("All Cities")
  const filteredEvents = getEventsByCity(selectedCity)

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover special exhibitions and cultural events at museums worldwide
        </p>
      </div>

      <Tabs defaultValue="All Cities" onValueChange={setSelectedCity} className="mb-8">
        <TabsList className="flex flex-wrap h-auto mb-4">
          {cities.map((city) => (
            <TabsTrigger key={city} value={city} className="mb-2">
              {city}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {filteredEvents.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-2">No events found</h2>
          <p className="text-muted-foreground">There are currently no events scheduled in {selectedCity}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48 w-full">
                <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription>{event.location}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <p className="line-clamp-2">{event.description}</p>
                <div className="flex flex-col space-y-2 text-sm">
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{format(new Date(event.date), "MMMM d, yyyy")}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{event.city}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="font-bold">₹{event.price.toFixed(2)}</span>
                <Link href={`/events/${event.id}`}>
                  <Button>Book Tickets</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
