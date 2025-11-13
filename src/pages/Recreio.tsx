import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ValuesSection } from "@/components/ValuesSection";
import { StructureSection } from "@/components/StructureSection";
import { LocationSection } from "@/components/LocationSection";
import { FormSection } from "@/components/FormSection";
import { Footer } from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, GraduationCap, Rocket } from "lucide-react";

const Recreio = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("contato");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const levels = [
    {
      id: "fundamental2",
      label: "Fundamental II",
      icon: BookOpen,
      title: "6º ao 9º ano",
      description: "Preparação para o futuro com excelência",
      features: [
        "Acompanhamento próximo e monitoria em contraturno",
        "Oficinas de matemática, redação e atualidades",
        "Projeto Matemática Zero (revisão de base)",
        "Desenvolvimento de autonomia e responsabilidade",
        "Preparação para desafios do Ensino Médio",
      ],
    },
    {
      id: "medio",
      label: "Ensino Médio",
      icon: GraduationCap,
      title: "1º ao 3º ano",
      description: "Excelência e preparação para o futuro",
      features: [
        "Plataforma Evolucional (simulados ENEM e SISU)",
        "Trilhas Nitro: Medicina, Direito, Engenharia, Comunicação",
        "Projeto UERJ-ENEM com foco em resultados",
        "Visitas a universidades e orientação profissional",
        "Preparação completa para vestibulares",
      ],
    },
    {
      id: "pre",
      label: "Pré-Vestibular",
      icon: Rocket,
      title: "Preparação intensiva",
      description: "Foco total em resultado e aprovação",
      features: [
        "Rotina de simulados semanais",
        "Plantões de dúvidas personalizados",
        "Material didático completo e atualizado",
        "Apoio psicológico e educacional",
        "Orientação para universidades públicas e privadas",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header onCtaClick={scrollToForm} unit="recreio" />
      <main>
        <Hero onCtaClick={scrollToForm} unit="recreio" />
        <ValuesSection />
        <StructureSection />
        
        {/* Education Levels - Without Fundamental I */}
        <section id="ensino" className="py-20 lg:py-32 bg-gradient-warm">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Níveis de Ensino
              </h2>
              <p
                className="text-lg md:text-xl text-muted-foreground"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Do 6º ano ao Pré-vestibular, acompanhamento completo da jornada educacional
              </p>
            </div>

            <Tabs defaultValue="fundamental2" className="max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 h-auto gap-2 bg-transparent">
                {levels.map((level) => {
                  const Icon = level.icon;
                  return (
                    <TabsTrigger
                      key={level.id}
                      value={level.id}
                      className="flex flex-col items-center gap-2 py-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      <Icon size={24} />
                      <span className="text-sm font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {level.label}
                      </span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>

              {levels.map((level) => (
                <TabsContent key={level.id} value={level.id} className="mt-8">
                  <Card className="border-none shadow-xl animate-fade-in">
                    <CardHeader className="text-center pb-8">
                      <CardTitle
                        className="text-3xl md:text-4xl text-primary mb-2"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      >
                        {level.title}
                      </CardTitle>
                      <CardDescription
                        className="text-lg text-muted-foreground"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {level.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        {level.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-foreground animate-fade-in"
                            style={{ animationDelay: `${index * 50}ms`, fontFamily: 'Inter, sans-serif' }}
                          >
                            <div className="bg-primary/10 rounded-full p-1 mt-1 flex-shrink-0">
                              <div className="w-2 h-2 bg-primary rounded-full" />
                            </div>
                            <span className="text-base md:text-lg">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        <LocationSection unit="recreio" />
        <FormSection defaultUnit="recreio" />
      </main>
      <Footer />
    </div>
  );
};

export default Recreio;
