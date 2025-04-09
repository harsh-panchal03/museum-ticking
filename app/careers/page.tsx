import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock } from "lucide-react"

// Sample job openings
const jobOpenings = [
  {
    id: "1",
    title: "Museum Partnership Manager",
    department: "Business Development",
    location: "Mumbai",
    type: "Full-time",
    description:
      "Build and maintain relationships with museums and cultural institutions across India. Negotiate partnerships and ensure smooth onboarding of new museum partners.",
    requirements: [
      "3+ years experience in partnership management or business development",
      "Strong negotiation and relationship-building skills",
      "Passion for art and cultural heritage",
      "Willingness to travel occasionally",
    ],
  },
  {
    id: "2",
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Join our engineering team to build and maintain our web platform. Work on user-facing features that enhance the museum booking experience.",
    requirements: [
      "2+ years experience with React and modern JavaScript",
      "Experience with responsive design and accessibility",
      "Knowledge of Next.js is a plus",
      "Strong problem-solving skills",
    ],
  },
  {
    id: "3",
    title: "Content Writer",
    department: "Marketing",
    location: "Delhi",
    type: "Full-time",
    description:
      "Create engaging content about museums, exhibitions, and cultural events. Write blog posts, social media content, and museum descriptions.",
    requirements: [
      "Excellent writing skills in English and Hindi",
      "Knowledge of art history or cultural studies",
      "Experience in content marketing",
      "Portfolio of published work",
    ],
  },
  {
    id: "4",
    title: "Customer Support Specialist",
    department: "Operations",
    location: "Bangalore",
    type: "Full-time",
    description:
      "Provide exceptional support to our users via email, chat, and phone. Help resolve booking issues and answer questions about museums and events.",
    requirements: [
      "1+ years in customer service",
      "Excellent communication skills",
      "Problem-solving mindset",
      "Ability to work in shifts",
    ],
  },
  {
    id: "5",
    title: "UI/UX Design Intern",
    department: "Design",
    location: "Remote",
    type: "Internship",
    description:
      "Assist our design team in creating user-friendly interfaces and experiences. Work on wireframes, prototypes, and visual designs.",
    requirements: [
      "Currently pursuing a degree in Design or related field",
      "Proficiency in Figma or similar design tools",
      "Understanding of user-centered design principles",
      "Portfolio of design work",
    ],
  },
]

export default function CareersPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Help us connect people with cultural experiences that inspire, educate, and transform
        </p>
      </div>

      {/* Hero Image */}
      <div className="relative h-[400px] w-full mb-12 rounded-lg overflow-hidden">
        <Image
          src="https://thumbs.dreamstime.com/b/art-appreciators-view-paintings-museum-de-prado-prado-museum-madrid-spain-52319523.jpg"
          alt="Team at work"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8 text-white">
          <h2 className="text-3xl font-bold mb-2">Build Your Career With Us</h2>
          <p className="text-xl max-w-2xl">
            Join a passionate team dedicated to making cultural experiences accessible to everyone
          </p>
        </div>
      </div>

      {/* Why Join Us */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Join Modern Museum</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Meaningful Work</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Make a real impact by connecting people with cultural experiences that enrich their lives and preserve
                our heritage.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Growth Opportunities</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Develop your skills and advance your career with our mentorship programs, learning resources, and clear
                growth paths.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Inclusive Culture</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Join a diverse team that values different perspectives and creates a supportive environment where
                everyone can thrive.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-gray-50 rounded-lg mb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Benefits & Perks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Health Insurance</h3>
              <p className="text-muted-foreground">Comprehensive medical coverage for you and your family</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Flexible Work</h3>
              <p className="text-muted-foreground">
                Remote work options and flexible hours to maintain work-life balance
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Learning Budget</h3>
              <p className="text-muted-foreground">
                Annual budget for courses, conferences, and professional development
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Paid Time Off</h3>
              <p className="text-muted-foreground">Generous vacation policy and paid holidays to recharge</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Current Openings</h2>
        <div className="space-y-6">
          {jobOpenings.map((job) => (
            <Card key={job.id}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                  <div>
                    <CardTitle>{job.title}</CardTitle>
                    <CardDescription>{job.department}</CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {job.location}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {job.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{job.description}</p>
                <h4 className="font-semibold mb-2">Requirements:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href={`/careers/${job.id}`}>
                  <Button>Apply Now</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* No Openings? */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Don't See a Role That Fits?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind
          for future opportunities.
        </p>
        <Link href="/contact">
          <Button size="lg">Contact Us</Button>
        </Link>
      </section>
    </div>
  )
}
