"use client"

import type React from "react"

import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import { getMuseum, type TicketType } from "@/lib/data"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { format } from "date-fns"
import { useRouter } from "next/navigation"
import { Check, CreditCard } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function CheckoutPage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(true)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [step, setStep] = useState(1)

  const [museumData, setMuseumData] = useState<any>(null)
  const [ticketsData, setTicketsData] = useState<Record<string, number>>({})
  const [visitDate, setVisitDate] = useState<Date | null>(null)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
    nameOnCard: "",
  })

  useEffect(() => {
    const museumId = searchParams.get("museum")
    const dateStr = searchParams.get("date")
    const ticketsStr = searchParams.get("tickets")

    if (museumId && dateStr && ticketsStr) {
      const museum = getMuseum(museumId)
      const date = new Date(dateStr)
      const tickets = JSON.parse(ticketsStr)

      if (museum) {
        setMuseumData(museum)
        setVisitDate(date)
        setTicketsData(tickets)
      }
    }

    setIsLoading(false)
  }, [searchParams])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const calculateSubtotal = () => {
    if (!museumData) return 0

    return museumData.ticketTypes.reduce((total: number, ticket: TicketType) => {
      return total + (ticketsData[ticket.id] || 0) * ticket.price
    }, 0)
  }

  const calculateTax = () => {
    return calculateSubtotal() * 0.08 // 8% tax
  }

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax()
  }

  const handleContinue = () => {
    setStep(2)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setIsComplete(true)
    }, 2000)
  }

  if (isLoading) {
    return (
      <div className="container mx-auto py-10 px-4 text-center">
        <p>Loading checkout information...</p>
      </div>
    )
  }

  if (!museumData || !visitDate) {
    return (
      <div className="container mx-auto py-10 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Invalid Checkout Information</h1>
        <p className="mb-6">We couldn't find the ticket information you're looking for.</p>
        <Button onClick={() => router.push("/")}>Return to Home</Button>
      </div>
    )
  }

  if (isComplete) {
    return (
      <div className="container mx-auto py-10 px-4 max-w-md">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <Check className="h-6 w-6 text-green-600" />
            </div>
            <CardTitle className="text-2xl">Payment Successful!</CardTitle>
            <CardDescription>Your tickets have been booked successfully</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-medium">Museum</h3>
              <p>{museumData.name}</p>
            </div>
            <div>
              <h3 className="font-medium">Visit Date</h3>
              <p>{format(visitDate, "EEEE, MMMM d, yyyy")}</p>
            </div>
            <div>
              <h3 className="font-medium">Tickets</h3>
              <ul className="space-y-1">
                {museumData.ticketTypes.map((ticket: TicketType) => {
                  if (!ticketsData[ticket.id]) return null
                  return (
                    <li key={ticket.id} className="flex justify-between">
                      <span>
                        {ticket.name} × {ticketsData[ticket.id]}
                      </span>
                      <span>₹{(ticket.price * ticketsData[ticket.id]).toFixed(2)}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
            <Separator />
            <div className="flex justify-between font-medium">
              <span>Total</span>
              <span>₹{calculateTotal().toFixed(2)}</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={() => router.push("/")}>
              Return to Home
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Accordion type="single" collapsible defaultValue={step === 1 ? "personal" : "payment"}>
              <AccordionItem value="personal">
                <AccordionTrigger className="text-lg font-semibold">1. Personal Information</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 py-2">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    {step === 1 && (
                      <Button
                        className="w-full mt-4"
                        onClick={handleContinue}
                        disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone}
                      >
                        Continue to Payment
                      </Button>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="payment" disabled={step === 1}>
                <AccordionTrigger className="text-lg font-semibold">2. Payment Information</AccordionTrigger>
                <AccordionContent>
                  <form onSubmit={handleSubmit} className="space-y-4 py-2">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <div className="flex items-center border rounded-md px-3 py-2">
                        <CreditCard className="h-4 w-4 mr-2 text-muted-foreground" />
                        <Input
                          id="cardNumber"
                          name="cardNumber"
                          className="border-0 p-0 shadow-none focus-visible:ring-0"
                          placeholder="1234 5678 9012 3456"
                          required
                          value={formData.cardNumber}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input
                          id="expiry"
                          name="expiry"
                          placeholder="MM/YY"
                          required
                          value={formData.expiry}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input
                          id="cvc"
                          name="cvc"
                          placeholder="123"
                          required
                          value={formData.cvc}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="nameOnCard">Name on Card</Label>
                      <Input
                        id="nameOnCard"
                        name="nameOnCard"
                        required
                        value={formData.nameOnCard}
                        onChange={handleChange}
                      />
                    </div>

                    <Button type="submit" className="w-full mt-4" disabled={isProcessing}>
                      {isProcessing ? "Processing Payment..." : `Pay ₹${calculateTotal().toFixed(2)}`}
                    </Button>
                  </form>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium">{museumData.name}</h3>
                  <p className="text-sm text-muted-foreground">{museumData.location}</p>
                </div>

                <div>
                  <h3 className="font-medium">Visit Date</h3>
                  <p className="text-sm text-muted-foreground">{format(visitDate, "EEEE, MMMM d, yyyy")}</p>
                </div>

                <div>
                  <h3 className="font-medium">Tickets</h3>
                  <ul className="space-y-1">
                    {museumData.ticketTypes.map((ticket: TicketType) => {
                      if (!ticketsData[ticket.id]) return null
                      return (
                        <li key={ticket.id} className="flex justify-between text-sm">
                          <span>
                            {ticket.name} × {ticketsData[ticket.id]}
                          </span>
                          <span>₹{(ticket.price * ticketsData[ticket.id]).toFixed(2)}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>

                <Separator />

                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>₹{calculateSubtotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax (8%)</span>
                    <span>₹{calculateTax().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-medium mt-2">
                    <span>Total</span>
                    <span>₹{calculateTotal().toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
