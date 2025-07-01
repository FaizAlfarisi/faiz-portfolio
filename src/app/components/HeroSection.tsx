import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center">
        <div className="space-y-6">
          <div className="flex justify-center">
            <Image  src="/profile.png" alt='profile-image' width={500} height={500} className="w-48 h-48 rounded-full"/>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I&apos;m </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">Fa&apos;iz </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Alfarisi</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2xl: mx-auto opacity-0 animate-fade-in-delay-3">Undergraduate Mathematics Student at Universitas Negeri Malang<br/>Backend Developer | ML/AI Enthusiast</p>

          <div className="flex justify-center gap-5 z-50">
            <Link href="https://github.com/FaizAlfarisi">
              <FaGithub/>
            </Link>
            <Link href="https://www.linkedin.com/in/mfaizalfarisi/">
              <FaLinkedin/>
            </Link>
            <Link href="https://www.instagram.com/faiz.alfrs/">
              <FaInstagram/>
            </Link>
          </div>

          <div>
            <Link href="">Download CV</Link>
            <Link href="#contact">Contact Me</Link>
          </div>
        </div>


      </div>
    </section>

  );
}

export default HeroSection