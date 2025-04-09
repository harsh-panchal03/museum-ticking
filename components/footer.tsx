import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t py-8 md:py-12 bg-gray-50">
      <div className="container grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="font-bold text-xl">
            Modern Museum
          </Link>
          <p className="mt-2 text-sm text-muted-foreground">
            Discover and book tickets to the world's finest museums and cultural experiences.
          </p>
        </div>

        <div>
          <h3 className="font-medium mb-3">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/museums" className="text-muted-foreground hover:text-foreground">
                Museums
              </Link>
            </li>
            <li>
              <Link href="/events" className="text-muted-foreground hover:text-foreground">
                Events
              </Link>
            </li>
            <li>
              <Link href="/tours" className="text-muted-foreground hover:text-foreground">
                Guided Tours
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="text-muted-foreground hover:text-foreground">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/company" className="text-muted-foreground hover:text-foreground">
                Our Company
              </Link>
            </li>
            <li>
              <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/press" className="text-muted-foreground hover:text-foreground">
                Press
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="text-muted-foreground hover:text-foreground">
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link href="/accessibility" className="text-muted-foreground hover:text-foreground">
                Accessibility
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mt-8 pt-8 border-t">
        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Modern Museum. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
