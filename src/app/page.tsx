import Hero from "@/components/Hero/Hero";
import MediationScope from "@/components/MediationScope/MediationScope";
import WhyMediation from "@/components/WhyMediation/WhyMediation";
import HomeAdditionalSections from "@/components/HomeAdditionalSections/HomeAdditionalSections";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <MediationScope />
      <WhyMediation />
      <HomeAdditionalSections />
      <Contact />
    </main>
  );
}
