import Link from "next/link";
import { meta } from "@/lib/site";
export const metadata = meta(
  "Real Estate Innovation",
  "Real Estate Meets Florida brings together real estate, technology and business connections through Espresso Ventures.",
  "/realestateinnovation",
);
export default function Page() {
  return (
    <main id="main">
      <section className="section inner-hero">
        <p className="eyebrow">ESPRESSO VENTURES / REAL ESTATE INNOVATION</p>
        <h1>A new perspective on the built world.</h1>
        <p className="lede">
          Real Estate Meets Florida brings together real estate, technology and
          business connections through Espresso Ventures.
        </p>
        <Link className="button" href="/contact">
          Explore a collaboration ↗
        </Link>
      </section>
      <section className="section split detail-section">
        <img
          src="/images/meetup.webp"
          width="1600"
          height="1200"
          loading="lazy"
          alt="People connecting at an Espresso Ventures event"
        />
        <div>
          <p className="eyebrow">PEOPLE. PERSPECTIVE. POSSIBILITY.</p>
          <h2>Real Estate Innovation</h2>
          <p>
            The February 2025 delegation included industry visits, business
            sessions and a signature event in North Miami. It explored
            innovations in how real estate is presented, sold and experienced.
            Ask about current opportunities rather than treating a past mission
            as an available booking.
          </p>
          <Link className="text-link" href="/contact">
            Explore a collaboration ↗
          </Link>
        </div>
      </section>
    </main>
  );
}
