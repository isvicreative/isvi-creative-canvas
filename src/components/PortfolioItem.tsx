import { Card } from "@/components/ui/card";

interface PortfolioItemProps {
  image="site-exemplo-1"
  title="Site Exemplo"
  category="Institucional"
  link="https://sitepro4.vercel.app/"
/>

}

const PortfolioItem = ({ image, title, category, link }: PortfolioItemProps) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <Card className="overflow-hidden group hover-lift shadow-card cursor-pointer transition-shadow duration-300">
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <p className="text-xs text-primary font-medium uppercase tracking-wide mb-1">
            {category}
          </p>
          <h3 className="font-semibold text-foreground">{title}</h3>
        </div>
      </Card>
    </a>
  );
};

