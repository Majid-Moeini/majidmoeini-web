import AboutMeSection from "@/components/features/about-me/AboutMeSection";
import ContactSection from "@/components/features/contact/ContactSection";
import Footer from "@/components/features/footer/Footer";
import HeroSection from "@/components/features/hero/HeroSection";
import ProjectCard from "@/components/project-card/project-card";
import ServicesSection from "@/components/features/services/ServicesSection";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <AboutMeSection />
      <ServicesSection />
      <ProjectCard />
      <ContactSection />
      <Footer />
    </main>
  );
}
