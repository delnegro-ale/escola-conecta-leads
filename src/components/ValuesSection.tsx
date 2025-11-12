import { Shield, Heart, BookOpen, MessageCircle, Zap, Users } from "lucide-react";

export const ValuesSection = () => {
  const values = [
    { icon: Shield, label: "Segurança", color: "text-primary" },
    { icon: Heart, label: "Acolhimento", color: "text-accent" },
    { icon: BookOpen, label: "Ensino", color: "text-primary" },
    { icon: MessageCircle, label: "Diálogo", color: "text-accent" },
    { icon: Zap, label: "Eficiência", color: "text-primary" },
    { icon: Users, label: "Integração", color: "text-accent" },
  ];

  return (
    <section id="proposta" className="py-20 lg:py-32 bg-gradient-warm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Nossos Valores
          </h2>
          <p
            className="text-xl md:text-2xl text-primary font-semibold italic"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            "Queremos mudar o mundo, um aluno de cada vez."
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-card hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`${value.color} mb-4`}>
                  <Icon size={48} strokeWidth={1.5} />
                </div>
                <h3
                  className="font-semibold text-foreground text-lg"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {value.label}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
