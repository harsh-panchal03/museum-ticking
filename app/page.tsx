"use client"

import { FeaturedMuseums } from "@/components/featured-museums"
import { HeroSection } from "@/components/hero-section"
import { Testimonials } from "@/components/testimonials"
import { UpcomingEvents } from "@/components/upcoming-events"
import { useFetchWithFallback } from "@/hooks/use-fetch-with-fallback"
import { museums as fallbackMuseums, events as fallbackEvents } from "@/data"

export default function HomePage() {
  // Use the updated hook with URL strings
  const { data: museums, isLoading: museumsLoading } = useFetchWithFallback("/api/museums", fallbackMuseums)
  const { data: events, isLoading: eventsLoading } = useFetchWithFallback("/api/events", fallbackEvents)

  return (
    <main>
      <HeroSection />
      <FeaturedMuseums museums={museums || fallbackMuseums} isLoading={museumsLoading} />
      <UpcomingEvents events={events || fallbackEvents} isLoading={eventsLoading} />
      <Testimonials />
    </main>
  )
}
