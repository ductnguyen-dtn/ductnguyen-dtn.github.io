import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ResumeModalButton from "@/components/ResumeModalButton";

const HeroSection = () => {

    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute inset-0 noise" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl animate-pulse-glow bg-[hsl(var(--brand-1))]/20" />
        <div
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-3xl animate-pulse-glow bg-[hsl(var(--brand-2))]/20"
          style={{ animationDelay: "1.5s" }}
        />

        <div className="container relative z-10 px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Status badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-mono text-primary">Open to Opportunities</span>
            </div>

            {/* Main heading */}
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="block text-foreground">Duc Nguyen</span>
              <span className="block text-gradient mt-2">ECE Student</span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up font-light"
              style={{ animationDelay: "0.4s" }}
            >
              Electrical & Computer Engineering student passionate about{" "}
              <span className="text-primary font-medium">robotics</span>,{" "}
              <span className="text-accent font-medium">embedded systems</span>, and{" "}
              <span className="text-primary font-medium">software engineering</span>
            </p>

            {/* Tech stack pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up" style={{ animationDelay: "0.5s" }}>
              {["Python", "C++", "Embedded C", "ROS2", "STM32", "KiCad", "ArduPilot"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm font-mono bg-secondary/50 text-secondary-foreground rounded-lg border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-500 ease-out hover:shadow-[0_0_18px_hsl(var(--glow)_/_0.18)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: "0.6s" }}>
              <ResumeModalButton
                triggerText={
                  <>
                    <FileText className="w-4 h-4" />
                    View Resume
                  </>
                }
                triggerProps={{
                  size: "lg",
                  className: "bg-gradient-primary text-primary-foreground hover:opacity-90 glow-sm px-8 gap-2",
                }}
              />

              <Button
                size="lg"
                variant="outline"
                className="gap-2 hover:shadow-[0_0_22px_hsl(var(--glow)_/_0.14)]"
                asChild
              >
                <Link to="/contact">
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </Link>
              </Button>
            </div>

            {/* Social links */}
            <div className="flex items-center justify-center gap-6 animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <a
                href="https://github.com/ductnguyen-dtn"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-500 ease-out hover:shadow-[0_0_22px_hsl(var(--glow)_/_0.12)]"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/ducnguyen-dtn/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-500 ease-out hover:shadow-[0_0_22px_hsl(var(--glow)_/_0.12)]"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:ductuannguyen.dtn@gmail.com"
                className="p-3 rounded-xl bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-500 ease-out hover:shadow-[0_0_22px_hsl(var(--glow)_/_0.12)]"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

      </section>
    );
};

export default HeroSection;
