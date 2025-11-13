import { useRef } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ValuesSection } from "@/components/ValuesSection";
import { StructureSection } from "@/components/StructureSection";
import { EducationLevels } from "@/components/EducationLevels";
import { AllLocationsSection } from "@/components/AllLocationsSection";
import { FormSection } from "@/components/FormSection";
import { Footer } from "@/components/Footer";

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
        <AllLocationsSection />
        <FormSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
