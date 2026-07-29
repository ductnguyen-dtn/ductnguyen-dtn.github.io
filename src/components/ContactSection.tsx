import { Mail, Github, Linkedin, MapPin, Send, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-sm font-mono text-primary uppercase tracking-wider">Contact</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm actively seeking internship opportunities in robotics, embedded systems, 
              and software engineering. Let's discuss how I can contribute to your team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="space-y-8">
              <div className="p-8 rounded-2xl bg-card border border-border">
                <h3 className="text-xl font-semibold mb-6 text-foreground">Get in Touch</h3>
                
                <div className="space-y-6">
                  <a 
                    href="mailto:ductuannguyen.dtn@gmail.com"
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="p-3 rounded-xl bg-secondary group-hover:bg-primary/10 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        ductuannguyen.dtn@gmail.com
                      </p>
                    </div>
                  </a>

                  <a 
                    href="tel:+19804460883"
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="p-3 rounded-xl bg-secondary group-hover:bg-primary/10 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        (980) 446-0883
                      </p>
                    </div>
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/ducnguyen-dtn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="p-3 rounded-xl bg-secondary group-hover:bg-primary/10 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        /in/ducnguyen-dtn
                      </p>
                    </div>
                  </a>

                  <a 
                    href="https://github.com/ductnguyen-dtn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="p-3 rounded-xl bg-secondary group-hover:bg-primary/10 transition-colors">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">GitHub</p>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        @ductnguyen-dtn
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="p-3 rounded-xl bg-secondary">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium text-foreground">
                        Massachusetts • Open to Relocation
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Availability badge */}
              <div className="p-6 rounded-2xl bg-gradient-primary text-primary-foreground">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-3 h-3 rounded-full bg-primary-foreground/80 animate-pulse" />
                  <span className="font-semibold">Available for Opportunities</span>
                </div>
                <p className="text-primary-foreground/80 text-sm">
                  Currently seeking Summer 2025 internships in robotics, embedded systems, and software engineering.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about the opportunity..." 
                    rows={5}
                    className="bg-secondary/50 border-border focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
