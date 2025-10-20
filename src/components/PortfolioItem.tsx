import { Card } from "@/components/ui/card";

interface PortfolioItemProps {
  image: string;
  title: string;
  category: string;
}

const PortfolioItem = ({ image, title, category }: PortfolioItemProps) => {
  return (
    <Card className="overflow-hidden group hover-lift shadow-card">
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
  );
};

export default PortfolioItem;
