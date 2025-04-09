import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import FeaturedMuseums from "@/components/featured-museums"
import UpcomingEvents from "@/components/upcoming-events"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://thumbs.dreamstime.com/b/sunset-louvre-museum-paris-france-59598244.jpg"
            alt="Museum interior"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 max-w-2xl">Discover Art & Culture at Modern Museum</h1>
          <p className="text-xl mb-8 max-w-xl">Explore the world's finest museums and book your tickets with ease.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/museums">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                Explore Museums
              </Button>
            </Link>
            <Link href="/events">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
                View Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Museums Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Featured Museums</h2>
            <Link href="/museums" className="flex items-center text-primary hover:underline">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <FeaturedMuseums />
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Upcoming Events</h2>
            <Link href="/events" className="flex items-center text-primary hover:underline">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <UpcomingEvents limit={3} />
        </div>
      </section>

      {/* Audio Guide Promo */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Enhance Your Visit with Audio Guides</h2>
              <p className="text-lg mb-6">
                Our professional voice-over guides provide in-depth information about exhibits, artists, and historical
                context to enrich your museum experience.
              </p>
              <Button variant="secondary" size="lg">
                Learn More
              </Button>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="https://thumbs.dreamstime.com/b/people-art-museum-photo-exhibition-61363694.jpg"
                alt="Person using audio guide"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">What Our Visitors Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <h3 className="font-semibold">Visitor Name</h3>
                    <p className="text-sm text-gray-500">Art Enthusiast</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "The Modern Museum app made my visit so much easier. I booked tickets in advance, skipped the lines,
                  and the audio guide was incredibly informative!"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Sign up now to get exclusive access to special exhibitions and events.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/signup">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                Sign Up
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
                Log In
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
