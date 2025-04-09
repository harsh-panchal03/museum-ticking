import { getMuseum } from "@/lib/data"
import { notFound } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import TicketSelection from "@/components/ticket-selection"
import AudioGuidePlayer from "@/components/audio-guide-player"
import GalleryViewer from "@/components/gallery-viewer"

export default function MuseumPage({ params }: { params: { id: string } }) {
  const museum = getMuseum(params.id)

  if (!museum) {
    notFound()
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <GalleryViewer images={museum.gallery} />

          <h1 className="text-3xl font-bold mt-6 mb-2">{museum.name}</h1>
          <p className="text-muted-foreground mb-4">{museum.location}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {museum.categories.map((category) => (
              <span
                key={category}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
              >
                {category}
              </span>
            ))}
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">About</h2>
            <p className="text-muted-foreground">{museum.description}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Opening Hours</h2>
            <p className="text-muted-foreground">{museum.hours}</p>
          </div>
        </div>

        <div>
          <Tabs defaultValue="tickets">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="tickets">Tickets</TabsTrigger>
              <TabsTrigger value="audio">Audio Guides</TabsTrigger>
            </TabsList>
            <TabsContent value="tickets">
              <Card>
                <CardHeader>
                  <CardTitle>Book Tickets</CardTitle>
                  <CardDescription>Select ticket types and quantity</CardDescription>
                </CardHeader>
                <CardContent>
                  <TicketSelection museum={museum} />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="audio">
              <Card>
                <CardHeader>
                  <CardTitle>Audio Guides</CardTitle>
                  <CardDescription>Enhance your visit with our audio guides</CardDescription>
                </CardHeader>
                <CardContent>
                  <AudioGuidePlayer guides={museum.audioGuides} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
