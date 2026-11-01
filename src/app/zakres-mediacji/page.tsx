import styles from "./page.module.css";
import Image from "next/image";
import MediationScope from "@/components/MediationScope/MediationScope";
import MediationDetails from "@/components/MediationDetails/MediationDetails";
import Link from "next/link";
import ContactBaner from "@/components/ContactBaner/ContactBaner";

export default function ZakresMediacji() {
  return (
    <main className={styles.page}>
    <section className={styles.hero}>
  <div className={styles.heroContent}>
    <p className={styles.eyebrow}>ZAKRES MEDIACJI</p>

    <h1>
      Zakres
      <br />
      mediacji
    </h1>

    <span className={styles.goldLine} />

    <h2>
      Różne sytuacje, wspólny cel — porozumienie.
    </h2>

    <p className={styles.intro}>
      Prowadzę mediacje w czterech głównych obszarach,
      dostosowanych do potrzeb osób prywatnych i firm.
    </p>
  </div>

  <div className={styles.heroImage}>
    <Image
      src="/images/zakres-mediacji-hero.png"
      alt="Przestrzeń do mediacji z symbolem wagi sprawiedliwości"
      fill
      priority
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  </div>
</section>
<MediationScope />

      <MediationDetails />
         <ContactBaner />

    </main>
  );
}