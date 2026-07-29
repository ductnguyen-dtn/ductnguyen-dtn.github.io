import * as React from "react";

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExternalLink, Linkedin } from "lucide-react";

const RESUME_URL =
  "https://drive.google.com/file/d/1ZYtZgxfT0JsAkrwTdc1XXtCgJR5pHUhd/view?usp=sharing";
const RESUME_PREVIEW_URL =
  "https://drive.google.com/file/d/1ZYtZgxfT0JsAkrwTdc1XXtCgJR5pHUhd/preview";
const LINKEDIN_URL = "https://www.linkedin.com/in/ducnguyen-dtn/";

type ResumeModalButtonProps = {
  triggerText: React.ReactNode;
  triggerProps?: Omit<ButtonProps, "children">;
  triggerClassName?: string;
};

export default function ResumeModalButton({ triggerText, triggerProps, triggerClassName }: ResumeModalButtonProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button {...triggerProps} className={cn(triggerProps?.className, triggerClassName)}>
          {triggerText}
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-4xl w-[min(96vw,1024px)] h-[min(90vh,820px)] p-0 overflow-hidden">
        <div className="p-6 pb-4">
          <DialogHeader>
            <DialogTitle className="text-xl">Resume</DialogTitle>
            <DialogDescription className="text-sm">
              Embedded preview — open the PDF for the best viewing experience.
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="px-6">
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <iframe
              title="Duc Nguyen resume PDF preview"
              src={RESUME_PREVIEW_URL}
              className="w-full h-[52vh] md:h-[56vh]"
              loading="lazy"
            />
          </div>
        </div>

        <DialogFooter className="p-6 pt-4">
          <div className="grid w-full grid-cols-3 gap-3">
            <DialogClose asChild>
              <Button variant="secondary" className="justify-center">
                Close
              </Button>
            </DialogClose>
            <Button
              className="justify-center bg-[hsl(var(--gradient-start))] text-primary-foreground hover:shadow-[0_0_24px_hsl(var(--gradient-start)_/_0.25)]"
              onClick={() => window.open(RESUME_URL, "_blank", "noopener,noreferrer")}
            >
              <ExternalLink className="h-4 w-4" />
              Resume PDF
            </Button>
            <Button
              className="justify-center bg-[hsl(var(--gradient-end))] text-primary-foreground hover:shadow-[0_0_24px_hsl(var(--gradient-end)_/_0.25)]"
              onClick={() => window.open(LINKEDIN_URL, "_blank", "noopener,noreferrer")}
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
