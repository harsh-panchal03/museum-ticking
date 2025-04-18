"use client"

import { useFetchWithFallback } from "@/hooks/use-fetch-with-fallback"
import { museums as fallbackMuseums } from "@/data"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function FeaturedMuseums() {
  const { data: museums, isLoading, error } = useFetchWithFallback("/api/museums", fallbackMuseums)

  // Get only the first 3 museums for featured section
  const featuredMuseums = museums?.slice(0, 3)

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Museums</h2>
            <p className="text-muted-foreground">Explore our handpicked selection of must-visit museums</p>
          </div>
          <Link href="/museums">
            <Button variant="outline" className="mt-4 md:mt-0">
              View All Museums
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {error && !isLoading && (
          <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded mb-6">
            <p>There was an error loading featured museums. Showing fallback data instead.</p>
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
                  <Skeleton className="h-4 w-full" />
                </CardContent>
              </Card>
            ))
          ) : featuredMuseums && featuredMuseums.length > 0 ? (
            // Museum cards
            featuredMuseums.map((museum) => (
              <Link href={`/museums/${museum.id}`} key={museum.id}>
                <Card className="overflow-hidden h-full transition-transform hover:scale-[1.02]">
                  <div className="relative h-48 w-full">
                    <Image src={museum.image || "/placeholder.svg"} alt={museum.name} fill className="object-cover" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{museum.name}</h3>
                    <p className="text-muted-foreground mb-2">{museum.location}</p>
                    <p className="text-sm">₹{museum.ticketPrice} per person</p>
                  </CardContent>
                </Card>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-muted-foreground">No featured museums available at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
