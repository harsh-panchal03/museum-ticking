import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function CompanyPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Our Company</h1>

        {/* Hero Image */}
        <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
          <Image
            src="https://thumbs.dreamstime.com/b/view-louvre-museum-courtyard-tourists-pyramid-middle-picture-louvre-museum-paris-france-350575677.jpg"
            alt="Modern Museum building"
            fill
            className="object-cover"
          />
        </div>

        {/* Vision & Mission */}
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-lg mb-6">
            At Modern Museum, we envision a world where cultural heritage is accessible to everyone. We believe that
            art, history, and culture should be experienced without barriers, which is why we've created a seamless
            platform for discovering and booking tickets to India's finest museums and cultural events.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg mb-6">
            Our mission is to connect people with cultural experiences that inspire, educate, and transform. We strive
            to make museum visits more accessible, engaging, and memorable through innovative technology and exceptional
            service.
          </p>

          {/* Values */}
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
                <p>
                  We believe cultural experiences should be accessible to everyone, regardless of background or ability.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p>We're committed to promoting learning and understanding through cultural experiences.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p>We continuously seek new ways to enhance the museum experience through technology.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Preservation</h3>
                <p>We support the preservation and promotion of India's rich cultural heritage.</p>
              </CardContent>
            </Card>
          </div>

          {/* Our Story */}
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <div className="relative h-[300px] md:h-[400px] w-full mb-6 rounded-lg overflow-hidden">
            <Image
              src="https://thumbs.dreamstime.com/b/pretty-night-time-illuminations-museum-island-berlin-germany-130045411.jpg"
              alt="Team at work"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-lg mb-6">
            Founded in 2025, Modern Museum began as a small initiative to help visitors navigate the complex ticketing
            systems of India's major museums. What started as a simple booking platform has grown into a comprehensive
            service that connects culture enthusiasts with museums across the country.
          </p>
          <p className="text-lg mb-6">
            Our founder, Harsh Panchal, was inspired to create the platform after experiencing firsthand the challenges
            of planning museum visits during a trip across India. Recognizing the need for a more streamlined,
            user-friendly approach to cultural tourism, he assembled a team of technology experts and art enthusiasts to
            build what would become Modern Museum.
          </p>
          <p className="text-lg mb-6">
            Today, we partner with over 50 museums and cultural institutions across 15 cities in India, helping hundreds
            of thousands of visitors discover and experience the rich cultural heritage of our country.
          </p>

          {/* Timeline */}
          <h2 className="text-2xl font-semibold mb-4">Our Journey</h2>
          <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-gray-200 before:ml-0.5">
            <div className="relative pl-10">
              <div className="absolute left-0 top-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold">2025: The Beginning</h3>
              <p>Modern Museum was founded with a mission to make cultural experiences more accessible.</p>
            </div>
            <div className="relative pl-10">
              <div className="absolute left-0 top-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold">2026: Expansion</h3>
              <p>Partnered with 20 museums across 5 major cities in India.</p>
            </div>
            <div className="relative pl-10">
              <div className="absolute left-0 top-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold">2027: Innovation</h3>
              <p>Launched our audio guide feature and virtual tour capabilities.</p>
            </div>
            <div className="relative pl-10">
              <div className="absolute left-0 top-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold">Today</h3>
              <p>Serving over 200,000 visitors annually across 50+ museums in 15 cities.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
