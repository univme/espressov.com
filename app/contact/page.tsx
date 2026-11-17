import { meta, site } from "@/lib/site";
export const metadata = meta(
  "Contact & Collaborate",
  "Connect with Espresso Ventures about advisory, founder stories, delegations, or Naples Tech & Espresso sponsorship and collaboration.",
  "/contact",
);
export default function Contact() {
  return (
    <main id="main">
      <section className="section inner-hero">
        <p className="eyebrow">LET’S CONNECT</p>
        <h1>
          Good things start
          <br />
          <em>with a conversation.</em>
        </h1>
        <p className="lede">
          Advisory, founder stories, delegations or a collaboration with Naples
          Tech—tell us what you’re working on.
        </p>
        <a className="button" href={`mailto:${site.email}`}>
          Email Espresso Ventures ↗
        </a>
        <p className="small">
          Write to <a href={`mailto:${site.email}`}>{site.email}</a>. The email
          link opens your email app.
        </p>
      </section>
      <section className="section offers">
        <div className="offer">
          <h2>Join a gathering.</h2>
          <p>Find current dates, venues and registration details on Luma.</p>
          <a className="text-link" href={site.calendar}>
            Open the community calendar ↗
          </a>
        </div>
        <div className="offer">
          <h2>Stay connected.</h2>
          <p>Follow the conversations and people in our community.</p>
          <a className="text-link" href={site.linkedin}>
            Connect on LinkedIn ↗
          </a>
          <br />
          <a className="text-link" href={site.instagram}>
            Follow on Instagram ↗
          </a>
        </div>
        <div className="offer">
          <h2>Florida mailing address</h2>
          <p>
            3665 Bonita Beach Rd SW #4198
            <br />
            Bonita Springs, FL 34134
          </p>
          <p>Mailing address only. Check Luma for each event venue.</p>
        </div>
      </section>
    </main>
  );
}
