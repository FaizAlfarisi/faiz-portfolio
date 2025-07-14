import AboutSection from "../components/features/home/AboutSection";
import HeroSection from "../components/features/home/HeroSection";
import ProjectsSection from "../components/features/home/ProjectsSection";
import ContactSection from "@/components/features/home/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <>
        <HeroSection/>
        <AboutSection/>
        <ProjectsSection/>
        <ContactSection/>
      </>
    </div>
  );
}
