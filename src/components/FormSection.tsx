import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { WHATSAPP_NUMBER_CLEAN } from "@/constants/contact";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

interface FormSectionProps {
  defaultUnit?: "barra" | "recreio" | "pechincha";
}

export const FormSection = ({ defaultUnit = "barra" }: FormSectionProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    grade: "",
    unit: defaultUnit,
    phone: "",
    email: "",
    observations: "",
  });

  const gradeOptions = {
    fundamentalI: [
      { value: "1ano-f1", label: "1º ano" },
      { value: "2ano-f1", label: "2º ano" },
      { value: "3ano-f1", label: "3º ano" },
      { value: "4ano-f1", label: "4º ano" },
      { value: "5ano-f1", label: "5º ano" },
    ],
    fundamentalII: [
      { value: "6ano", label: "6º ano" },
      { value: "7ano", label: "7º ano" },
      { value: "8ano", label: "8º ano" },
      { value: "9ano", label: "9º ano" },
    ],
    medio: [
      { value: "1ano-medio", label: "1º ano" },
      { value: "2ano-medio", label: "2º ano" },
      { value: "3ano-medio", label: "3º ano" },
      { value: "pre-vestibular", label: "Pré-vestibular" },
      { value: "pre-militar", label: "Pré-militar" },
    ],
  };

  const handleSubmit = async (e: React.FormEvent) => {
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

    setIsSubmitting(true);

    try {
      // 1. Send to webhook (non-blocking - don't wait for response)
      const webhookPayload = {
        parentName: formData.parentName,
        studentName: formData.studentName,
        grade: formData.grade,
        unit: formData.unit,
        phone: formData.phone,
        email: formData.email,
        observations: formData.observations,
        timestamp: new Date().toISOString(),
      };

      // Send webhook without waiting for response to avoid CORS issues
      fetch("https://webhooks.imobibot.com.br/webhook/c49785a1-ffd9-480e-b123-9fc5fd8bdc27", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(webhookPayload),
        mode: "no-cors", // This prevents CORS errors but we can't read the response
      }).catch(() => {
        // Silently fail - the important thing is the WhatsApp redirect
        console.log("Webhook call initiated");
      });

      // 2. Construct WhatsApp message
      const getGradeLabel = (value: string) => {
        const allGrades = [...gradeOptions.fundamentalI, ...gradeOptions.fundamentalII, ...gradeOptions.medio];
        const grade = allGrades.find((g) => g.value === value);
        if (!grade) return "Não informado";

        // Determine the education level
        let level = "";
        if (gradeOptions.fundamentalI.includes(grade)) {
          level = " (Anos iniciais)";
        } else if (gradeOptions.fundamentalII.includes(grade)) {
          level = " (Anos finais)";
        } else if (gradeOptions.medio.includes(grade)) {
          level = " (Ensino Médio)";
        }

        return grade.label + level;
      };

      const getUnitLabel = (value: string) => {
        const units = { barra: "Barra", recreio: "Recreio", pechincha: "Pechincha" };
        return units[value as keyof typeof units] || "Não informado";
      };

      let message = `Olá! Gostaria de agendar uma visita ao Colégio Nós.

📋 *Dados do Responsável*
Nome: ${formData.parentName}
Email: ${formData.email}
Telefone: ${formData.phone}

👨‍🎓 *Dados do Aluno*
Nome: ${formData.studentName}
Ano de interesse: ${getGradeLabel(formData.grade)}

🏫 *Unidade*
${getUnitLabel(formData.unit)}`;

      if (formData.observations) {
        message += `

💬 *Observações*
${formData.observations}`;
      }

      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER_CLEAN}?text=${encodeURIComponent(message)}`;

      toast({
        title: "Enviado com sucesso!",
        description: "Redirecionando para o WhatsApp...",
      });

      // @ts-ignore
      window.dataLayer = window.dataLayer || [];
      // @ts-ignore
      window.dataLayer.push({
        event: "WhatsappForm",
        ...formData
      });

      // 3. Redirect to WhatsApp
      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
        setIsSubmitting(false);

        // Reset form
        setFormData({
          parentName: "",
          studentName: "",
          grade: "",
          unit: defaultUnit,
          phone: "",
          email: "",
          observations: "",
        });
      }, 500);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Card className="border-none shadow-2xl">
            <CardHeader className="text-center pb-8 bg-gradient-primary rounded-t-lg">
              <CardTitle
                className="text-3xl md:text-4xl font-bold text-primary-foreground mb-3"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Matrículas abertas 2026
              </CardTitle>
              <CardDescription
                className="text-lg text-primary-foreground/90"
                style={{ fontFamily: "Inter, sans-serif" }}
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
                    <Label htmlFor="unit" className="text-base font-semibold">
                      Unidade de interesse *
                    </Label>
                    <Select
                      value={formData.unit}
                      onValueChange={(value: "barra" | "recreio" | "pechincha") =>
                        setFormData({ ...formData, unit: value })
                      }
                    >
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

                  <div className="space-y-2">
                    <Label htmlFor="grade" className="text-base font-semibold">
                      Ano de interesse
                    </Label>
                    <Select
                      value={formData.grade}
                      onValueChange={(value) => setFormData({ ...formData, grade: value })}
                    >
                      <SelectTrigger id="grade" className="h-12">
                        <SelectValue placeholder="Selecione o ano" />
                      </SelectTrigger>
                      <SelectContent>
                        {formData.unit === "barra" && (
                          <SelectGroup>
                            <SelectLabel>ANOS INICIAIS</SelectLabel>
                            {gradeOptions.fundamentalI.map((grade) => (
                              <SelectItem key={grade.value} value={grade.value}>
                                {grade.label}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        )}
                        <SelectGroup>
                          <SelectLabel>ANOS FINAIS</SelectLabel>
                          {gradeOptions.fundamentalII.map((grade) => (
                            <SelectItem key={grade.value} value={grade.value}>
                              {grade.label}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                        <SelectGroup>
                          <SelectLabel>ENSINO MÉDIO</SelectLabel>
                          {gradeOptions.medio.map((grade) => (
                            <SelectItem key={grade.value} value={grade.value}>
                              {grade.label}
                            </SelectItem>
                          ))}
                        </SelectGroup>
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

                <div className="space-y-2">
                  <Label htmlFor="observations" className="text-base font-semibold">
                    Observações (opcional)
                  </Label>
                  <Textarea
                    id="observations"
                    placeholder="Alguma informação adicional que gostaria de compartilhar..."
                    value={formData.observations}
                    onChange={(e) => setFormData({ ...formData, observations: e.target.value })}
                    className="min-h-[100px]"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent-hover text-accent-foreground font-bold text-lg py-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  <Send className="mr-2" size={20} />
                  {isSubmitting ? "Enviando..." : "Enviar por Whatsapp"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
