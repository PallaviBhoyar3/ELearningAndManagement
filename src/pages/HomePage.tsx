
import HeroSection from "@/components/home/HeroSection";
import CoursesSection from "@/components/home/CoursesSection";
import SpecialOfferSection from "@/components/home/SpecialOfferSection";
import RegisterFormSection from "@/components/home/RegisterFormSection";
import InstructorsSection from "@/components/home/InstructorsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import EventsSection from "@/components/home/EventsSection";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <CoursesSection />
        <SpecialOfferSection />
        <InstructorsSection />
        <RegisterFormSection />
        <TestimonialsSection />
        <EventsSection />
      </main>
      <Footer />
    </div>
  );
}
