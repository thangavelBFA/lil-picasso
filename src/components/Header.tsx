import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageSquare } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {

  const openWhatsApp = () => {
    window.open('https://wa.me/916360799842?text=Hi! I would like to know more about Lil-Picasso art programs.', '_blank');
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-gentle">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div>
              <h1 className="text-xl font-bold text-foreground">Lil-Picasso</h1>
              <p className="text-xs text-muted-foreground">Art School</p>
            </div>
          </div>

          {/* Navigation hidden on coming-soon mode */}
          <nav className="hidden lg:flex items-center space-x-8" aria-hidden>
            {/* Intentionally hidden to present a Coming Soon landing page */}
          </nav>

          {/* Only show WhatsApp CTA on header */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="hero" 
              size="sm"
              onClick={openWhatsApp}
              aria-label="Contact via WhatsApp"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </div>

          {/* remove mobile menu button for coming-soon */}
        </div>

  {/* Mobile navigation removed for coming-soon */}
      </div>
    </header>
  );
};

export default Header;