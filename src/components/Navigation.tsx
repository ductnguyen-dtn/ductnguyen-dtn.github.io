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
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
            className="text-xl font-bold font-mono text-gradient hover:opacity-90 transition-opacity duration-500"
          >
            {"<DTN />"}
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-500 ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
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
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border">
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
              <ThemeToggle />
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
