import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AirVent, Microscope, Music, Smartphone, ChevronLeft, ChevronRight } from "lucide-react";
import classroomImage from "@/assets/classroom-modern.jpg";
import labImage from "@/assets/lab-science.jpg";
import heroImage from "@/assets/hero-section-nos.jpg";
import { Button } from "@/components/ui/button";

export const StructureSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    { src: classroomImage, alt: "Sala de aula moderna do Colégio Nós" },
    { src: labImage, alt: "Laboratório de ciências equipado" },
    { src: heroImage, alt: "Fachada do Colégio Nós" },
  ];

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const features = [
    {
      icon: AirVent,
      title: "Salas amplas e climatizadas",
      description: "Ambientes confortáveis e modernos para melhor aprendizado",
    },
    {
      icon: Microscope,
      title: "Laboratórios modernos",
      description: "Equipamentos de ponta para prática científica",
    },
    {
      icon: Music,
      title: "Espaços culturais e esportivos",
      description: "Desenvolvimento integral através de atividades diversas",
    },
    {
      icon: Smartphone,
      title: "Aplicativo escolar",
      description: "Comunicação em tempo real com famílias",
    },
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="estrutura" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Estrutura Moderna
          </h2>
          <p
            className="text-lg md:text-xl text-muted-foreground"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Ambientes projetados para oferecer o melhor em educação e conforto
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image Carousel */}
          <div className="relative group">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                className="w-full h-full object-cover transition-transform duration-500"
              />
            </div>
            
            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft size={24} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight size={24} />
            </Button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentImage === index ? "bg-primary w-8" : "bg-background/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <Icon className="text-primary" size={28} />
                    </div>
                    <div>
                      <h3
                        className="text-xl font-semibold text-foreground mb-2"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className="text-muted-foreground"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
