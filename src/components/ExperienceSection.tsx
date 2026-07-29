import { Briefcase, GraduationCap, Calendar, Linkedin, ExternalLink } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      type: "work",
      title: "Electronics & Firmware Engineer",
      company: "Formula SAE Electric",
      period: "2025 – Present",
      description: [
        "Replaced ATmega16M1 with STM32G441KBT6 on Charging Board, BMS Core, and Power Distribution Unit",
        "Re-drew schematics in KiCad, updating footprints, pin mappings, and electrical connections",
        "Updated PCB layouts and modified firmware for STM32, including CAN configuration and I/O behavior",
        "Performed board bring-up and debugging for each redesigned board after MCU migration",
      ],
      linkedin: "https://www.linkedin.com/company/olin-electric-motorsports/",
      website: "https://olinelectricmotorsports.com",
    },
    {
      type: "work",
      title: "Unmanned Aircraft Systems Engineer",
      company: "AERO Project Team",
      period: "2025 – Present",
      description: [
        "Configured and customized ArduPilot firmware for fixed-wing aircraft",
        "Wired and integrated motors, ESCs, servos, IMU, GPS, telemetry, and avionics",
        "Mapped and validated RC transmitter controls; assisted with PID tuning and flight tests",
      ],
      linkedin: "https://www.linkedin.com/company/olin-aero/",
      website: "https://www.olindbf.com",
    },
    {
      type: "work",
      title: "Combat Robotics Engineer",
      company: "CRoG - Combat Robotics Club",
      period: "2025 – Present",
      description: [
        "Designed and built an ant-weight combat robot from scratch",
        "Implemented embedded control logic for drivetrain and weapon system",
        "Iterated through mechanical/PCB redesigns based on destructive testing",
      ],
    },
    {
      type: "work",
      title: "Research Intern",
      company: "Vietnam Academy of Science and Technology",
      period: "2023",
      description: [
        "Supported drone flight-dynamics research, robotic prototyping, and PCB fabrication",
        "Performed graphene electroplating experiments to optimize conductivity",
      ],
      linkedin: "https://www.linkedin.com/company/vietnam-academy-of-science-and-technology/",
      website: "https://vast.gov.vn/web/vietnam-academy-of-science-and-technology",
    },
  ];

  const education = {
    degree: "B.S. Electrical and Computer Engineering",
    school: "Franklin W. Olin College of Engineering",
    period: "2025 – 2029",
    coursework: [
      "Embedded Systems",
      "Robotics",
      "PCB Design",
      "Control Systems",
    ],
  };

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="container px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-sm font-mono text-primary uppercase tracking-wider">Background</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
              Experience & <span className="text-gradient">Education</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Work Experience */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-gradient-primary text-primary-foreground">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-semibold">Experience</h3>
              </div>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors group"
                  >
                    <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-secondary border-2 border-border group-hover:border-primary group-hover:bg-primary/20 transition-colors" />
                    
                    <div className="pb-8">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <h4 className="text-xl font-semibold mb-1 text-foreground group-hover:text-primary transition-colors">
                        {exp.title}
                      </h4>
                      <div className="flex items-center gap-3 mb-4">
                        <p className="text-primary font-medium">{exp.company}</p>
                        {exp.linkedin && (
                          <a
                            href={exp.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                        )}
                        {exp.website && (
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                            <span className="text-primary mt-1.5">▹</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-gradient-primary text-primary-foreground">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:glow-sm transition-all duration-500">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  {education.period}
                </div>
                <h4 className="text-xl font-semibold mb-2">{education.degree}</h4>
                <p className="text-primary font-medium mb-6">{education.school}</p>

                <h5 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-4">
                  Relevant Coursework
                </h5>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-lg"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skills summary */}
              <div className="mt-8 p-8 rounded-2xl bg-card border border-border">
                <h4 className="text-lg font-semibold mb-6">Technical Skills</h4>
                <div className="space-y-4">
                  {[
                    { category: "Programming", skills: "Python, C++, Embedded C, MATLAB, ROS2" },
                    { category: "Embedded", skills: "STM32, ATmega, ArduPilot, CAN bus, ESCs" },
                    { category: "PCB & Electronics", skills: "KiCad, power distribution, mixed-signal debugging" },
                    { category: "Tools", skills: "Oscilloscope, OpenCV, TensorFlow Lite, Gazebo, RViz" },
                  ].map((skill) => (
                    <div key={skill.category}>
                      <span className="text-sm font-mono text-primary">{skill.category}:</span>
                      <p className="text-muted-foreground text-sm mt-1">{skill.skills}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
