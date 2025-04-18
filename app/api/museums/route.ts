import { NextResponse } from "next/server"
import { museums } from "@/data"

export async function GET() {
  try {
    // In a real app, you would fetch from a database here
    // For now, we'll use our static data

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    return NextResponse.json(museums)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch museums" }, { status: 500 })
  }
}
