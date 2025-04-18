"use client"

import { useFetchWithFallback } from "@/hooks/use-fetch-with-fallback"
import { museums } from "@/data"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { GalleryViewer } from "@/components/gallery-viewer"
import { TicketSelection } from "@/components/ticket-selection"
import { AudioGuidePlayer } from "@/components/audio-guide-player"
import { MapPin, Clock, Info, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function MuseumDetailsPage() {
  const { id } = useParams() as { id: string }
  const fallbackMuseum = museums.find((m) => m.id === id) || museums[0]

  // Use the updated hook with URL string
  const { data: museum, isLoading, error } = useFetchWithFallback(`/api/museums/${id}`, fallbackMuseum, [id])

  if (isLoading) {
    return <MuseumDetailsSkeleton />
  }

  if (!museum) {
    return (
      <div className="container py-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Museum Not Found</h1>
          <p className="mb-6">The museum you're looking for doesn't exist or has been removed.</p>
          <Link href="/museums">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Museums
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-10">
      {error && (
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded mb-6">
          <p>There was an error loading museum data. Showing fallback data instead.</p>
        </div>
      )}

      <Link href="/museums" className="inline-flex items-center mb-6 text-sm">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Museums
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-2">{museum.name}</h1>

          <div className="flex items-center text-muted-foreground mb-6">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{museum.location}</span>
            <span className="mx-2">•</span>
            <Clock className="h-4 w-4 mr-1" />
            <span>{museum.hours}</span>
          </div>

          <GalleryViewer images={museum.gallery || [museum.image]} />

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">About this Museum</h2>
            <p className="text-muted-foreground whitespace-pre-line">{museum.description}</p>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Highlights</h2>
            <ul className="space-y-2">
              {museum.highlights?.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <Info className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Audio Guide Preview</h2>
            <AudioGuidePlayer audioUrl="/audio-guide-sample.mp3" />
          </div>
        </div>

        <div>
          <div className="sticky top-20">
            <TicketSelection museum={museum} />
          </div>
        </div>
      </div>
    </div>
  )
}

function MuseumDetailsSkeleton() {
  return (
    <div className="container py-10">
      <div className="flex items-center mb-6">
        <Skeleton className="h-4 w-24" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <Skeleton className="h-10 w-3/4 mb-2" />
          <Skeleton className="h-4 w-1/2 mb-6" />

          <Skeleton className="h-[400px] w-full mb-8" />

          <Skeleton className="h-6 w-48 mb-4" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-3/4 mb-8" />

          <Skeleton className="h-6 w-32 mb-4" />
          <div className="space-y-2 mb-8">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>

          <Skeleton className="h-6 w-48 mb-4" />
          <Skeleton className="h-16 w-full" />
        </div>

        <div>
          <Skeleton className="h-[400px] w-full" />
        </div>
      </div>
    </div>
  )
}
