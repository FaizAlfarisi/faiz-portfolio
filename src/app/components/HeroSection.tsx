import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center">
        <div className="space-y-6">
          <div className="flex justify-center pt-4">
            <Image  src="/profile.png" alt='profile-image' width={500} height={500} className="md:w-48 md:h-48 w-30 h-30 rounded-full"/>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I&apos;m </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">Fa&apos;iz </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Alfarisi</span>
          </h1>

          <p className="text-md md:text-lg text-muted-foreground max-2xl mx-auto opacity-0 animate-fade-in-delay-3">I enjoy solving problems, leading with purpose, and learning through building. Math gave me structure, tech gave me tools — the rest is about creating something that matters.</p>

          <div className="flex justify-center gap-5 z-50 opacity-0 animate-fade-in-delay-4">
            <Link href="https://github.com/FaizAlfarisi" className="text-xl md:text-2xl hover:text-primary transition-colors">
              <FaGithub/>
            </Link>
            <Link href="https://www.linkedin.com/in/mfaizalfarisi/" className="text-xl md:text-2xl hover:text-primary transition-colors">
              <FaLinkedin/>
            </Link>
            <Link href="https://www.instagram.com/faiz.alfrs/" className="text-xl md:text-2xl hover:text-primary transition-colors">
              <FaInstagram/>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center opacity-0 animate-fade-in-delay-5">
            <Link href="#projects" className="cosmic-button"><p>View My Work</p></Link>
            <Link href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/20 transition color duration-300">Download CV</Link>              
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 transform flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll </span><ArrowDown className="h-5 w-5 text-primary"/>
      </div>
    </section>

  );
}

export default HeroSection