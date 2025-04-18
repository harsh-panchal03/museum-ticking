import { NextResponse } from "next/server"
import { museums } from "@/data"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    const museum = museums.find((m) => m.id === id)

    if (!museum) {
      return NextResponse.json({ error: "Museum not found" }, { status: 404 })
    }

    return NextResponse.json(museum)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch museum" }, { status: 500 })
  }
}
