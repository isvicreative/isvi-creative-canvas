import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const whatsappUrl = "https://wa.me/5551997652633?text=Olá! Gostaria de mais informações sobre os planos da IsviCreative.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <Button
        size="lg"
        className="rounded-full w-16 h-16 shadow-glow bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:opacity-90 transition-all duration-300 group-hover:scale-110 text-white"
      >
        <MessageCircle className="w-7 h-7" />
      </Button>
      <span className="absolute right-20 top-1/2 -translate-y-1/2 bg-foreground text-background px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
        Fale conosco
      </span>
    </a>
  );
};

export default WhatsAppButton;
