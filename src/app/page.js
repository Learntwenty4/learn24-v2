import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FounderMessage from './components/FounderMessage';
import WhySection from './components/WhySection';
import TopCourses from './components/TopCourses';
import HowToBegin from './components/HowToBegin';

export default function Home() {

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FounderMessage />
      <WhySection />
      <TopCourses/>
      <HowToBegin />
  
    </main>
  );
}