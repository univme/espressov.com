import Link from "next/link";
import { meta } from "@/lib/site";
export const metadata = meta(
  "Expert on Demand",
  "Strategic advisory for ambitious entrepreneurs, focused on the client journey and go-to-market execution.",
  "/pricing-plans/expertondemand",
);
export default function Page() {
  return (
    <main id="main">
      <section className="section inner-hero">
        <p className="eyebrow">ESPRESSO VENTURES / EXPERT ON DEMAND</p>
        <h1>A clearer perspective on what comes next.</h1>
        <p className="lede">
          Strategic advisory for ambitious entrepreneurs, focused on the client
          journey and go-to-market execution.
        </p>
        <Link className="button" href="/contact">
          Discuss your venture ↗
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
          <h2>Expert on Demand</h2>
          <p>
            Expert on Demand brings together growth strategy and playbook
            review, connections to support sales, fundraising support and exit
            planning with partners. Talk with Espresso Ventures about current
            scope, fit and engagement terms.
          </p>
          <Link className="text-link" href="/contact">
            Discuss your venture ↗
          </Link>
        </div>
      </section>
    </main>
  );
}
