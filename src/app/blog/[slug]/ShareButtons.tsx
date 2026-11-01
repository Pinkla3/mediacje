
"use client";

import { useState } from "react";
import styles from "./page.module.css";

type ShareButtonsProps = {
  title: string;
};

export default function ShareButtons({ title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Skopiuj link do artykułu:", window.location.href);
    }
  }

  const shareUrl =
    typeof window === "undefined" ? "" : window.location.href;

  return (
    <div className={styles.shareButtons}>
      <button
        type="button"
        onClick={() => {
          const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            shareUrl || `/blog`
          )}`;
          window.open(url, "_blank", "noopener,noreferrer");
        }}
        aria-label="Udostępnij na Facebooku"
        title="Facebook"
      >
        f
      </button>

      <button
        type="button"
        onClick={() => {
          const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            window.location.href
          )}`;
          window.open(url, "_blank", "noopener,noreferrer");
        }}
        aria-label="Udostępnij na LinkedIn"
        title="LinkedIn"
      >
        in
      </button>

      <button
        type="button"
        onClick={copyLink}
        aria-label="Skopiuj link do artykułu"
        title={copied ? "Skopiowano link" : "Skopiuj link"}
      >
        {copied ? "✓" : "↗"}
      </button>

      <span className={styles.shareFeedback} aria-live="polite">
        {copied ? "Skopiowano link" : ""}
      </span>
    </div>
  );
}
