import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, MapPin, Users } from "lucide-react"

// Sample tour data
const tours = [
  {
    id: "1",
    title: "Classical Art Masterpieces",
    category: "art",
    image:
      "https://thumbs.dreamstime.com/b/art-patrons-looks-painting-hanging-wall-historic-louvre-museum-interior-102367654.jpg",
    description:
      "Explore the finest classical art pieces with expert commentary on techniques, history, and cultural significance.",
    duration: "2 hours",
    location: "National Museum, New Delhi",
    price: 1200,
    maxGroupSize: 10,
  },
  {
    id: "2",
    title: "Ancient Civilizations Journey",
    category: "historical",
    image: "https://thumbs.dreamstime.com/b/sphinx-museum-louvre-ancient-egyptian-paris-62434141.jpg",
    description:
      "Travel back in time through artifacts and exhibits showcasing the rise and fall of ancient civilizations.",
    duration: "3 hours",
    location: "Indian Museum, Kolkata",
    price: 1500,
    maxGroupSize: 12,
  },
  {
    id: "3",
    title: "Interactive Family Adventure",
    category: "family",
    image:
      "https://thumbs.dreamstime.com/b/children-read-mammoth-natural-history-museum-foreground-skeleton-extinct-species-mammal-genus-mammuthus-344342361.jpg",
    description:
      "A fun-filled tour designed for families with interactive exhibits, games, and educational activities for children.",
    duration: "1.5 hours",
    location: "Government Museum, Chennai",
    price: 1800,
    maxGroupSize: 15,
  },
  {
    id: "4",
    title: "Architectural Wonders",
    category: "architecture",
    image:
      "https://thumbs.dreamstime.com/b/museum-island-city-embankment-sunny-day-berlin-germany-view-promenade-along-spree-river-343149746.jpg",
    description:
      "Discover the stunning architectural elements of historic buildings and monuments with detailed insights.",
    duration: "2.5 hours",
    location: "Albert Hall Museum, Jaipur",
    price: 1300,
    maxGroupSize: 8,
  },
  {
    id: "5",
    title: "Modern Art Exploration",
    category: "art",
    image:
      "https://thumbs.dreamstime.com/b/museum-modern-art-nyc-new-york-city-march-street-view-manhattan-moma-was-founded-39570959.jpg",
    description: "Dive into the world of contemporary art movements, experimental techniques, and innovative artists.",
    duration: "2 hours",
    location: "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya, Mumbai",
    price: 1400,
    maxGroupSize: 10,
  },
  {
    id: "6",
    title: "Cultural Heritage Walk",
    category: "historical",
    image:
      "https://thumbs.dreamstime.com/b/birth-venus-sandro-botticelli-uffizi-museum-florence-italy-birth-venus-sandro-botticelli-uffizi-museum-340328832.jpg",
    description: "Walk through the rich cultural heritage of India with stories and artifacts that shaped our history.",
    duration: "3 hours",
    location: "Salar Jung Museum, Hyderabad",
    price: 1600,
    maxGroupSize: 12,
  },
  {
    id: "7",
    title: "Science Discovery Tour",
    category: "family",
    image:
      "https://thumbs.dreamstime.com/b/tacoma-children-s-museum-kids-were-having-fun-playing-water-room-free-38915166.jpg",
    description: "Engage with interactive science exhibits perfect for curious minds of all ages.",
    duration: "2 hours",
    location: "National Science Centre, New Delhi",
    price: 1200,
    maxGroupSize: 15,
  },
  {
    id: "8",
    title: "Photography Walk",
    category: "special",
    image: "https://thumbs.dreamstime.com/b/people-art-museum-photo-exhibition-61363694.jpg",
    description: "A specialized tour for photography enthusiasts with tips on capturing the perfect museum shots.",
    duration: "2.5 hours",
    location: "Various Museums",
    price: 2000,
    maxGroupSize: 8,
  },
]

export default function ToursPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Guided Museum Tours</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore our curated selection of expert-led tours designed to enhance your museum experience
        </p>
      </div>

      {/* Hero Image */}
      <div className="relative h-[400px] w-full mb-12 rounded-lg overflow-hidden">
        <Image
          src="https://thumbs.dreamstime.com/b/louvre-museum-courtyard-view-louvre-museum-courtyard-tourists-pyramid-middle-picture-paris-341406606.jpg"
          alt="Museum guided tour"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8 text-white">
          <h2 className="text-3xl font-bold mb-2">Discover Art & Culture</h2>
          <p className="text-xl max-w-2xl">
            Our expert guides bring history and art to life with engaging, informative tours
          </p>
        </div>
      </div>

      {/* Tour Categories */}
      <Tabs defaultValue="all" className="mb-10">
        <div className="flex justify-center mb-6">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
            <TabsTrigger value="all">All Tours</TabsTrigger>
            <TabsTrigger value="art">Art</TabsTrigger>
            <TabsTrigger value="historical">Historical</TabsTrigger>
            <TabsTrigger value="family">Family-Friendly</TabsTrigger>
            <TabsTrigger value="special">Special</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="art" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours
              .filter((tour) => tour.category === "art")
              .map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="historical" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours
              .filter((tour) => tour.category === "historical")
              .map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="family" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours
              .filter((tour) => tour.category === "family")
              .map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="special" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours
              .filter((tour) => tour.category === "special")
              .map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Why Choose Our Tours */}
      <section className="py-12 bg-gray-50 rounded-lg my-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Guided Tours</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Guides</h3>
              <p className="text-muted-foreground">
                Our guides are certified experts with deep knowledge of art, history, and culture.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-muted-foreground">Choose from multiple time slots to fit your itinerary perfectly.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Curated Experiences</h3>
              <p className="text-muted-foreground">
                Each tour is thoughtfully designed to provide unique insights and memorable experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="my-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">How many people are in each tour group?</h3>
            <p className="text-muted-foreground">
              Our tour groups are kept small (8-15 people) to ensure a personalized experience and allow for questions
              and interaction with the guide.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Can I book a private tour?</h3>
            <p className="text-muted-foreground">
              Yes, private tours are available for families, corporate groups, or special occasions. Please contact us
              for custom pricing and arrangements.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">What languages are tours available in?</h3>
            <p className="text-muted-foreground">
              Tours are regularly conducted in English and Hindi. Other languages may be available upon request with
              advance notice.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">What is the cancellation policy?</h3>
            <p className="text-muted-foreground">
              Full refunds are available for cancellations made at least 48 hours in advance. Cancellations within 48
              hours may be eligible for partial refunds or rescheduling.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

// Tour Card Component
function TourCard({ tour }) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative h-48 w-full">
        <Image src={tour.image || "/placeholder.svg"} alt={tour.title} fill className="object-cover" />
        <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded text-xs font-medium">
          {tour.category.charAt(0).toUpperCase() + tour.category.slice(1)}
        </div>
      </div>
      <CardHeader>
        <CardTitle>{tour.title}</CardTitle>
        <CardDescription>{tour.location}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="line-clamp-3 mb-4">{tour.description}</p>
        <div className="flex flex-col space-y-2 text-sm">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>Duration: {tour.duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>Max Group Size: {tour.maxGroupSize}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="font-bold">₹{tour.price.toFixed(2)}</span>
        <Link href={`/tours/${tour.id}`}>
          <Button>Book Now</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
