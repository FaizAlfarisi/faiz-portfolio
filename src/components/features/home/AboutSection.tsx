import { Bot, Code } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiExpress, SiGo, SiMysql, SiNodedotjs, SiNumpy, SiPandas, SiPostgresql, SiPython, SiPytorch, SiScikitlearn, SiTensorflow } from "react-icons/si";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl backdrop-blur-sm">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex items-center flex-col space-y-6 text-center">
            <Image src="/speaker.png" alt="Speaker Build With AI 2025" width={500} height={500} className="w-full max-w-xs aspect-square object-contain md:grayscale hover:grayscale-0"/>
          </div>

          <div className="grid grid-cols-1 gap-4 items-center">
            <div className="gradient-border p-6 card-hover rounded-xl">
              <div className="flex items-center gap-6">
                <div className="p-2 rounded-full bg-primary/15">
                  <Code className="h-7 w-7 text-primary"/>
                </div>
                <div >
                  <h4 className="text-lg font-semibold mb-1">Backend Development</h4>
                  <p className="text-muted-foreground font-light">
                    Develops core logic, handles data flow, and keeps systems stable and secure.
                  </p>
                  <div className="flex justify-between mt-4 text-primary text-glow">
                    <SiNodedotjs className="w-6 h-6"/>
                    <SiExpress className="w-6 h-6"/>
                    <SiGo className="w-6 h-6"/>
                    <SiPython className="w-6 h-6"/>
                    <SiPostgresql className="w-6 h-6"/>
                    <SiMysql className="w-6 h-6"/>
                  </div>
                </div>
              </div>              
            </div>
            <div className="gradient-border p-6 card-hover rounded-xl">
              <div className="flex items-center gap-6">
                <div className="p-2 rounded-full bg-primary/15">
                  <Bot className="h-7 w-7 text-primary"/>
                </div>
                <div >
                  <h4 className="text-lg font-semibold mb-1">ML / AI</h4>
                  <p className="text-muted-foreground font-light">
                    Focuses on learning from data, automating decisions, and solving complex problems.
                  </p>
                  <div className="flex justify-between mt-4 text-primary text-glow">
                    <SiPython className="w-6 h-6"/>
                    <SiTensorflow className="w-6 h-6"/>
                    <SiPytorch className="w-6 h-6"/>
                    <SiScikitlearn className="w-6 h-6"/>
                    <SiPandas className="w-6 h-6"/>
                    <SiNumpy className="w-6 h-6"/>
                  </div>
                </div>
              </div>              
            </div>
            <div className="flex justify-center">
              <Link href="/about" className="cosmic-button">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;