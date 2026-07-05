"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/trips", label: "The Trips" },
  { href: "/team", label: "Team" },
  { href: "/services/party911", label: "Party911", accent: true },
];

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className={open ? "nav-open" : ""}>
      <Link className="wordmark" href="/">
        FRIENDERS<span>.</span>COLLECTIVE
      </Link>
      <div className="links">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`${pathname === l.href ? "active" : ""} ${l.accent ? "accent-link" : ""}`}
          >
            {l.label}
          </Link>
        ))}
        <Link href="/contact" className="btn btn-solid btn-nav">
          Book Us
        </Link>
      </div>
      <button
        className="menu-btn"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
      </button>
      <div className="mobile-menu" aria-hidden={!open}>
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={l.accent ? "accent-link" : ""}
          >
            {l.label}
          </Link>
        ))}
        <Link href="/contact">Book Us</Link>
      </div>
    </nav>
  );
}
