import AppointmentHero from "@/components/Appointment/AppointmentHero";
import ContactDetails from "@/components/Appointment/ContactDetails";
import AppointmentForm from "@/components/Appointment/AppointmentForm";
import MeetingInfo from "@/components/Appointment/MeetingInfo";

import styles from "./page.module.css";

export default function AppointmentPage() {
  return (
    <main className={styles.page}>
      <AppointmentHero />

      <div className={styles.container}>
        <div className={styles.contactLayout}>
          <ContactDetails />
          <AppointmentForm />
        </div>

        <MeetingInfo />
      </div>
    </main>
  );
}