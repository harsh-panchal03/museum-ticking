"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
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
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
