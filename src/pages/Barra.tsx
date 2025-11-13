import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ValuesSection } from "@/components/ValuesSection";
import { StructureSection } from "@/components/StructureSection";
import { EducationLevels } from "@/components/EducationLevels";
import { LocationSection } from "@/components/LocationSection";
import { FormSection } from "@/components/FormSection";
import { Footer } from "@/components/Footer";

const Barra = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("contato");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen">
      <Header onCtaClick={scrollToForm} unit="barra" />
      <main>
        <Hero onCtaClick={scrollToForm} unit="barra" />
        <ValuesSection />
        <StructureSection />
        <EducationLevels />
        <LocationSection unit="barra" />
        <FormSection defaultUnit="barra" />
      </main>
      <Footer />
    </div>
  );
};

export default Barra;
