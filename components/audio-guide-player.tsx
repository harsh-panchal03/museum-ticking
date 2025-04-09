"use client"

import { useState, useRef } from "react"
import type { AudioGuide } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { Slider } from "@/components/ui/slider"

interface AudioGuidePlayerProps {
  guides: AudioGuide[]
}

export default function AudioGuidePlayer({ guides }: AudioGuidePlayerProps) {
  const [selectedGuide, setSelectedGuide] = useState<AudioGuide | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(80)

  const audioRef = useRef<HTMLAudioElement | null>(null)

  // In a real app, we would use actual audio files
  // For this demo, we'll simulate audio playback
  const handlePlayPause = () => {
    if (!selectedGuide) return

    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleSelectGuide = (guide: AudioGuide) => {
    setSelectedGuide(guide)
    setIsPlaying(false)
    setProgress(0)

    // In a real app, we would load the audio file here
    if (audioRef.current) {
      audioRef.current.src = `/audio/${guide.id}.mp3`
      audioRef.current.load()
    }
  }

  const handleMuteToggle = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0]
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100
    }
  }

  const handleProgressChange = (value: number[]) => {
    const newProgress = value[0]
    setProgress(newProgress)
    if (audioRef.current) {
      audioRef.current.currentTime = (newProgress / 100) * audioRef.current.duration
    }
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        {guides.map((guide) => (
          <Card
            key={guide.id}
            className={cn(
              "cursor-pointer transition-colors hover:bg-accent",
              selectedGuide?.id === guide.id && "border-primary",
            )}
            onClick={() => handleSelectGuide(guide)}
          >
            <CardContent className="p-4 flex justify-between items-center">
              <div>
                <h3 className="font-medium">{guide.name}</h3>
                <p className="text-sm text-muted-foreground">{guide.duration}</p>
              </div>
              {selectedGuide?.id === guide.id && (
                <Button size="sm" variant="ghost">
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedGuide && (
        <div className="space-y-4 pt-4 border-t">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">{selectedGuide.name}</h3>
            <span className="text-sm text-muted-foreground">{selectedGuide.duration}</span>
          </div>

          <div className="space-y-2">
            <Slider value={[progress]} min={0} max={100} step={1} onValueChange={handleProgressChange} />

            <div className="flex items-center justify-between">
              <Button variant="outline" size="icon" onClick={handlePlayPause}>
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>

              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" onClick={handleMuteToggle}>
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </Button>
                <Slider
                  className="w-24"
                  value={[volume]}
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={handleVolumeChange}
                />
              </div>
            </div>
          </div>

          <audio
            ref={audioRef}
            className="hidden"
            onTimeUpdate={() => {
              if (audioRef.current) {
                setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100)
              }
            }}
            onEnded={() => {
              setIsPlaying(false)
              setProgress(0)
            }}
          />

          <div className="text-sm text-muted-foreground">
            <p>
              This is a simulated audio guide. In a real application, this would play actual audio content providing
              information about the museum exhibits and artwork.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

// Helper function from lib/utils.ts
const cn = (...classes: any[]) => {
  return classes.filter(Boolean).join(" ")
}
