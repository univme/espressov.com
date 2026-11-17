import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="section inner-hero">
      <p className="eyebrow">404 / A DIFFERENT DIRECTION</p>
      <h1>
        Let’s get you
        <br />
        back to good company.
      </h1>
      <p>This page could not be found.</p>
      <Link className="button" href="/">
        Back to Espresso Ventures ↗
      </Link>
    </main>
  );
}
