import Hero from "@/components/home/Hero";
import FounderMessage from "@/components/home/FounderMessage";
import WhySection from "@/components/home/WhySection";
import TopCourses from "@/components/home/TopCourses";
import HowToBegin from "@/components/home/HowToBegin";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <FounderMessage />
      <WhySection />
      <TopCourses />
      <HowToBegin />
      <Testimonials />
      <FAQ />
    </main>
  );
}
