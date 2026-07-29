import { useState } from "react";
import { Github, Bot, Code2, CircuitBoard, Plane, Trophy, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectModal from "@/components/ProjectModal";

import aeroImage from "@/assets/aero.png";
import formulaImage from "@/assets/formula.png";
import tobotImage from "@/assets/tobot.jpeg";
import companionCatchImage from "@/assets/companion-catch.png";
import watchdogImage from "@/assets/watchdog.jpeg";
import crogImage from "@/assets/crog.png";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const projects = [
    {
      title: "Olin AERO: Firmware Configuration for Fixed Wing Test Rig",
      description: "Configured ArduPilot firmware for fixed-wing aircraft. Integrated motors, ESCs, servos, IMU, GPS, and telemetry systems with PID tuning.",
      longDescription: "Hands-on work was conducted on a fixed-wing unmanned aircraft system with a focus on firmware configuration, avionics integration, and flight validation. ArduPilot firmware was customized for the aircraft, and motors, ESCs, servos, IMU, GPS, telemetry radios, and onboard avionics were wired and integrated to ensure reliable power distribution and signal integrity. RC transmitter inputs were mapped and validated, PID tuning was supported, and both ground and flight testing were carried out to evaluate stability, control response, and overall system performance. This work provided practical experience in embedded flight-control systems, sensor integration, and real-world debugging in safety-critical aerospace robotics environments.",
      tags: ["ArduPilot", "UAV", "Embedded", "Avionics"],
      icon: Plane,
      featured: true,
      github: "https://github.com/Olin-Aerospace",
      image: aeroImage,
    },
    {
      title: "Formula SAE: Charging Board PCB",
      description: "Redesigned three subsystem boards (Charging Board, BMS Core, PDU) in KiCad, migrating from ATmega16M1 to STM32G441KBT6 with updated schematics and PCB layouts.",
      longDescription: "Hands-on engineering work was performed on multiple electric vehicle subsystems with a focus on embedded electronics, firmware, and PCB redesign. The vehicle architecture was upgraded by migrating from an ATmega16M1 to an STM32G441KBT6 microcontroller across the Charging Board, BMS Core, and Power Distribution Unit. Schematics were fully redrawn in KiCad, with updated footprints, pin mappings, and electrical connections, and PCB layouts were revised to support new routing, power stages, and interfaces. Existing firmware was modified to run on the STM32, including updates to pin definitions, peripherals, CAN communication, and I/O behavior. Board bring-up and systematic debugging were conducted to validate correct operation and subsystem reliability.",
      tags: ["KiCad", "STM32", "PCB Design", "CAN bus"],
      icon: CircuitBoard,
      featured: true,
      github: "https://github.com/olin-electric-motorsports",
      image: formulaImage,
    },
    {
      title: "Tobot - Autonomous Tennis Ball Collector",
      description: "Built an autonomous robot using ROS2 with SLAM and NAV2 for navigation. Developed in Gazebo and visualized with RViz for real-time path planning and obstacle avoidance.",
      longDescription: "Hands-on development was carried out on an autonomous mobile robot designed for indoor navigation and object collection. The system was built using ROS2 and implemented SLAM and Nav2 for localization, mapping, and autonomous path planning. Simulation and validation were performed in Gazebo and RViz prior to physical deployment. Hardware and software components were integrated to enable reliable navigation and task execution in a dynamic environment. This project provided experience in autonomous robotics software stacks, simulation-driven development, and system-level debugging.",
      tags: ["ROS2", "SLAM", "NAV2", "Gazebo", "Python"],
      icon: Bot,
      featured: true,
      github: "https://github.com/ductnguyen-dtn/tobot",
      image: tobotImage,
    },
    {
      title: "AI Fall Detector - Companion Catch",
      description: "Developed an LSTM-based fall detection system using OpenCV and MediaPipe for real-time pose estimation. Winner of the Congressional App Challenge.",
      longDescription: "An AI-based fall detection system was designed and implemented to improve safety monitoring in elderly care scenarios. The system combined computer vision and sequence modeling to analyze human motion patterns, using OpenCV and MediaPipe for pose extraction and an LSTM-based model to classify falls versus normal activities. A custom dataset of fall and non-fall scenarios was collected and processed to train and evaluate the model. The solution was optimized for real-time performance and demonstrated reliable detection in practical conditions. This project was recognized as the winner of the 2024 Congressional App Challenge, highlighting its technical merit and real-world impact.",
      tags: ["Python", "OpenCV", "MediaPipe", "LSTM"],
      icon: Trophy,
      featured: true,
      github: "https://github.com/ductnguyen-dtn/Companion-Catch",
      image: companionCatchImage,
    },
    {
      title: "MIT Beaver Works - WatchDog Tracker",
      description: "Built a GPS-enabled pet tracker with complete hardware and firmware integration for real-time location monitoring.",
      longDescription: "A GPS-enabled pet tracking system was designed and developed with an emphasis on end-to-end hardware and firmware integration. The device combined embedded sensing, wireless communication, and power management to enable real-time location tracking. System-level integration was performed across hardware components and embedded firmware to ensure reliable data acquisition, transmission, and low-power operation. The project strengthened experience in embedded system design, sensor integration, and building deployable IoT-style devices under real-world constraints.",
      tags: ["Embedded C", "GPS", "Hardware", "Firmware"],
      icon: Code2,
      github: "#",
      featured: true,
      image: watchdogImage,
    },
    {
      title: "CRoG - Combat Robotics",
      description: "Designed and built 3lb and 15lb combat robots. Iterated designs using Onshape for CAD modeling and manufactured components with 3D printing and laser cutting.",
      longDescription: "An ant-weight combat robot was designed, built, and iteratively refined through hands-on mechanical, electrical, and embedded development. Embedded control logic was implemented for both the drivetrain and weapon system, with emphasis on reliability under high-impact conditions. Multiple mechanical and PCB redesigns were performed based on destructive testing results, leading to improved durability and performance. This work developed strong skills in rapid prototyping, embedded control, and design iteration under extreme operational constraints.",
      tags: ["CAD", "Onshape", "3D Printing", "Mechanical"],
      icon: Zap,
      featured: true,
      github: "#",
      image: crogImage,
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-sm font-mono text-primary uppercase tracking-wider">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of projects showcasing my experience in robotics, embedded systems, and hardware design.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <article
                key={project.title}
                onClick={() => setSelectedProject(project)}
                className={`group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 hover:glow-sm transition-all duration-500 cursor-pointer ${
                  project.featured ? "md:col-span-1" : ""
                }`}
              >
                {/* Project header */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-gradient-primary text-primary-foreground">
                      <project.icon className="w-6 h-6" />
                    </div>
                    <div className="flex gap-2">
                      {project.github && project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </article>
            ))}
          </div>

          {/* View all button */}
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

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </section>
  );
};

export default ProjectsSection;
