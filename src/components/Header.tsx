import { useState, useEffect } from "react";
import logo from "@/assets/logo.jpg";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageSquare } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }
    const sectionIds = [
      "home",
      "about",
      "programs",
      "why-art",
      "testimonials",
      "contact"
    ];
    const handleScroll = () => {
      let found = false;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            setActiveSection(id);
            found = true;
            break;
          }
        }
      }
      if (!found) setActiveSection("");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/916360799842?text=Hi! I would like to know more about Lil-Picasso art programs.', '_blank');
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-gentle">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Lil-Picasso Logo"
              className="w-10 h-10 rounded-full object-cover border border-primary shadow"
              draggable="false"
            />
            <div>
              <h1 className="text-xl font-bold text-foreground">Lil-Picasso</h1>
              <p className="text-xs text-muted-foreground">Art School</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => {
                if (location.pathname === "/") {
                  scrollToSection("home");
                } else {
                  navigate("/");
                }
              }}
              className={`transition-colors px-1 ${activeSection === "home" && location.pathname === "/" ? "text-primary font-bold" : "text-foreground hover:text-primary"}`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`transition-colors px-1 ${activeSection === "about" ? "text-primary font-bold" : "text-foreground hover:text-primary"}`}
            >
              About
            </button>
            <button
              onClick={() => navigate("/programs")}
              className={`transition-colors px-1 ${location.pathname === "/programs" ? "text-primary font-bold" : "text-foreground hover:text-primary"}`}
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection("why-art")}
              className={`transition-colors px-1 ${activeSection === "why-art" ? "text-primary font-bold" : "text-foreground hover:text-primary"}`}
            >
              Why Art?
            </button>
            <button
              onClick={() => navigate("/gallery")}
              className={`transition-colors px-1 ${location.pathname === "/gallery" ? "text-primary font-bold" : "text-foreground hover:text-primary"}`}
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`transition-colors px-1 ${activeSection === "contact" ? "text-primary font-bold" : "text-foreground hover:text-primary"}`}
            >
              Contact
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open('tel:+916360799842')}
              aria-label="Call Lil-Picasso"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            <Button 
              variant="hero" 
              size="sm"
              onClick={openWhatsApp}
              aria-label="Enroll via WhatsApp"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Enroll Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-muted rounded-md transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <nav className="flex flex-col space-y-3">
              <button
                onClick={() => {
                  if (location.pathname === "/") {
                    scrollToSection("home");
                  } else {
                    navigate("/");
                    setIsMenuOpen(false);
                  }
                }}
                className={`text-left transition-colors py-2 px-1 ${activeSection === "home" && location.pathname === "/" ? "text-primary font-bold" : "text-foreground hover:text-primary"}`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`text-left transition-colors py-2 px-1 ${activeSection === "about" ? "text-primary font-bold" : "text-foreground hover:text-primary"}`}
              >
                About
              </button>
              <button
                onClick={() => { navigate("/programs"); setIsMenuOpen(false); }}
                className={`text-left transition-colors py-2 px-1 ${location.pathname === "/programs" ? "text-primary font-bold" : "text-foreground hover:text-primary"}`}
              >
                Programs
              </button>
              <button
                onClick={() => scrollToSection("why-art")}
                className={`text-left transition-colors py-2 px-1 ${activeSection === "why-art" ? "text-primary font-bold" : "text-foreground hover:text-primary"}`}
              >
                Why Art?
              </button>
              <button
                onClick={() => { navigate("/gallery"); setIsMenuOpen(false); }}
                className={`text-left transition-colors py-2 px-1 ${location.pathname === "/gallery" ? "text-primary font-bold" : "text-foreground hover:text-primary"}`}
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`text-left transition-colors py-2 px-1 ${activeSection === "contact" ? "text-primary font-bold" : "text-foreground hover:text-primary"}`}
              >
                Contact
              </button>
              <div className="flex flex-col space-y-2 pt-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open('tel:+916360799842')}
                  aria-label="Call Lil-Picasso"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                <Button 
                  variant="hero" 
                  size="sm"
                  onClick={openWhatsApp}
                  aria-label="Enroll via WhatsApp"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Enroll Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;