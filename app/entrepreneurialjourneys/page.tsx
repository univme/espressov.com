import Link from "next/link";
import { meta } from "@/lib/site";
export const metadata = meta(
  "Entrepreneurial Journeys",
  "A cinematic founder storytelling series by Espresso Ventures, set in Naples, Florida. Guided conversations explore the defining moments, challenges and philosophies behind the people building what\u2019s next.",
  "/entrepreneurialjourneys",
);
export default function Page() {
  return (
    <main id="main">
      <section className="section inner-hero">
        <p className="eyebrow">ESPRESSO VENTURES / ENTREPRENEURIAL JOURNEYS</p>
        <h1>Every founder has a story worth telling.</h1>
        <p className="lede">
          A cinematic founder storytelling series by Espresso Ventures, set in
          Naples, Florida. Guided conversations explore the defining moments,
          challenges and philosophies behind the people building what’s next.
        </p>
        <Link className="button" href="/contact">
          Discuss your founder story ↗
        </Link>
      </section>
      <section className="section split detail-section">
        <img
          src="/images/portrait.webp"
          width="900"
          height="1200"
          loading="lazy"
          alt="A founder conversation on stage"
        />
        <div>
          <p className="eyebrow">PEOPLE. PERSPECTIVE. POSSIBILITY.</p>
          <h2>Entrepreneurial Journeys</h2>
          <p>
            The Fireside Feature is a focused 2–3 minute founder film. The
            Signature Story is a deeper 4–5 minute film with a full-day,
            multi-location experience. Each connects storytelling with the
            Espresso Ventures and Naples Tech community.
          </p>
          <Link className="text-link" href="/contact">
            Discuss your founder story ↗
          </Link>
        </div>
      </section>
    </main>
  );
}
