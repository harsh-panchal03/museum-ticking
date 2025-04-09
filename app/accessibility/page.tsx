import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AccessibilityPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Accessibility Statement</h1>
        <p className="text-muted-foreground mb-8">Last updated: April 10, 2025</p>

        <div className="prose max-w-none">
          <p>
            Modern Museum is committed to ensuring digital accessibility for people with disabilities. We are
            continually improving the user experience for everyone and applying the relevant accessibility standards.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Commitment</h2>
          <p>
            We believe that the web should be accessible to all, regardless of technology or ability. We aim to comply
            with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards, which define requirements for
            designers and developers to improve accessibility for people with disabilities.
          </p>
          <p>
            These guidelines have three levels of accessibility (A, AA, and AAA). We've chosen Level AA as our target.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Measures We Take</h2>
          <p>We strive to ensure that our Platform is accessible by:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Providing clear navigation and semantic structure</li>
            <li>Ensuring sufficient color contrast between text and background</li>
            <li>Providing text alternatives for non-text content</li>
            <li>Making all functionality available from a keyboard</li>
            <li>Providing users enough time to read and use content</li>
            <li>Not designing content in a way that is known to cause seizures</li>
            <li>Providing ways to help users navigate, find content, and determine where they are</li>
            <li>Making text content readable and understandable</li>
            <li>Making web pages appear and operate in predictable ways</li>
            <li>Helping users avoid and correct mistakes</li>
            <li>Maximizing compatibility with current and future user tools</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Accessibility Features</h2>
          <p>Our Platform includes the following accessibility features:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Keyboard Navigation:</strong> All interactive elements are accessible via keyboard.
            </li>
            <li>
              <strong>Screen Reader Compatibility:</strong> Our content is structured to work with screen readers.
            </li>
            <li>
              <strong>Text Resizing:</strong> Text can be resized up to 200% without loss of content or functionality.
            </li>
            <li>
              <strong>Alternative Text:</strong> Images have appropriate alternative text descriptions.
            </li>
            <li>
              <strong>Form Labels:</strong> All form fields have associated labels.
            </li>
            <li>
              <strong>Focus Indicators:</strong> Visible focus indicators for keyboard navigation.
            </li>
            <li>
              <strong>ARIA Landmarks:</strong> ARIA landmarks are used to identify regions of the page.
            </li>
            <li>
              <strong>Consistent Navigation:</strong> Navigation mechanisms are consistent throughout the Platform.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Compatibility with Browsers and Assistive Technology</h2>
          <p>We aim to support the following browsers and assistive technologies:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Latest versions of Chrome, Firefox, Safari, and Edge</li>
            <li>Screen readers including JAWS, NVDA, VoiceOver, and TalkBack</li>
            <li>Zoom and magnification tools</li>
            <li>Voice recognition software</li>
            <li>Keyboard-only navigation</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Known Limitations</h2>
          <p>
            Despite our best efforts to ensure accessibility of the Platform, there may be some limitations. Below is a
            description of known limitations, and potential solutions. Please contact us if you observe an issue not
            listed below.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>PDF Documents:</strong> Some older PDF documents may not be fully accessible. We are working to
              remediate these documents or provide alternative formats upon request.
            </li>
            <li>
              <strong>Third-Party Content:</strong> Some third-party content embedded in our Platform may not be fully
              accessible. We are working with our partners to improve this.
            </li>
            <li>
              <strong>Legacy Content:</strong> Some older content may not meet all accessibility standards. We are
              working to update this content.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Feedback and Contact Information</h2>
          <p>
            We welcome your feedback on the accessibility of our Platform. Please let us know if you encounter
            accessibility barriers:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Email: accessibility@modernmuseum.in</li>
            <li>Phone: +91 9876543210</li>
            <li>Postal address: 123 Cultural Avenue, Connaught Place, Ahmedabad, 382480</li>
          </ul>
          <p>We try to respond to feedback within 3 business days.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Assessment and Compliance</h2>
          <p>The accessibility of our Platform is assessed in the following ways:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Self-evaluation by our development team</li>
            <li>External evaluation by accessibility experts</li>
            <li>User testing with people with disabilities</li>
            <li>Automated testing tools</li>
          </ul>
          <p>
            This statement was created on April 10, 2025, using the{" "}
            <a href="https://www.w3.org/WAI/planning/statements/" className="text-primary hover:underline">
              W3C Accessibility Statement Generator Tool
            </a>
            .
          </p>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Report an Accessibility Problem</h3>
            <p className="mb-4">
              We are always looking to improve the accessibility of our Platform. If you encounter any issues or have
              suggestions for improvement, please let us know.
            </p>
            <Link href="/contact">
              <Button>Contact Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
