import { Check, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PricingCardProps {
  name: string;
  setupPrice: string;
  monthlyPrice: string;
  features: string[];
  recommended?: boolean;
}

const PricingCard = ({ name, setupPrice, monthlyPrice, features, recommended }: PricingCardProps) => {
  const whatsappMessage = `Olá! Tenho interesse no plano ${name} da IsviCreative.`;
  const whatsappUrl = `https://wa.me/5551997652633?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Card 
      className={`relative p-8 hover-lift shadow-card ${
        recommended ? 'border-2 border-primary shadow-glow' : ''
      }`}
    >
      {recommended && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary border-0">
          <Sparkles className="w-3 h-3 mr-1" />
          Recomendado
        </Badge>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <div className="space-y-2">
          <div>
            <span className="text-sm text-muted-foreground">Criação: </span>
            <span className="text-lg font-bold text-primary">{setupPrice}</span>
          </div>
          <div>
            <span className="text-3xl font-bold gradient-text">{monthlyPrice}</span>
            <span className="text-muted-foreground">/mês</span>
          </div>
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Button 
        asChild
        className="w-full"
        variant={recommended ? "gradient" : "outline"}
      >
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          Contratar Agora
        </a>
      </Button>
    </Card>
  );
};

export default PricingCard;
