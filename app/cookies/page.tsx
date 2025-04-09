export default function CookiesPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Cookie Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: April 10, 2025</p>

        <div className="prose max-w-none">
          <p>
            This Cookie Policy explains how Modern Museum ("we", "our", or "us") uses cookies and similar technologies
            to recognize you when you visit our website or use our mobile application (collectively, the "Platform"). It
            explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">What Are Cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website.
            Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well
            as to provide reporting information.
          </p>
          <p>
            Cookies set by the website owner (in this case, Modern Museum) are called "first-party cookies". Cookies set
            by parties other than the website owner are called "third-party cookies". Third-party cookies enable
            third-party features or functionality to be provided on or through the website (e.g., advertising,
            interactive content, and analytics).
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Why Do We Use Cookies?</h2>
          <p>
            We use first-party and third-party cookies for several reasons. Some cookies are required for technical
            reasons in order for our Platform to operate, and we refer to these as "essential" or "strictly necessary"
            cookies. Other cookies also enable us to track and target the interests of our users to enhance the
            experience on our Platform. Third parties serve cookies through our Platform for advertising, analytics, and
            other purposes.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Types of Cookies We Use</h2>
          <p>
            The specific types of first and third-party cookies served through our Platform and the purposes they
            perform are described below:
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Essential Cookies</h3>
          <p>
            These cookies are strictly necessary to provide you with services available through our Platform and to use
            some of its features, such as access to secure areas. Because these cookies are strictly necessary to
            deliver the Platform, you cannot refuse them without impacting how our Platform functions.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Session Cookies:</strong> These cookies are used to maintain your session while you navigate our
              Platform.
            </li>
            <li>
              <strong>Security Cookies:</strong> These cookies help us detect and prevent security risks.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Performance and Functionality Cookies</h3>
          <p>
            These cookies are used to enhance the performance and functionality of our Platform but are non-essential to
            their use. However, without these cookies, certain functionality may become unavailable.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Preference Cookies:</strong> These cookies remember your preferences and settings.
            </li>
            <li>
              <strong>Language Cookies:</strong> These cookies remember your language preference.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Analytics and Customization Cookies</h3>
          <p>
            These cookies collect information that is used either in aggregate form to help us understand how our
            Platform is being used or how effective our marketing campaigns are, or to help us customize our Platform
            for you.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Google Analytics:</strong> We use Google Analytics to understand how visitors interact with our
              Platform.
            </li>
            <li>
              <strong>Hotjar:</strong> We use Hotjar to better understand our users' needs and to optimize this service
              and experience.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Targeting Cookies</h3>
          <p>
            These cookies are used to make advertising messages more relevant to you. They perform functions like
            preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for
            advertisers, and in some cases selecting advertisements that are based on your interests.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Social Media Cookies:</strong> These cookies enable you to share pages and content that you find
              interesting on our Platform through third-party social networking and other websites.
            </li>
            <li>
              <strong>Advertising Cookies:</strong> These cookies are used to deliver advertisements more relevant to
              you and your interests.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">How Can You Control Cookies?</h2>
          <p>
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences
            by clicking on the appropriate opt-out links provided in the cookie banner that appears when you first visit
            our Platform.
          </p>
          <p>
            You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject
            cookies, you may still use our Platform though your access to some functionality and areas may be
            restricted. As the means by which you can refuse cookies through your web browser controls vary from browser
            to browser, you should visit your browser's help menu for more information.
          </p>
          <p>
            In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like
            to find out more information, please visit{" "}
            <a href="http://www.aboutads.info/choices/" className="text-primary hover:underline">
              http://www.aboutads.info/choices/
            </a>{" "}
            or{" "}
            <a href="http://www.youronlinechoices.com" className="text-primary hover:underline">
              http://www.youronlinechoices.com
            </a>
            .
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">How Often Will We Update This Cookie Policy?</h2>
          <p>
            We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies
            we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy
            regularly to stay informed about our use of cookies and related technologies.
          </p>
          <p>The date at the top of this Cookie Policy indicates when it was last updated.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Where Can You Get Further Information?</h2>
          <p>If you have any questions about our use of cookies or other technologies, please contact us at:</p>
          <p>
            Email: privacy@modernmuseum.in
            <br />
            Address: 123 Cultural Avenue, Connaught Place, Ahmedabad, 382480
          </p>
        </div>
      </div>
    </div>
  )
}
