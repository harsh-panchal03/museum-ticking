import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">About Modern Museum</h1>

        <div className="relative h-[300px] md:h-[400px] w-full mb-8 rounded-lg overflow-hidden">
          <Image
            src="https://thumbs.dreamstime.com/b/louvre-museum-courtyard-view-louvre-museum-courtyard-tourists-pyramid-middle-picture-paris-341406606.jpg"
            alt="Modern Museum building"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg mb-6">
            Modern Museum is dedicated to making India's rich cultural heritage accessible to everyone. We believe that
            art and history should be experienced without barriers, which is why we've created a seamless platform for
            discovering and booking tickets to India's finest museums and cultural events.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-lg mb-6">
            Founded in 2025, Modern Museum began as a small initiative to help visitors navigate the complex ticketing
            systems of India's major museums. What started as a simple booking platform has grown into a comprehensive
            service that connects culture enthusiasts with museums across the country.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <p className="text-muted-foreground">Museums Connected</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">200K+</div>
                  <p className="text-muted-foreground">Tickets Sold</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <p className="text-muted-foreground">Cities Covered</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p className="text-lg mb-6">
            Our diverse team of art historians, technology experts, and customer service professionals work together to
            create the best possible experience for museum visitors. We're passionate about India's cultural heritage
            and committed to making it accessible to everyone.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10">
            {[
              {
                name: "Harsh Panchal",
                role: "Founder & CEO",
                image: "https://thumbs.dreamstime.com/b/boy-museum-3348348.jpg",
              },
              {
                name: "Priya Sharma",
                role: "Chief Curator",
                image:
                  "https://thumbs.dreamstime.com/b/montreal-fine-arts-museum-room-editorial-canada-paintings-wall-young-adult-looking-39023360.jpg",
              },
              {
                name: "Raj Mehta",
                role: "Technology Director",
                image: "https://thumbs.dreamstime.com/b/museum-sign-side-30788492.jpg",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative h-40 w-40 mx-auto rounded-full overflow-hidden mb-4">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="space-y-4 mb-6">
            <li className="flex items-start">
              <div className="mr-2 mt-1 bg-primary rounded-full p-1 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <strong>Accessibility:</strong> We believe that cultural experiences should be accessible to everyone,
                regardless of background or ability.
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 bg-primary rounded-full p-1 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <strong>Education:</strong> We're committed to promoting learning and understanding through cultural
                experiences.
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 bg-primary rounded-full p-1 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <strong>Innovation:</strong> We continuously seek new ways to enhance the museum experience through
                technology.
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 bg-primary rounded-full p-1 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <strong>Preservation:</strong> We support the preservation and promotion of India's rich cultural
                heritage.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
