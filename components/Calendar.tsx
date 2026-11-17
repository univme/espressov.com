"use client";
import { useState } from "react";
import { site } from "@/lib/site";
export default function Calendar() {
  const [shown, setShown] = useState(false);
  return (
    <div className="calendar-shell">
      <div className="calendar-bar">
        <span className="eyebrow">NAPLES TECH & ESPRESSO · LUMA</span>
        <a href={site.calendar}>Open calendar ↗</a>
      </div>
      {shown ? (
        <>
          <iframe
            title="Upcoming Naples Tech and Espresso events on Luma"
            src="https://luma.com/embed/calendar/cal-fgxAGrnJgLIIqdi/events?lt=light"
            height="650"
            loading="lazy"
            allow="fullscreen"
          />
          <p className="calendar-note" role="status">
            If the calendar doesn’t appear,{" "}
            <a href={site.calendar}>view all events on Luma</a>.
          </p>
        </>
      ) : (
        <div className="calendar-intro">
          <div className="calendar-mark" aria-hidden="true">
            ↗
          </div>
          <h3>Your next good conversation starts here.</h3>
          <p>
            Explore upcoming gatherings, see the latest venue and ticket
            details, and reserve your place through our Luma calendar.
          </p>
          <button className="button" onClick={() => setShown(true)}>
            Show live calendar <span aria-hidden="true">↗</span>
          </button>
          <a className="text-link" href={site.calendar}>
            Prefer Luma? Open the full calendar ↗
          </a>
          <p className="small">
            Loading the calendar connects to Luma. Registration is handled by
            Luma.
          </p>
        </div>
      )}
    </div>
  );
}
