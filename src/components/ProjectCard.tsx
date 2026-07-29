import { Github } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type ProjectImage = {
  src: string;
  caption: string;
};

export type ProjectSection = {
  image?: string;
  title?: string;
  content: string;
};

export type Project = {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  icon: LucideIcon;
  featured?: boolean;
  github?: string;
  image?: string;
  gallery?: ProjectImage[];
  sections?: ProjectSection[];
};

const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => (
  <article
    onClick={onClick}
    className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 hover:glow-sm transition-all duration-500 cursor-pointer"
  >
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
      <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="px-3 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
  </article>
);

export default ProjectCard;
