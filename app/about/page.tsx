import Link from "next/link";
import { meta } from "@/lib/site";
export const metadata = meta(
  "About Espresso Ventures",
  "Espresso Ventures is an advisory and community platform for ambitious entrepreneurs. Based in Southwest Florida, it connects growth strategy, founder storytelling and business relationships.",
  "/about",
);
export default function Page() {
  return (
    <main id="main">
      <section className="section inner-hero">
        <p className="eyebrow">ESPRESSO VENTURES / ABOUT ESPRESSO VENTURES</p>
        <h1>Entrepreneurship is a team sport.</h1>
        <p className="lede">
          Espresso Ventures is an advisory and community platform for ambitious
          entrepreneurs. Based in Southwest Florida, it connects growth
          strategy, founder storytelling and business relationships.
        </p>
        <Link className="button" href="/naplestechmeetup">
          Explore Naples Tech ↗
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
          <h2>About Espresso Ventures</h2>
          <p>
            Sébastien Leduc leads Espresso Ventures. Seb and Naomi host Naples
            Tech & Espresso, the monthly community gathering at the intersection
            of innovation, capital and entrepreneurship.
          </p>
          <Link className="text-link" href="/naplestechmeetup">
            Explore Naples Tech ↗
          </Link>
        </div>
      </section>
    </main>
  );
}
