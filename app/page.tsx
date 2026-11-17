import Link from "next/link";
import { meta, site } from "@/lib/site";
export const metadata = meta(
  "Espresso Ventures | Entrepreneurs, Growth & Naples Tech",
  "Espresso Ventures connects ambitious entrepreneurs with advisory expertise, founder storytelling and the Naples Tech & Espresso community in Southwest Florida.",
  "/",
);
export default function Home() {
  return (
    <main id="main">
      <section className="hero business-hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="dot" /> ESPRESSO VENTURES · SOUTHWEST FLORIDA
          </p>
          <h1>
            Ambitious people.
            <br />
            Exceptional possibilities.
          </h1>
          <p className="lede">
            Advisors to entrepreneurs. Connectors of people.
            <br />A place for your next chapter to begin.
          </p>
          <div className="actions">
            <Link className="button" href="/pricing-plans/expertondemand">
              Explore our expertise <span aria-hidden="true">↗</span>
            </Link>
            <Link className="text-link" href="/naplestechmeetup">
              Meet the community ↗
            </Link>
          </div>
          <div className="hero-foot">
            <span>STRATEGY. STORIES. CONNECTION.</span>
            <span>Naples, Florida ↗</span>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="/images/meetup.webp"
            srcSet="/images/meetup-small.webp 800w, /images/meetup.webp 1600w"
            sizes="(max-width: 800px) 100vw, 50vw"
            width="1600"
            height="1200"
            fetchPriority="high"
            alt="Entrepreneurs sharing conversations during an Espresso Ventures gathering"
          />
          <div className="image-caption">
            The ideas are important.
            <br />
            <strong>The people make the difference.</strong>
          </div>
        </div>
      </section>
      <div className="ribbon">
        <span>ENTREPRENEURSHIP</span>
        <i aria-hidden="true">✳</i>
        <span>INNOVATION</span>
        <i aria-hidden="true">✳</i>
        <span>HUMAN CONNECTION</span>
        <i aria-hidden="true">✳</i>
        <span>ACCELERATE IN PARADISE</span>
      </div>
      <section className="section intro">
        <p className="eyebrow">GOOD COMPANIES START WITH GOOD CONNECTIONS</p>
        <div className="split">
          <h2>
            Move your venture forward.
            <br />
            <em>Build something that matters.</em>
          </h2>
          <p>
            Espresso Ventures brings together strategic advisory, founder
            storytelling and an entrepreneurial community in Southwest Florida.
            Whether you’re sharpening your go-to-market approach, exploring
            Florida or meeting people building what’s next, there’s a place to
            start.
          </p>
        </div>
      </section>
      <section className="section offers">
        <Link className="offer" href="/pricing-plans/expertondemand">
          <span className="eyebrow">01 / EXPERTISE</span>
          <h3>
            A fresh perspective.
            <br />A clearer way forward.
          </h3>
          <p>
            Growth strategy, sales connections, fundraising support and exit
            planning through Expert on Demand.
          </p>
          <span className="text-link">Explore advisory ↗</span>
        </Link>
        <Link className="offer" href="/technologydelegations">
          <span className="eyebrow">02 / MARKET CONNECTIONS</span>
          <h3>
            Florida is closer
            <br />
            than you think.
          </h3>
          <p>
            Technology delegations connecting entrepreneurs with the business
            and investment ecosystem of South Florida.
          </p>
          <span className="text-link">Explore delegations ↗</span>
        </Link>
        <Link className="offer" href="/entrepreneurialjourneys">
          <span className="eyebrow">03 / FOUNDER STORIES</span>
          <h3>
            Behind every company,
            <br />a story worth telling.
          </h3>
          <p>
            Cinematic founder conversations that reveal the experiences,
            decisions and people behind the venture.
          </p>
          <span className="text-link">Entrepreneurial Journeys ↗</span>
        </Link>
      </section>
      <section className="community-feature">
        <div>
          <p className="eyebrow">THE COMMUNITY / NAPLES TECH & ESPRESSO</p>
          <h2>
            A small room.
            <br />
            <em>
              A bigger world
              <br />
              of possibility.
            </em>
          </h2>
          <p>
            Monthly gatherings for founders, technology professionals and people
            who believe in building together. Hosted by Seb & Naomi.
          </p>
          <Link className="button cream" href="/naplestechmeetup">
            Find your people <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <img
          src="/images/portrait.webp"
          width="900"
          height="1200"
          loading="lazy"
          alt="Two speakers sharing a conversation on stage at an Espresso Ventures event"
        />
      </section>
      <section className="section split about-preview">
        <div>
          <p className="eyebrow">A NOTE FROM OUR COMMUNITY</p>
          <h2>
            “To learn, to share,
            <br />
            <em>and to build together.”</em>
          </h2>
        </div>
        <div>
          <p>
            That’s how Seb and Naomi describe the room they’re creating through
            Naples Tech. It’s also the spirit behind Espresso Ventures:
            meaningful relationships, shared experience and the ambition to make
            something real.
          </p>
          <Link className="text-link" href="/about">
            Meet Espresso Ventures ↗
          </Link>
        </div>
      </section>
      <section className="closing section">
        <p className="eyebrow">YOUR NEXT CHAPTER</p>
        <h2>Let’s make a connection.</h2>
        <Link className="button" href="/contact">
          Start a conversation ↗
        </Link>
        <a className="text-link" href={site.calendar}>
          See what’s happening on Luma ↗
        </a>
      </section>
    </main>
  );
}
