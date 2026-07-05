"use client";

import { useState } from "react";

const budgets = [
  "Under $5k",
  "$5k to $15k",
  "$15k to $50k",
  "$50k+",
  "Name the number when we talk",
];

const interests = [
  "Private event",
  "Trip / travel",
  "Venue",
  "Equipment rental",
  "DJ booking",
  "Catering, bar & staff",
  "Party911 (it's urgent)",
  "Not sure yet",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="form-done reveal in">
        <h3>Got it.</h3>
        <p>
          A producer will reply within one business day. If your event is
          today, do not wait on email: write{" "}
          <a href="mailto:911@frienders.co">911@frienders.co</a> with
          &quot;PARTY911&quot; in the subject.
        </p>
      </div>
    );
  }

  return (
    <form
      className="inquiry-form"
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: wire to a form backend (Vercel function / Formspree / Resend)
        setSent(true);
      }}
    >
      <div className="form-row">
        <label>
          Name
          <input type="text" name="name" required autoComplete="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" required autoComplete="email" />
        </label>
      </div>
      <div className="form-row">
        <label>
          Target date
          <input type="date" name="date" />
        </label>
        <label>
          Guest count
          <input type="number" name="guests" min={1} max={150} placeholder="Up to 150" />
        </label>
      </div>
      <div className="form-row">
        <label>
          What do you need?
          <select name="interest" defaultValue="">
            <option value="" disabled>
              Choose one
            </option>
            {interests.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </label>
        <label>
          Budget range
          <select name="budget" defaultValue="">
            <option value="" disabled>
              Choose one
            </option>
            {budgets.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </label>
      </div>
      <label>
        Tell us the vibe
        <textarea
          name="vibe"
          rows={4}
          placeholder="The occasion, the crowd, the energy you want in the room. Ambition welcome."
        />
      </label>
      <button className="btn btn-solid" type="submit">
        Send it
      </button>
      <p className="form-note">
        A producer replies within one business day. One crew, one budget, one
        text thread.
      </p>
    </form>
  );
}
