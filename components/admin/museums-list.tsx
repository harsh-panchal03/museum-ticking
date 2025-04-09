"use client"

import { useState } from "react"
import { museums } from "@/lib/data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Pencil, Trash2, Search } from "lucide-react"

export default function AdminMuseumsList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isEditing, setIsEditing] = useState(false)
  const [currentMuseum, setCurrentMuseum] = useState<any>(null)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

  const filteredMuseums = museums.filter(
    (museum) =>
      museum.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      museum.location.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleEdit = (museum: any) => {
    setCurrentMuseum(museum)
    setIsEditing(true)
  }

  const handleDelete = (museum: any) => {
    setCurrentMuseum(museum)
    setIsDeleteDialogOpen(true)
  }

  const handleSave = () => {
    // In a real app, this would save to a database
    setIsEditing(false)
    setCurrentMuseum(null)
  }

  const handleConfirmDelete = () => {
    // In a real app, this would delete from a database
    setIsDeleteDialogOpen(false)
    setCurrentMuseum(null)
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle>Museums Management</CardTitle>
            <CardDescription>Manage museum information and pricing</CardDescription>
          </div>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search museums..."
                className="pl-8 w-[200px] md:w-[300px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Museum
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Museum</DialogTitle>
                  <DialogDescription>Enter the details for the new museum</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Museum Name</Label>
                    <Input id="name" placeholder="Enter museum name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="City, Country" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" placeholder="Enter museum description" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="hours">Opening Hours</Label>
                    <Input id="hours" placeholder="e.g. 10:00 AM - 6:00 PM, Closed on Mondays" />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => {}}>
                    Cancel
                  </Button>
                  <Button onClick={() => {}}>Save Museum</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Featured</TableHead>
              <TableHead>Adult Price</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredMuseums.map((museum) => (
              <TableRow key={museum.id}>
                <TableCell className="font-medium">{museum.name}</TableCell>
                <TableCell>{museum.location}</TableCell>
                <TableCell>{museum.featured ? "Yes" : "No"}</TableCell>
                <TableCell>₹{museum.ticketTypes.find((t) => t.id === "adult")?.price}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="icon" onClick={() => handleEdit(museum)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={() => handleDelete(museum)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>

      {/* Edit Dialog */}
      <Dialog open={isEditing} onOpenChange={setIsEditing}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Museum</DialogTitle>
            <DialogDescription>Update the museum information and pricing</DialogDescription>
          </DialogHeader>
          {currentMuseum && (
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="edit-name">Museum Name</Label>
                <Input id="edit-name" defaultValue={currentMuseum.name} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-location">Location</Label>
                <Input id="edit-location" defaultValue={currentMuseum.location} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-description">Description</Label>
                <Textarea id="edit-description" defaultValue={currentMuseum.description} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-hours">Opening Hours</Label>
                <Input id="edit-hours" defaultValue={currentMuseum.hours} />
              </div>
              <div className="grid gap-2">
                <Label>Ticket Pricing</Label>
                <div className="space-y-2">
                  {currentMuseum.ticketTypes.map((ticket: any) => (
                    <div key={ticket.id} className="flex items-center gap-2">
                      <Label htmlFor={`price-${ticket.id}`} className="w-24">
                        {ticket.name}
                      </Label>
                      <Input
                        id={`price-${ticket.id}`}
                        type="number"
                        defaultValue={ticket.price}
                        className="max-w-[120px]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this museum? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          {currentMuseum && (
            <div className="py-4">
              <p className="font-medium">{currentMuseum.name}</p>
              <p className="text-sm text-muted-foreground">{currentMuseum.location}</p>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleConfirmDelete}>
              Delete Museum
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  )
}
