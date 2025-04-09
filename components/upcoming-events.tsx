import { getFeaturedEvents } from "@/lib/data"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon, Clock, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"

interface UpcomingEventsProps {
  limit?: number
}

export default function UpcomingEvents({ limit }: UpcomingEventsProps) {
  const events = getFeaturedEvents(limit)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
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
          <CardFooter>
            <Link href={`/events/${event.id}`} className="w-full">
              <Button className="w-full">Book Tickets</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
