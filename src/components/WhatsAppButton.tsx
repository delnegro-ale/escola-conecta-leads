import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/5521995289612", "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      size="icon"
      variant="whatsapp"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={32} className="text-white" />
    </Button>
  );
};
