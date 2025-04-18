"use client"

import { Card, CardContent } from "@/components/ui/card"

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Art Enthusiast",
      quote:
        "The Modern Museum app made my visit so much easier. I booked tickets in advance, skipped the lines, and the audio guide was incredibly informative!",
    },
    {
      id: 2,
      name: "Rahul Mehta",
      role: "History Buff",
      quote:
        "I love how easy it is to discover new exhibitions and events. The detailed information about each museum helps me plan my visits perfectly.",
    },
    {
      id: 3,
      name: "Ananya Patel",
      role: "Photography Lover",
      quote:
        "The virtual tours feature is amazing! I was able to preview the museum before my visit and identify exactly which exhibits I wanted to focus on.",
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold mb-10 text-center">What Our Visitors Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
