import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { LucideIcon, ChevronLeft, ChevronRight } from "lucide-react";
import type { ProjectImage, ProjectSection } from "@/components/ProjectCard";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    longDescription: string;
    image?: string;
    tags: string[];
    icon: LucideIcon;
    gallery?: ProjectImage[];
    sections?: ProjectSection[];
  };
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const hasSections = project.sections && project.sections.length > 0;

  const images = !hasSections && project.gallery && project.gallery.length > 0
    ? project.gallery
    : !hasSections && project.image
      ? [{ src: project.image, caption: "" }]
      : [];

  const handlePrev = () => setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const handleNext = () => setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) { setCurrentIndex(0); onClose(); } }}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-gradient-primary text-primary-foreground">
              <project.icon className="w-5 h-5" />
            </div>
            <DialogTitle className="text-xl font-semibold text-foreground">
              {project.title}
            </DialogTitle>
          </div>
        </DialogHeader>

        {/* Sections mode: sequential image + description */}
        {hasSections && (
          <div className="space-y-6">
            {project.sections!.map((section, i) => (
              <div key={i}>
                {section.image && (
                  <div className="w-full aspect-video rounded-lg overflow-hidden bg-muted mb-3">
                    <img
                      src={section.image}
                      alt={section.title || project.title}
                      className="w-full h-full object-contain bg-muted"
                    />
                  </div>
                )}
                {section.title && (
                  <h3 className="text-lg font-semibold text-foreground mb-2">{section.title}</h3>
                )}
                <p className="text-muted-foreground leading-relaxed text-sm whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Gallery/single image mode */}
        {!hasSections && images.length > 0 && (
          <div className="relative">
            <div className="w-full aspect-video rounded-lg overflow-hidden bg-muted mb-2">
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].caption || project.title}
                className="w-full h-full object-contain bg-muted"
              />
            </div>

            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-background/80 border border-border text-foreground hover:bg-accent transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-background/80 border border-border text-foreground hover:bg-accent transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {images[currentIndex].caption && (
              <p className="text-sm text-muted-foreground text-center italic mb-4">
                {images[currentIndex].caption}
              </p>
            )}

            {images.length > 1 && (
              <div className="flex justify-center gap-1.5 mb-4">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Long description (only shown when NOT using sections) */}
        {!hasSections && (
          <DialogDescription className="text-muted-foreground leading-relaxed text-sm">
            {project.longDescription}
          </DialogDescription>
        )}

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
