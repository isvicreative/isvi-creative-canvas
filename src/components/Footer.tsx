import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-muted/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">IC</span>
              </div>
              <span className="text-xl font-bold gradient-text">IsviCreative</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Desenvolvimento e aluguel de sites com planos mensais acessíveis e manutenção inclusa.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#planos" className="hover:text-primary transition-colors">
                  Planos
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-primary transition-colors">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              <a
                href="mailto:isvicreativesuporte@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                isvicreativesuporte@gmail.com
              </a>
              <a
                href="https://instagram.com/isvicreative"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
                @isvicreative
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} IsviCreative. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
