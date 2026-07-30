import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, FileText } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import ResumeModalButton from "@/components/ResumeModalButton";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Team Projects", path: "/team-projects" },
    { label: "Personal Projects", path: "/personal-projects" },
    { label: "Experience", path: "/experience" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container px-6">
        {/* No wordmark: links are absolutely centred so they stay centred in the
            viewport regardless of how wide the right-hand controls get. */}
        <div className="relative flex items-center justify-end h-16 md:h-20">
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium whitespace-nowrap transition-colors duration-500 ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <div className="hidden lg:block">
              <ResumeModalButton
                triggerText={
                  <>
                    <FileText className="h-4 w-4" />
                    Resume
                  </>
                }
                triggerProps={{ size: "sm", className: "bg-gradient-primary text-primary-foreground hover:opacity-90 gap-2" }}
              />
            </div>
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border">
          <div className="container px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full text-left py-3 text-lg font-medium transition-colors duration-500 ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-4">
              <ResumeModalButton
                triggerText={
                  <>
                    <FileText className="h-4 w-4" />
                    Resume
                  </>
                }
                triggerProps={{ className: "flex-1 bg-gradient-primary text-primary-foreground hover:opacity-90 gap-2" }}
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
