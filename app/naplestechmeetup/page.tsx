import Link from "next/link";
import Calendar from "@/components/Calendar";
import { meta, site } from "@/lib/site";
export const metadata = meta(
  "Naples Tech & Espresso | Monthly Community Gatherings",
  "Meet founders, technology professionals and entrepreneurs at Naples Tech & Espresso. Explore monthly Southwest Florida gatherings hosted by Seb and Naomi.",
  "/naplestechmeetup",
);
export default function Community() {
  return (
    <main id="main">
      <section className="hero tech-hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="dot" /> NAPLES TECH & ESPRESSO / BY ESPRESSO
            VENTURES
          </p>
          <h1>
            Good people.
            <br />
            Real conversations.
            <br />
            <em>New possibilities.</em>
          </h1>
          <p className="lede">
            A monthly gathering for the people building what’s next in Naples
            and Southwest Florida.
          </p>
          <div className="actions">
            <a className="button" href="#calendar">
              Find your next gathering ↗
            </a>
            <a className="text-link" href="#community">
              Get to know us ↓
            </a>
          </div>
          <div className="hero-foot">
            <span>HOSTED BY SEB & NAOMI</span>
            <span>Come curious. Give generously.</span>
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
            alt="Naples Tech guests connecting over drinks and conversation"
          />
          <div className="photo-tag">
            INNOVATION × CAPITAL × ENTREPRENEURSHIP
          </div>
        </div>
      </section>
      <div className="ribbon">
        <span>ENTREPRENEURS FIRST</span>
        <i aria-hidden="true">✳</i>
        <span>BE GENEROUS</span>
        <i aria-hidden="true">✳</i>
        <span>SOUTHERN HOSPITALITY</span>
      </div>
      <section className="section" id="community">
        <p className="eyebrow">A COMMUNITY, ONE CONVERSATION AT A TIME</p>
        <div className="split">
          <h2>
            You don’t have to
            <br />
            <em>build alone.</em>
          </h2>
          <div>
            <p>
              Naples Tech & Espresso brings entrepreneurs, technology
              professionals and collaborators together at the intersection of
              innovation, capital and entrepreneurship.
            </p>
            <p>
              We gather monthly in Southwest Florida to learn, share and build
              relationships. Small, welcoming conversations make room for
              different perspectives—and the connections that come next.
            </p>
          </div>
        </div>
      </section>
      <section className="section calendar-section" id="calendar">
        <div className="section-title">
          <div>
            <p className="eyebrow">MAKE ROOM FOR SOMETHING GOOD</p>
            <h2>See you at the next one.</h2>
          </div>
          <a className="text-link" href={site.calendar}>
            Follow our calendar ↗
          </a>
        </div>
        <Calendar />
      </section>
      <section className="section principles">
        <div>
          <p className="eyebrow">HOW WE SHOW UP</p>
          <h2>
            Three simple rules.
            <br />
            <em>A better kind of room.</em>
          </h2>
        </div>
        <ol>
          <li>
            <span>01</span>
            <div>
              <h3>Entrepreneurs first.</h3>
              <p>
                Support existing and aspiring entrepreneurs building great
                companies from Southwest Florida to the world.
              </p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Be generous.</h3>
              <p>
                Arrive with an open mind and something to give. Share an idea,
                make an introduction, or listen to someone’s next big question.
              </p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Southern hospitality.</h3>
              <p>
                Be courteous, respectful and constructive. Help make this a
                place where people feel welcome.
              </p>
            </div>
          </li>
        </ol>
      </section>
      <section className="community-feature hosts">
        <div>
          <p className="eyebrow">FROM YOUR HOSTS / SEB & NAOMI</p>
          <h2>
            “What started as
            <br />a simple idea has
            <br />
            <em>turned into something real.”</em>
          </h2>
          <p>
            “A room full of entrepreneurs showing up for the right reasons: to
            learn, to share, and to build together.”
          </p>
          <p className="small">From Seb & Naomi’s April community email.</p>
          <Link className="button cream" href="/about">
            Meet the people behind it ↗
          </Link>
        </div>
        <img
          src="/images/banner.webp"
          width="900"
          height="1200"
          loading="lazy"
          alt="Espresso Ventures welcome flag outside Venture Visionary Partners"
        />
      </section>
      <section className="section faq">
        <div>
          <p className="eyebrow">BEFORE YOU JOIN US</p>
          <h2>A few good questions.</h2>
        </div>
        <div>
          <details>
            <summary>Who is Naples Tech & Espresso for?</summary>
            <p>
              Entrepreneurs, technology professionals, investors and people
              interested in innovation and collaboration in Southwest Florida.
            </p>
          </details>
          <details>
            <summary>Where and when do you meet?</summary>
            <p>
              We gather monthly. Dates and venues vary. The Luma calendar has
              the current details for each gathering.
            </p>
          </details>
          <details>
            <summary>How do I register?</summary>
            <p>
              Choose an event on our <a href={site.calendar}>Luma calendar</a>{" "}
              and follow its registration steps. Ticket details and availability
              are listed by event.
            </p>
          </details>
          <details>
            <summary>Can I support or collaborate with the community?</summary>
            <p>
              Yes. For sponsorship or collaboration inquiries,{" "}
              <Link href="/contact">contact Espresso Ventures</Link>.
            </p>
          </details>
        </div>
      </section>
      <section className="closing section">
        <p className="eyebrow">A GOOD PLACE TO START</p>
        <h2>
          Come for the conversation.
          <br />
          <em>Stay for the connections.</em>
        </h2>
        <a className="button" href={site.calendar}>
          Explore upcoming events ↗
        </a>
      </section>
    </main>
  );
}
