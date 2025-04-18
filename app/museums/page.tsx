"use client"

import { useState } from "react"
import { useFetchWithFallback } from "@/hooks/use-fetch-with-fallback"
import { museums as fallbackMuseums } from "@/data"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"

export default function MuseumsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Use the updated hook with URL string
  const { data: museums, isLoading, error } = useFetchWithFallback("/api/museums", fallbackMuseums)

  // Filter museums based on search query
  const filteredMuseums = museums?.filter(
    (museum) =>
      museum.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      museum.location.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Explore Museums</h1>

      {/* Search bar */}
      <div className="relative mb-8">
        <Input
          type="text"
          placeholder="Search museums by name or location..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      </div>

      {/* Error message */}
      {error && !isLoading && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
          <p>There was an error loading museums. Showing fallback data instead.</p>
        </div>
      )}

      {/* Museums grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          // Loading skeletons
          Array.from({ length: 6 }).map((_, index) => (
            <Card key={index} className="overflow-hidden">
              <Skeleton className="h-48 w-full" />
              <CardContent className="p-4">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-2/3" />
              </CardContent>
            </Card>
          ))
        ) : filteredMuseums && filteredMuseums.length > 0 ? (
          // Museum cards
          filteredMuseums.map((museum) => (
            <Link href={`/museums/${museum.id}`} key={museum.id}>
              <Card className="overflow-hidden h-full transition-transform hover:scale-[1.02]">
                <div className="relative h-48 w-full">
                  <Image
                    src={museum.image || "/placeholder.svg?height=192&width=384"}
                    alt={museum.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{museum.name}</h2>
                  <p className="text-muted-foreground mb-2">{museum.location}</p>
                  <p className="text-sm">₹{museum.ticketPrice} per person</p>
                </CardContent>
              </Card>
            </Link>
          ))
        ) : (
          // No results
          <div className="col-span-full text-center py-10">
            <p className="text-muted-foreground mb-4">No museums found matching your search.</p>
            <Button onClick={() => setSearchQuery("")}>Clear Search</Button>
          </div>
        )}
      </div>
    </div>
  )
}
