
"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import AppointmentButton from "./AppointmentButton";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <span className={styles.logoIcon}>
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <g
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M24 45V22" />
                <path d="M24 35C12 33 5 23 3 12C17 13 25 22 24 35Z" />
                <path d="M6 15L23 33" />
                <path d="M24 27C22 13 30 4 41 1C44 15 36 25 24 27Z" />
                <path d="M39 4L25 25" />
                <path d="M24 39C34 37 42 29 46 17C32 17 25 26 24 39Z" />
                <path d="M43 20L25 37" />
              </g>
            </svg>
          </span>

          <span className={styles.logoText}>
            <strong>MEDIACJE</strong>
            <small>POROZUMIENIE MA ZNACZENIE</small>
          </span>
        </Link>

        <nav className={styles.navigation}>
          <Link href="/o-mnie">O mnie</Link>
          <Link href="/zakres-mediacji">Zakres mediacji</Link>
          <Link href="/blog">Blog</Link>
        </nav>

      <AppointmentButton />

        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`${styles.mobileNavigation} ${
          menuOpen ? styles.mobileNavigationOpen : ""
        }`}
        aria-hidden={!menuOpen}
      >
        <Link href="/o-mnie" onClick={closeMenu}>
          O mnie
        </Link>

        <Link href="/zakres-mediacji" onClick={closeMenu}>
          Zakres mediacji
        </Link>

        <Link href="/blog" onClick={closeMenu}>
          Blog
        </Link>

<AppointmentButton />
      </nav>
    </header>
  );
}