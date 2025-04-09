"use client"

import { useState } from "react"
import type { Museum } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

interface TicketSelectionProps {
  museum: Museum
}

export default function TicketSelection({ museum }: TicketSelectionProps) {
  const router = useRouter()
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [tickets, setTickets] = useState<Record<string, number>>({})
  const [isProcessing, setIsProcessing] = useState(false)

  const handleQuantityChange = (ticketId: string, quantity: number) => {
    setTickets((prev) => ({
      ...prev,
      [ticketId]: Math.max(0, quantity),
    }))
  }

  const calculateTotal = () => {
    return museum.ticketTypes.reduce((total, ticket) => {
      return total + (tickets[ticket.id] || 0) * ticket.price
    }, 0)
  }

  const handleProceedToCheckout = () => {
    setIsProcessing(true)

    // Simulate processing and redirect
    setTimeout(() => {
      router.push(`/checkout?museum=${museum.id}&date=${date?.toISOString()}&tickets=${JSON.stringify(tickets)}`)
    }, 1000)
  }

  const hasSelectedTickets = Object.values(tickets).some((quantity) => quantity > 0)
  const isDateSelected = !!date

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="visit-date">Select Visit Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="visit-date"
              variant="outline"
              className={cn("w-full justify-start text-left font-normal mt-1", !date && "text-muted-foreground")}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : "Select a date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
              disabled={(date) => date < new Date()}
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-4">
        <Label>Select Tickets</Label>
        {museum.ticketTypes.map((ticket) => (
          <div key={ticket.id} className="flex items-center justify-between">
            <div>
              <p className="font-medium">{ticket.name}</p>
              <p className="text-sm text-muted-foreground">₹{ticket.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange(ticket.id, (tickets[ticket.id] || 0) - 1)}
                disabled={!tickets[ticket.id]}
              >
                -
              </Button>
              <Input
                type="number"
                min="0"
                value={tickets[ticket.id] || 0}
                onChange={(e) => handleQuantityChange(ticket.id, Number.parseInt(e.target.value) || 0)}
                className="w-16 mx-2 text-center"
              />
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange(ticket.id, (tickets[ticket.id] || 0) + 1)}
              >
                +
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t">
        <div className="flex justify-between mb-4">
          <span className="font-medium">Total</span>
          <span className="font-bold">₹{calculateTotal().toFixed(2)}</span>
        </div>

        <Button
          className="w-full"
          disabled={!hasSelectedTickets || !isDateSelected || isProcessing}
          onClick={handleProceedToCheckout}
        >
          {isProcessing ? "Processing..." : "Proceed to Checkout"}
        </Button>
      </div>
    </div>
  )
}
