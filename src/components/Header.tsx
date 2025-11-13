import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-colegio-nos.png";
import { WHATSAPP_NUMBER_CLEAN } from "@/constants/contact";

interface HeaderProps {
  onCtaClick: () => void;
}

export const Header = ({ onCtaClick }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Início", id: "inicio" },
    { label: "Proposta", id: "proposta" },
    { label: "Estrutura", id: "estrutura" },
    { label: "Ensino", id: "ensino" },
    { label: "Contato", id: "contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background shadow-md">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={logo} 
              alt="Colégio Nós" 
              className="h-12 lg:h-14 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button
              onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER_CLEAN}`, "_blank")}
              variant="whatsapp"
              className="font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Falar no WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border py-4 space-y-4 animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-2">
              <Button
                onClick={() => {
                  window.open(`https://wa.me/${WHATSAPP_NUMBER_CLEAN}`, "_blank");
                  setIsMobileMenuOpen(false);
                }}
                variant="whatsapp"
                className="w-full font-semibold"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
