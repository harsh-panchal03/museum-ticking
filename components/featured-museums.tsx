import { getFeaturedMuseums } from "@/lib/data"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function FeaturedMuseums() {
  const featuredMuseums = getFeaturedMuseums()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featuredMuseums.map((museum) => (
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
          </CardContent>
          <CardFooter>
            <Link href={`/museums/${museum.id}`} className="w-full">
              <Button className="w-full">View Details</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
