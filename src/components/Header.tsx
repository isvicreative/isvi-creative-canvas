import { Instagram } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">IC</span>
          </div>
          <span className="text-xl font-bold gradient-text">IsviCreative</span>
        </div>
        
        <div className="flex items-center gap-6">
          <a
            href="#planos"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Planos
          </a>
          <a
            href="#portfolio"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Portfólio
          </a>
          <a
            href="#contato"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contato
          </a>
          <a
            href="https://instagram.com/isvicreative"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
