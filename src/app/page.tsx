import AboutSection from "../components/sections/AboutSection";
import HeroSection from "../components/sections/HeroSection";
import Navbar from "../components/layout/Navbar";
import ProjectsSection from "../components/sections/ProjectsSection";
import StarBackground from "../components/layout/StarBackground";
import ThemeToggle from "../components/ui/ThemeToggle";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle/>

      {/* Star Background */}
      <StarBackground/>

      {/* Navbar */}
      <Navbar/>

      {/* Main Content */}
      <main>
        <HeroSection/>
        <AboutSection/>
        <ProjectsSection/>
        <ContactSection/>
      </main>

      {/* Footer */}
      <Footer/>

    </div>
  );
}
