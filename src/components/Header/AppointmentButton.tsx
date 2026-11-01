"use client";

import { usePathname, useRouter } from "next/navigation";
import styles from "./AppointmentButton.module.css";

export default function AppointmentButton() {
  const pathname = usePathname();
  const router = useRouter();

  function handleClick() {
    if (pathname === "/umow-spotkanie") {
      document.getElementById("formularz")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      router.push("/umow-spotkanie");
    }
  }

  return (
    <button
      type="button"
      className={styles.button}
      onClick={handleClick}
    >
      Umów spotkanie
      <span aria-hidden="true">→</span>
    </button>
  );
}