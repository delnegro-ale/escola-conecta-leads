import { Button } from "@/components/ui/button";
import { Award, Trophy, Phone } from "lucide-react";
import heroImage from "@/assets/hero-school.jpg";
import { WHATSAPP_NUMBER_CLEAN } from "@/constants/contact";

interface HeroProps {
  onCtaClick: () => void;
  unit?: "barra" | "recreio" | "pechincha";
}

export const Hero = ({ onCtaClick, unit }: HeroProps) => {
  const handleWhatsAppClick = () => {
    const uniteName = unit ? ` ${unit.charAt(0).toUpperCase() + unit.slice(1)}` : "";
    const message = `Olá, eu vim pelo site do Colégio Nós${uniteName} e gostaria de uma ajuda`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER_CLEAN}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Fachada moderna do Colégio Nós" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="bg-background/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
              <Trophy className="text-accent" size={24} />
              <span className="font-semibold text-foreground" style={{ fontFamily: "Inter, sans-serif" }}>
                3ª melhor escola do Rio (ENEM 2022)
              </span>
            </div>
            <div className="bg-background/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
              <Award className="text-primary" size={24} />
              <span className="font-semibold text-foreground" style={{ fontFamily: "Inter, sans-serif" }}>
                6x em 1º lugar no ENEM
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Uma escola com propósito,
            <br />
            resultados e acolhimento
          </h1>

          {/* Subheadline */}
          <p
            className="text-xl md:text-2xl text-background/95 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Educação de excelência do 1º ano fundamental ao Pré-vestibular, com foco em desenvolvimento integral e
            resultados comprovados
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button
              onClick={onCtaClick}
              size="lg"
              variant="white"
              className="font-bold text-lg px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Agendar visita
            </Button>
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              variant="whatsapp"
              className="font-semibold text-lg px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <Phone className="mr-2" size={20} />
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-background/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-background/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
