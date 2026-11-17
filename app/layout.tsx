import type { Metadata } from "next";
import Link from "next/link";
import { site, JsonLd } from "@/lib/site";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Espresso Ventures | Entrepreneurs, Growth & Naples Tech",
    template: "%s | Espresso Ventures",
  },
  robots:
    process.env.INDEXABLE === "true"
      ? { index: true, follow: true }
      : { index: false, follow: false },
  icons: { icon: "/icon.svg" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <header className="header">
          <Link className="brand" href="/" aria-label="Espresso Ventures home">
            <img
              src="/images/logo.webp"
              width="214"
              height="49"
              alt="Espresso Ventures"
            />
            <span>ACCELERATE IN PARADISE</span>
          </Link>
          <nav aria-label="Main navigation">
            <Link href="/naplestechmeetup">Naples Tech</Link>
            <Link href="/entrepreneurialjourneys">Founder stories</Link>
            <Link href="/pricing-plans/expertondemand">Expertise</Link>
            <Link href="/technologydelegations">Delegations</Link>
            <Link className="nav-cta" href="/contact">
              Let’s connect <span aria-hidden="true">↗</span>
            </Link>
          </nav>
        </header>
        {children}
        <footer>
          <div className="footer-top">
            <div>
              <Link className="footer-wordmark" href="/">
                espresso<span>↗</span>
              </Link>
              <p>
                Ambition meets connection.
                <br />
                Right here in Southwest Florida.
              </p>
            </div>
            <div>
              <h2>Explore</h2>
              <Link href="/naplestechmeetup">Naples Tech & Espresso</Link>
              <Link href="/entrepreneurialjourneys">
                Entrepreneurial Journeys
              </Link>
              <Link href="/pricing-plans/expertondemand">Expert on Demand</Link>
              <Link href="/technologydelegations">Technology Delegations</Link>
              <Link href="/realestateinnovation">Real Estate Innovation</Link>
            </div>
            <div>
              <h2>Stay connected</h2>
              <a href={site.calendar}>Events on Luma ↗</a>
              <a href={site.instagram}>Instagram ↗</a>
              <a href={site.linkedin}>LinkedIn ↗</a>
              <a href={site.youtube}>YouTube ↗</a>
              <Link href="/contact">Contact & inquiries</Link>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
            <div>
              <h2>Florida mailing address</h2>
              <p>
                3665 Bonita Beach Rd SW #4198
                <br />
                Bonita Springs, FL 34134
              </p>
              <p className="small">
                Mailing address; event locations vary.
                <br />
                See each Luma listing for its venue.
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Espresso Ventures</span>
            <Link href="/about">About Espresso Ventures</Link>
          </div>
        </footer>
        <JsonLd
          value={{
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": site.url + "/#organization",
            name: site.name,
            url: site.url,
            email: site.email,
            logo: site.url + "/images/logo.webp",
            sameAs: [site.instagram, site.linkedin, site.youtube],
          }}
        />
      </body>
    </html>
  );
}
