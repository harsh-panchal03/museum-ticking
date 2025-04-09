"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Users, Calendar, DollarSign, LogOut } from "lucide-react"
import AdminMuseumsList from "@/components/admin/museums-list"
import AdminEventsList from "@/components/admin/events-list"
import AdminLayout from "@/components/admin/layout"
import Image from "next/image"

export default function AdminDashboardPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("overview")

  const handleLogout = () => {
    router.push("/admin/login")
  }

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button variant="outline" onClick={handleLogout}>
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </div>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="museums">Museums</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Total Revenue</CardDescription>
                <CardTitle className="text-3xl">₹1,25,450</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground flex items-center">
                  <span className="text-green-500 mr-1">+12.5%</span> from last month
                </div>
                <div className="mt-4 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-1 rounded-full" style={{ width: "70%" }}></div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Ticket Sales</CardDescription>
                <CardTitle className="text-3xl">2,345</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground flex items-center">
                  <span className="text-green-500 mr-1">+8.2%</span> from last month
                </div>
                <div className="mt-4 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-1 rounded-full" style={{ width: "65%" }}></div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Active Users</CardDescription>
                <CardTitle className="text-3xl">12,456</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground flex items-center">
                  <span className="text-green-500 mr-1">+5.3%</span> from last month
                </div>
                <div className="mt-4 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div className="bg-purple-500 h-1 rounded-full" style={{ width: "80%" }}></div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Upcoming Events</CardDescription>
                <CardTitle className="text-3xl">8</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground flex items-center">
                  <span className="text-yellow-500 mr-1">+0%</span> from last month
                </div>
                <div className="mt-4 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div className="bg-yellow-500 h-1 rounded-full" style={{ width: "50%" }}></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Featured Museums</CardTitle>
                <CardDescription>Top performing museums this month</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="grid grid-cols-2 gap-2 p-4">
                  <div className="relative h-32 rounded-md overflow-hidden">
                    <Image
                      src="https://thumbs.dreamstime.com/b/louvre-museum-28960688.jpg"
                      alt="National Museum"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-end p-2">
                      <span className="text-white text-sm font-medium">National Museum</span>
                    </div>
                  </div>
                  <div className="relative h-32 rounded-md overflow-hidden">
                    <Image
                      src="https://thumbs.dreamstime.com/b/nyc-metropolitan-museum-art-20578008.jpg"
                      alt="Chhatrapati Shivaji Museum"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-end p-2">
                      <span className="text-white text-sm font-medium">Chhatrapati Shivaji Museum</span>
                    </div>
                  </div>
                  <div className="relative h-32 rounded-md overflow-hidden">
                    <Image
                      src="https://thumbs.dreamstime.com/b/picasso-museum-barcelona-people-spain-77086707.jpg"
                      alt="Indian Museum"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-end p-2">
                      <span className="text-white text-sm font-medium">Indian Museum</span>
                    </div>
                  </div>
                  <div className="relative h-32 rounded-md overflow-hidden">
                    <Image
                      src="https://thumbs.dreamstime.com/b/miami-museum-26730992.jpg"
                      alt="Salar Jung Museum"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-end p-2">
                      <span className="text-white text-sm font-medium">Salar Jung Museum</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest transactions and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        {i % 3 === 0 ? (
                          <Users className="h-4 w-4 text-primary" />
                        ) : i % 3 === 1 ? (
                          <Calendar className="h-4 w-4 text-primary" />
                        ) : (
                          <DollarSign className="h-4 w-4 text-primary" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">
                          {i % 3 === 0 ? "New user registered" : i % 3 === 1 ? "New event created" : "Ticket purchased"}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {i % 3 === 0
                            ? "user@example.com"
                            : i % 3 === 1
                              ? "Classical Indian Art Exhibition"
                              : "₹800 - 2 tickets"}
                        </p>
                      </div>
                      <div className="text-xs text-muted-foreground">{i * 10} min ago</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="museums">
          <AdminMuseumsList />
        </TabsContent>

        <TabsContent value="events">
          <AdminEventsList />
        </TabsContent>
      </Tabs>
    </AdminLayout>
  )
}
