import { Cpu, Brain, Cog, Zap } from "lucide-react";

const AboutSection = () => {
  const focuses = [
    {
      icon: Cpu,
      title: "Robotics",
      description: "Legged locomotion, ROS 2 navigation with SLAM and NAV2, and autonomous mobile robots",
    },
    {
      icon: Zap,
      title: "Embedded Systems",
      description: "STM32 and ATmega firmware, CAN bus, ArduPilot, and servo and motor control",
    },
    {
      icon: Brain,
      title: "Simulation and RL",
      description: "Reinforcement learning policies in NVIDIA Isaac Lab, reward shaping, and sim-to-real transfer",
    },
    {
      icon: Cog,
      title: "Hardware Design",
      description: "KiCad schematic capture and PCB layout, power distribution, and mixed-signal bring-up",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-sm font-mono text-primary uppercase tracking-wider">About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
              What I <span className="text-gradient">Work On</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm a rising sophomore studying Electrical and Computer Engineering at Olin College. Most of my work
              sits where control software meets the hardware it runs on, from training locomotion policies in
              simulation to laying out the boards that drive the motors.
            </p>
          </div>

          {/* Focus areas grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {focuses.map((focus, index) => (
              <div
                key={focus.title}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:glow-sm transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-5">
                  <div className="p-4 rounded-xl bg-gradient-primary text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                    <focus.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {focus.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {focus.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-4 gap-8">
            {[
              { value: "10", label: "Projects" },
              { value: "3", label: "Internships" },
              { value: "6", label: "Team Projects" },
              { value: "2", label: "Awards" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-mono uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
