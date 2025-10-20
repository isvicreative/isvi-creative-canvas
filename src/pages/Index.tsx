import { ArrowRight, CheckCircle, Code, Headphones, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingCard from "@/components/PricingCard";
import PortfolioItem from "@/components/PortfolioItem";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import siteExemplo1 from "@/assets/site-exemplo-1.png";
import siteExemplo2 from "@/assets/site-exemplo-2.png";
import siteExemplo3 from "@/assets/site-exemplo-3.png";
import cardapio1 from "@/assets/cardapio-1.png";
import cardapio2 from "@/assets/cardapio-2.png";

const Index = () => {
  const whatsappUrl = "https://wa.me/5551997652633?text=Olá! Gostaria de mais informações sobre os planos da IsviCreative.";

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-background" />
        
        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 mb-4">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Sites Profissionais com Aluguel Mensal</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Seu site profissional <br />
              <span className="gradient-text">sem investimento alto</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Desenvolvimento e aluguel de sites com manutenção inclusa. Planos a partir de R$ 37,90/mês. Perfeito para empreendedores e pequenos negócios.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="gradient" asChild>
                <a href="#planos">
                  Ver Planos
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Falar com Especialista
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Por que escolher a <span className="gradient-text">IsviCreative</span>?
            </h2>
            <p className="text-lg text-muted-foreground">
              Somos uma agência criativa focada em desenvolvimento e aluguel de sites com manutenção inclusa. 
              A solução ideal para pequenos negócios, autônomos e empreendedores que querem presença online profissional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary mx-auto flex items-center justify-center shadow-glow">
                <Code className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold">Desenvolvimento Profissional</h3>
              <p className="text-muted-foreground">
                Sites modernos, responsivos e otimizados para todos os dispositivos.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary mx-auto flex items-center justify-center shadow-glow">
                <CheckCircle className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold">Fácil e Acessível</h3>
              <p className="text-muted-foreground">
                Planos mensais sem investimento alto inicial. Você paga e usa.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary mx-auto flex items-center justify-center shadow-glow">
                <Headphones className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold">Suporte Contínuo</h3>
              <p className="text-muted-foreground">
                Manutenção inclusa e suporte dedicado para manter seu site sempre atualizado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Planos Sites Institucionais Section */}
      <section id="planos" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Sites <span className="gradient-text">Institucionais</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Escolha o plano ideal para seu site corporativo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard
              name="Básico"
              setupPrice="R$ 50"
              monthlyPrice="R$ 37,90"
              features={[
                "1 alteração por mês",
                "Domínio não incluso",
                "Site padrão personalizado",
                "Textos e contatos customizados"
              ]}
            />

            <PricingCard
              name="Padrão"
              setupPrice="R$ 100"
              monthlyPrice="R$ 47,90"
              features={[
                "Até 3 alterações por mês",
                "Domínio .com.br incluso",
                "Certificado SSL grátis",
                "Suporte e adaptações básicas"
              ]}
              recommended
            />

            <PricingCard
              name="Premium"
              setupPrice="R$ 200"
              monthlyPrice="R$ 69,90"
              features={[
                "Alterações ilimitadas",
                "Domínio .com.br incluso",
                "Prioridade no suporte",
                "Layout padrão profissional"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Cardápios Online Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Cardápios <span className="gradient-text">Online</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Planos especializados para restaurantes e estabelecimentos que precisam atualizar 
              cardápios com frequência e facilitar o contato via WhatsApp
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard
              name="Básico"
              setupPrice="R$ 120"
              monthlyPrice="R$ 49,90"
              features={[
                "Até 3 alterações por mês",
                "Página estática com fotos",
                "Categorias organizadas",
                "Botão WhatsApp integrado"
              ]}
            />

            <PricingCard
              name="Avançado"
              setupPrice="R$ 180"
              monthlyPrice="R$ 59,90"
              features={[
                "Até 5 alterações por mês",
                "Design personalizado",
                "Categorias e fotos",
                "Integração com redes sociais"
              ]}
              recommended
            />

            <PricingCard
              name="Premium"
              setupPrice="R$ 220"
              monthlyPrice="R$ 69,90"
              features={[
                "Alterações ilimitadas",
                "Atualizações ilimitadas",
                "Integração com redes sociais",
                "Suporte prioritário",
                "Layout padrão profissional"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Exemplos de <span className="gradient-text">Sites Criados</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Veja alguns dos projetos que desenvolvemos para nossos clientes
            </p>
          </div>

          <div className="space-y-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6">Sites Institucionais</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <PortfolioItem
                  image={siteExemplo1}
                  title="Site Corporativo Profissional"
                  category="Institucional"
                  link="https://exemplo1.com"
                />
                <PortfolioItem
                  image={siteExemplo2}
                  title="E-commerce Moderno"
                  category="Institucional"
                  link="https://exemplo2.com"
                />
                <PortfolioItem
                  image={siteExemplo3}
                  title="Portfólio Criativo"
                  category="Institucional"
                  link="https://exemplo3.com"
                />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Cardápios Online</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <PortfolioItem
                  image={cardapio1}
                  title="Cardápio Digital Premium"
                  category="Restaurante"
                  link="https://cardapio1.com"
                />
                <PortfolioItem
                  image={cardapio2}
                  title="Menu Online Interativo"
                  category="Restaurante"
                  link="https://cardapio2.com"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 p-12 rounded-3xl border border-primary/20">
            <h2 className="text-4xl md:text-5xl font-bold">
              Pronto para ter seu <span className="gradient-text">site profissional</span>?
            </h2>
            <p className="text-lg text-muted-foreground">
              Entre em contato agora e comece a construir sua presença online com a IsviCreative
            </p>
            <Button size="lg" variant="gradient" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
