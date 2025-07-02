import { Bot, Code } from "lucide-react";
import Link from "next/link";
import { SiExpress, SiGo, SiLaravel, SiMysql, SiNodedotjs, SiNumpy, SiPandas, SiPostgresql, SiPython, SiPytorch, SiScikitlearn, SiTensorflow } from "react-icons/si";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl backdrop-blur-sm">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center">
            <h3 className="text-2xl font-semibold">Junior Developer - Lifelong Learner</h3>

            <p className="text-muted-foreground">
              I&apos;m passionate about building ideas with purpose—whether through code, collaboration, or community. Grounded in analytical thinking and driven by curiosity, I love solving problems that matter.
            </p>

            <p className="text-muted-foreground">
              Beyond the code, I lead, learn, and grow through meaningful experiences—from mentoring peers to speaking at AI events. For me, it&apos;s all about impact and intentional growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <Link href="#contact" className="cosmic-button"><p>Get In Touch</p></Link>
              <Link href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/20 transition color duration-300">Download CV</Link>              
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover rounded-xl">
              <div className="flex items-center gap-6">
                <div className="p-3 rounded-full bg-primary/15">
                  <Code className="h-7 w-7 text-primary"/>
                </div>
                <div >
                  <h4 className="text-lg font-semibold mb-1">Backend Development</h4>
                  <p className="text-muted-foreground font-light">
                    Develops core logic, handles data flow, and keeps systems stable and secure.
                  </p>
                  <div className="flex justify-between mt-2 text-primary text-glow">
                    <SiNodedotjs className="w-6 h-6"/>
                    <SiExpress className="w-6 h-6"/>
                    <SiGo className="w-6 h-6"/>
                    <SiPython className="w-6 h-6"/>
                    <SiLaravel className="w-6 h-6"/>
                    <SiPostgresql className="w-6 h-6"/>
                    <SiMysql className="w-6 h-6"/>
                  </div>
                </div>
              </div>              
            </div>
            <div className="gradient-border p-6 card-hover rounded-xl">
              <div className="flex items-center gap-6">
                <div className="p-3 rounded-full bg-primary/15">
                  <Bot className="h-7 w-7 text-primary"/>
                </div>
                <div >
                  <h4 className="text-lg font-semibold mb-1">ML / AI</h4>
                  <p className="text-muted-foreground font-light">
                    Focuses on learning from data, automating decisions, and solving complex problems.
                  </p>
                  <div className="flex justify-between mt-2 text-primary text-glow">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;