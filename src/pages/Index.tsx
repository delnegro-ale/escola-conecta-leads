import { useRef } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ValuesSection } from "@/components/ValuesSection";
import { StructureSection } from "@/components/StructureSection";
import { EducationLevels } from "@/components/EducationLevels";
import { FormSection } from "@/components/FormSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("contato");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen">
      <Header onCtaClick={scrollToForm} />
      <main>
        <Hero onCtaClick={scrollToForm} />
        <ValuesSection />
        <StructureSection />
        <EducationLevels />
        <FormSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
