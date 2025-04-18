import { NextResponse } from "next/server"
import { events } from "@/data"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const city = searchParams.get("city")

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    let filteredEvents = events

    if (city && city !== "all") {
      filteredEvents = events.filter((event) => event.city === city)
    }

    return NextResponse.json(filteredEvents)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch events" }, { status: 500 })
  }
}
