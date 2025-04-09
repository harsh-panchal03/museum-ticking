import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Mail } from "lucide-react"

// Sample press releases
const pressReleases = [
  {
    id: "1",
    title: "Modern Museum Launches New Audio Guide Feature",
    date: "June 15, 2025",
    excerpt:
      "Modern Museum introduces professional voice-over guides to enhance visitor experiences across partner museums.",
    image: "https://thumbs.dreamstime.com/b/museum-interior-15103642.jpg",
  },
  {
    id: "2",
    title: "Partnership with 10 New Museums Across India",
    date: "May 3, 2025",
    excerpt: "Modern Museum expands its network with 10 new museum partnerships, now covering 15 cities across India.",
    image:
      "https://thumbs.dreamstime.com/b/museum-island-city-embankment-sunny-day-berlin-germany-view-promenade-along-spree-river-343149746.jpg",
  },
  {
    id: "3",
    title: "Modern Museum Wins Tech Innovation Award",
    date: "March 22, 2025",
    excerpt: "Our platform recognized for technological innovation in making cultural experiences more accessible.",
    image:
      "https://thumbs.dreamstime.com/b/museum-modern-art-nyc-new-york-city-march-street-view-manhattan-moma-was-founded-39570959.jpg",
  },
]

// Sample media mentions
const mediaLogos = [
  { name: "The Times of India", logo: "https://thumbs.dreamstime.com/b/generic-museum-sign-1331265.jpg" },
  { name: "Hindustan Times", logo: "https://thumbs.dreamstime.com/b/museum-sign-side-30788492.jpg" },
  { name: "The Hindu", logo: "https://thumbs.dreamstime.com/b/ashmolean-museum-facade-oxford-24541283.jpg" },
  { name: "India Today", logo: "https://thumbs.dreamstime.com/b/altes-museum-berlin-3187389.jpg" },
  {
    name: "Economic Times",
    logo: "https://thumbs.dreamstime.com/b/philadelphia-museum-art-entrance-pennsylvania-usa-44813756.jpg",
  },
]

export default function PressPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Press & Media</h1>
        <p className="text-xl text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          Latest news, press releases, and media resources for Modern Museum
        </p>

        {/* Hero Image */}
        <div className="relative h-[300px] md:h-[400px] w-full mb-12 rounded-lg overflow-hidden">
          <Image
            src="https://thumbs.dreamstime.com/b/louvre-museum-28960688.jpg"
            alt="Modern Museum press"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8 text-white">
            <h2 className="text-3xl font-bold mb-2">Press Resources</h2>
            <p className="text-xl max-w-2xl">Find the latest news, press releases, and media assets</p>
          </div>
        </div>

        {/* Press Kit */}
        <section className="mb-12 bg-gray-50 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Press Kit</h2>
              <p className="text-muted-foreground">
                Download our press kit for logos, brand guidelines, high-resolution images, and fact sheets.
              </p>
            </div>
            <Button className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download Press Kit
            </Button>
          </div>
        </section>

        {/* Press Releases */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Press Releases</h2>
          <div className="space-y-6">
            {pressReleases.map((release) => (
              <Card key={release.id} className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="relative h-48 md:h-auto md:w-1/3">
                    <Image
                      src={release.image || "/placeholder.svg"}
                      alt={release.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <CardHeader>
                      <CardDescription>{release.date}</CardDescription>
                      <CardTitle>{release.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{release.excerpt}</p>
                    </CardContent>
                    <CardFooter>
                      <Link href={`/press/${release.id}`}>
                        <Button variant="outline">Read More</Button>
                      </Link>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/press/archive">
              <Button variant="outline">View All Press Releases</Button>
            </Link>
          </div>
        </section>

        {/* Media Mentions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured In</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {mediaLogos.map((media, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24">
                <Image
                  src={media.logo || "/placeholder.svg"}
                  alt={media.name}
                  width={120}
                  height={60}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Media Contact */}
        <section className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Media Contact</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <p className="mb-4">
                For press inquiries, interview requests, or additional information, please contact our PR team:
              </p>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href="mailto:press@modernmuseum.in" className="text-primary hover:underline">
                    press@modernmuseum.in
                  </a>
                </p>
                <p>Phone: +91 9876543210</p>
                <p>Response time: Within 24 hours</p>
              </div>
            </div>
            <div className="flex-1">
              <p className="mb-4">
                Looking for expert commentary on museum technology, cultural tourism, or digital accessibility in the
                arts?
              </p>
              <p className="mb-4">Our team is available for interviews, panels, and speaking engagements.</p>
              <Link href="/contact">
                <Button>Contact Us</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
