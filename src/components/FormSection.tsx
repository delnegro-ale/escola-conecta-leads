import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

export const FormSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    grade: "",
    unit: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.parentName || !formData.studentName || !formData.phone || !formData.email) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Construct WhatsApp message
    const message = `Olá! Gostaria de agendar uma visita ao Colégio Nós.
    
Nome do responsável: ${formData.parentName}
Nome do aluno: ${formData.studentName}
Série de interesse: ${formData.grade || "Não informado"}
Unidade: ${formData.unit || "Não informado"}
Telefone: ${formData.phone}
Email: ${formData.email}`;

    const whatsappUrl = `https://wa.me/5521995289612?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Redirecionando...",
      description: "Você será direcionado para o WhatsApp em instantes.",
    });
  };

  return (
    <section id="contato" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Card className="border-none shadow-2xl">
            <CardHeader className="text-center pb-8 bg-gradient-primary rounded-t-lg">
              <CardTitle
                className="text-3xl md:text-4xl font-bold text-primary-foreground mb-3"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Garanta a vaga do seu filho!
              </CardTitle>
              <CardDescription
                className="text-lg text-primary-foreground/90"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Preencha o formulário e agende uma visita para conhecer nossa estrutura
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="parentName" className="text-base font-semibold">
                    Nome do responsável *
                  </Label>
                  <Input
                    id="parentName"
                    type="text"
                    placeholder="Digite seu nome completo"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="h-12"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="studentName" className="text-base font-semibold">
                    Nome do aluno *
                  </Label>
                  <Input
                    id="studentName"
                    type="text"
                    placeholder="Digite o nome do aluno"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="h-12"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="grade" className="text-base font-semibold">
                      Série de interesse
                    </Label>
                    <Select value={formData.grade} onValueChange={(value) => setFormData({ ...formData, grade: value })}>
                      <SelectTrigger id="grade" className="h-12">
                        <SelectValue placeholder="Selecione a série" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1ano">1º ano</SelectItem>
                        <SelectItem value="2ano">2º ano</SelectItem>
                        <SelectItem value="3ano">3º ano</SelectItem>
                        <SelectItem value="4ano">4º ano</SelectItem>
                        <SelectItem value="5ano">5º ano</SelectItem>
                        <SelectItem value="6ano">6º ano</SelectItem>
                        <SelectItem value="7ano">7º ano</SelectItem>
                        <SelectItem value="8ano">8º ano</SelectItem>
                        <SelectItem value="9ano">9º ano</SelectItem>
                        <SelectItem value="1serie">1ª série (Médio)</SelectItem>
                        <SelectItem value="2serie">2ª série (Médio)</SelectItem>
                        <SelectItem value="3serie">3ª série (Médio)</SelectItem>
                        <SelectItem value="pre">Pré-vestibular</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="unit" className="text-base font-semibold">
                      Unidade de interesse
                    </Label>
                    <Select value={formData.unit} onValueChange={(value) => setFormData({ ...formData, unit: value })}>
                      <SelectTrigger id="unit" className="h-12">
                        <SelectValue placeholder="Selecione a unidade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="barra">Barra</SelectItem>
                        <SelectItem value="recreio">Recreio</SelectItem>
                        <SelectItem value="pechincha">Pechincha</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base font-semibold">
                    Telefone *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(21) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-semibold">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu.email@exemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent-hover text-accent-foreground font-bold text-lg py-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  <Send className="mr-2" size={20} />
                  Quero agendar uma visita
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
