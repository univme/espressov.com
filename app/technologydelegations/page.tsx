import Image from "next/image";
import Link from "next/link";
import { meta } from "@/lib/site";
export const metadata = meta(
  "Technology Delegations",
  "Tech Meets Florida connects entrepreneurs with the business and investment ecosystem across South Florida.",
  "/technologydelegations",
);
export default function Page() {
  return (
    <main id="main">
      <section className="section inner-hero">
        <p className="eyebrow">ESPRESSO VENTURES / TECHNOLOGY DELEGATIONS</p>
        <h1>Connect your ambition with South Florida.</h1>
        <p className="lede">
          Tech Meets Florida connects entrepreneurs with the business and
          investment ecosystem across South Florida.
        </p>
        <Link className="button" href="/contact">
          Ask about delegations ↗
        </Link>
      </section>
      <section className="section split detail-section">
        <Image
          sizes="(max-width: 800px) 100vw, (max-width: 1600px) 45vw, 720px"
          src="/images/meetup.webp"
          width="1600"
          height="1200"
          loading="lazy"
          alt="People connecting at an Espresso Ventures event"
        />
        <div>
          <p className="eyebrow">PEOPLE. PERSPECTIVE. POSSIBILITY.</p>
          <h2>Technology Delegations</h2>
          <p>
            Previous delegations have brought together business leaders,
            investors, economic development organizations and technology
            entrepreneurs. The fifth edition was completed in October 2025.
            Inquire about current opportunities and custom missions; dates,
            pricing and availability must be confirmed directly.
          </p>
          <Link className="text-link" href="/contact">
            Ask about delegations ↗
          </Link>
        </div>
      </section>
    </main>
  );
}
