import AboutSection from "../components/sections/AboutSection";
import HeroSection from "../components/sections/HeroSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

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
