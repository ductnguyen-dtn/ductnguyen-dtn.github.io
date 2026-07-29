import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Github, Plane, CircuitBoard, Code2, Zap, Cpu } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/ProjectModal";
import ProjectCard, { type Project } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";

import aeroImage from "@/assets/aero.png";
import formulaImage from "@/assets/formula.png";
import watchdogImage from "@/assets/watchdog.jpeg";
import crogImage from "@/assets/crog.png";

import formulaWrongStm from "@/assets/formula-wrong-stm.png";
import formulaCorrectStm from "@/assets/formula-correct-stm.png";
import formulaFinalSchematic from "@/assets/formula-final-schematic.png";
import formulaCanController from "@/assets/formula-can-controller.png";
import formulaPcbTop from "@/assets/formula-pcb-top.png";
import formulaPcbBottom from "@/assets/formula-pcb-bottom.png";
import formulaFinalReorg from "@/assets/formula-final-reorg.png";

const teamProjects: Project[] = [
  {
    title: "Formula SAE: Charging Board PCB",
    description: "Designed and iterated on a custom charging control board for a Formula SAE electric vehicle, taking ownership of the schematic architecture, MCU selection, and PCB layout using KiCad.",
    longDescription: "",
    tags: ["Embedded Systems", "PCB Design", "STM32", "CAN Bus", "KiCad"],
    icon: CircuitBoard,
    github: "https://github.com/olin-electric-motorsports",
    image: formulaImage,
    sections: [
      {
        content: "I designed and iterated on a custom charging control board for a Formula SAE electric vehicle, taking ownership of the schematic architecture, MCU selection, and PCB layout using KiCad. This project required rapid self-learning, debugging at scale, and balancing electrical design tradeoffs under tight team deadlines.",
      },
      {
        title: "Early Development — Toolchain Ramp-Up & Critical Design Reset",
        image: formulaWrongStm,
        content: "I began this project with no prior experience in KiCad, quickly learning schematic capture, footprint management, and PCB workflows. During initial development, I selected an incorrect STM32 microcontroller, which forced a full redesign.",
      },
      {
        image: formulaCorrectStm,
        content: "Rather than patching the issue, I restarted from first principles—revalidating datasheets, pin mappings, and system requirements. This reset significantly improved design accuracy and established a disciplined, documentation-driven workflow.",
      },
      {
        image: formulaFinalSchematic,
        title: "System Architecture — MCU Integration & Interface Expansion",
        content: "I rebuilt the schematic around the correct STM32, aligning all subsystems with the MCU's pinout and electrical constraints. As system requirements evolved, I transitioned from a legacy seven-segment display to an LCD interface to improve usability and data visibility.\n\nThis introduced new constraints: the original MCU lacked sufficient GPIO capacity. I identified this bottleneck early and migrated to a higher pin-count STM32 variant, redesigning the schematic to support expanded I/O while maintaining signal integrity.",
      },
      {
        image: formulaCanController,
        title: "Debugging at Scale — Footprint & Schematic Validation",
        content: "I identified and resolved over 50 footprint-related errors, standardizing component libraries and ensuring manufacturing compatibility. This phase required careful cross-referencing between datasheets, symbol libraries, and PCB constraints.\n\nBy the end of this stage, the schematic was fully validated at the component level and ready for layout, with improved modularity and maintainability.",
      },
      {
        image: formulaPcbTop,
        title: "CAN Communication — Reliability-Critical Subsystem",
        content: "I designed and finalized the CAN controller schematic, ensuring proper transceiver integration and signal routing aligned with automotive communication standards.\n\nThis subsystem was critical for vehicle-level communication, and the design emphasized robustness, correct termination, and noise resilience.",
      },
      {
        image: formulaPcbBottom,
        title: "PCB Design — Aggressive Size Optimization & Failure Analysis",
        content: "I completed a full PCB layout iteration, reducing board size by approximately 50% compared to the previous generation.\n\nHowever, post-layout review revealed critical issues:\n\n• CAN signal interference due to routing proximity and lack of isolation\n• Inefficient power distribution paths\n• Poor return path continuity caused by a fragmented ground plane\n\nRather than pushing forward with a flawed design, I rejected the layout and conducted a detailed failure analysis. This reinforced key principles in high-speed and power electronics design, particularly the importance of grounding strategy and signal integrity.",
      },
      {
        image: formulaFinalReorg,
        title: "Final Iteration — Design Refactor & Engineering Handoff",
        content: "In the final phase, I refactored sections of the schematic to reduce routing complexity and improve layout cleanliness for the next iteration.\n\nDue to project timeline constraints and parallel firmware development priorities, I transitioned the design to the electrical lead for continuation. I ensured the handoff included a clean schematic, corrected footprints, and clear design intent.",
      },
    ],
  },
  {
    title: "Formula SAE: Charging Board Firmware",
    description: "Firmware development for the Formula SAE Charging Board — details coming soon.",
    longDescription: "Details for this project are coming soon. Check back later for a full description of the Charging Board firmware development.",
    tags: ["STM32", "Embedded C", "CAN Bus", "Firmware"],
    icon: Cpu,
    github: "https://github.com/olin-electric-motorsports",
  },
  {
    title: "Olin AERO: Firmware Configuration for Fixed Wing Test Rig",
    description: "Configured ArduPilot firmware for fixed-wing aircraft. Integrated motors, ESCs, servos, IMU, GPS, and telemetry systems with PID tuning.",
    longDescription: "Hands-on work was conducted on a fixed-wing unmanned aircraft system with a focus on firmware configuration, avionics integration, and flight validation. ArduPilot firmware was customized for the aircraft, and motors, ESCs, servos, IMU, GPS, telemetry radios, and onboard avionics were wired and integrated to ensure reliable power distribution and signal integrity. RC transmitter inputs were mapped and validated, PID tuning was supported, and both ground and flight testing were carried out to evaluate stability, control response, and overall system performance. This work provided practical experience in embedded flight-control systems, sensor integration, and real-world debugging in safety-critical aerospace robotics environments.",
    tags: ["ArduPilot", "UAV", "Embedded", "Avionics"],
    icon: Plane,
    github: "https://github.com/Olin-Aerospace",
    image: aeroImage,
  },
  {
    title: "CRoG - Combat Robotics",
    description: "Designed and built a 3lb combat robot. Iterated designs using Onshape for CAD modeling and manufactured components with 3D printing and laser cutting.",
    longDescription: "An ant-weight combat robot was designed, built, and iteratively refined through hands-on mechanical, electrical, and embedded development. Embedded control logic was implemented for both the drivetrain and weapon system, with emphasis on reliability under high-impact conditions. Multiple mechanical and PCB redesigns were performed based on destructive testing results, leading to improved durability and performance. This work developed strong skills in rapid prototyping, embedded control, and design iteration under extreme operational constraints.",
    tags: ["CAD", "Onshape", "3D Printing", "Mechanical"],
    icon: Zap,
    github: "#",
    image: crogImage,
  },
  {
    title: "Olin AERO: Firmware Configuration for VTOL Test Rig",
    description: "Configured ArduPilot firmware for a VTOL test rig with transition flight modes. Details coming soon.",
    longDescription: "Details for this project are coming soon. Check back later for a full description of the VTOL test rig firmware configuration work.",
    tags: ["ArduPilot", "VTOL", "Embedded", "Avionics"],
    icon: Plane,
    github: "https://github.com/Olin-Aerospace",
  },
  {
    title: "MIT Beaver Works - WatchDog Tracker",
    description: "Built a GPS-enabled pet tracker with complete hardware and firmware integration for real-time location monitoring.",
    longDescription: "A GPS-enabled pet tracking system was designed and developed with an emphasis on end-to-end hardware and firmware integration. The device combined embedded sensing, wireless communication, and power management to enable real-time location tracking. System-level integration was performed across hardware components and embedded firmware to ensure reliable data acquisition, transmission, and low-power operation. The project strengthened experience in embedded system design, sensor integration, and building deployable IoT-style devices under real-world constraints.",
    tags: ["Embedded C", "GPS", "Hardware", "Firmware"],
    icon: Code2,
    github: "#",
    image: watchdogImage,
  },
];

const TeamProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <Helmet>
        <title>Team Projects | DTN</title>
        <meta name="description" content="Team projects by Duc Nguyen — robotics, embedded systems, and hardware design." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-20">
          <section className="py-24 relative">
            <div className="container px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <span className="text-sm font-mono text-primary uppercase tracking-wider">Portfolio</span>
                  <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
                    Team <span className="text-gradient">Projects</span>
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Projects built with teams in robotics clubs, competition teams, and research programs.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {teamProjects.map((project) => (
                    <ProjectCard key={project.title} project={project} onClick={() => setSelectedProject(project)} />
                  ))}
                </div>

                <div className="text-center mt-12">
                  <Button variant="outline" size="lg" className="gap-2" asChild>
                    <a href="https://github.com/ductnguyen-dtn" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      View All on GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {selectedProject && (
              <ProjectModal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                project={selectedProject}
              />
            )}
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default TeamProjects;
