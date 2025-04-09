"use client"

import { useState, useEffect } from "react"
import { museums, categories } from "@/lib/data"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function MuseumsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [filteredMuseums, setFilteredMuseums] = useState(museums)

  useEffect(() => {
    let results = museums

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      results = results.filter(
        (museum) =>
          museum.name.toLowerCase().includes(query) ||
          museum.description.toLowerCase().includes(query) ||
          museum.location.toLowerCase().includes(query) ||
          museum.categories.some((category) => category.toLowerCase().includes(query)),
      )
    }

    // Filter by category
    if (selectedCategory !== "All Categories") {
      results = results.filter((museum) => museum.categories.includes(selectedCategory))
    }

    setFilteredMuseums(results)
  }, [searchQuery, selectedCategory])

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Explore Museums</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover the world's finest museums and cultural institutions
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search museums..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {filteredMuseums.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-2">No museums found</h2>
          <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMuseums.map((museum) => (
            <Card key={museum.id} className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48 w-full">
                <Image src={museum.image || "/placeholder.svg"} alt={museum.name} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{museum.name}</CardTitle>
                <CardDescription>{museum.location}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="line-clamp-3">{museum.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {museum.categories.map((category) => (
                    <span
                      key={category}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/museums/${museum.id}`} className="w-full">
                  <Button className="w-full">View Details</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
