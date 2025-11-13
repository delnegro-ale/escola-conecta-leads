import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Colégio Nós
            </h3>
            <p className="text-background/80 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Uma escola com propósito, resultados e acolhimento. Educação de excelência do 1º ano ao Pré-vestibular.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-lg font-semibold mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Contato
            </h4>
            <div className="space-y-3 text-background/80" style={{ fontFamily: 'Inter, sans-serif' }}>
              <div className="flex items-start gap-2">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <div>
                  <p>(21) 99528-9612</p>
                  <p>(11) 98984-7644</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <p>contato@colegionos.com.br</p>
              </div>
            </div>
          </div>

          {/* Units */}
          <div>
            <h4
              className="text-lg font-semibold mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Nossas Unidades
            </h4>
            <ul className="space-y-2 text-background/80" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li>
                <Link to="/barra" className="hover:text-background transition-colors">
                  Unidade Barra
                </Link>
              </li>
              <li>
                <Link to="/recreio" className="hover:text-background transition-colors">
                  Unidade Recreio
                </Link>
              </li>
              <li>
                <Link to="/pechincha" className="hover:text-background transition-colors">
                  Unidade Pechincha
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4
              className="text-lg font-semibold mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Links Úteis
            </h4>
            <ul className="space-y-2 text-background/80" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li>
                <a href="#inicio" className="hover:text-background transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#proposta" className="hover:text-background transition-colors">
                  Nossa Proposta
                </a>
              </li>
              <li>
                <a href="#estrutura" className="hover:text-background transition-colors">
                  Estrutura
                </a>
              </li>
              <li>
                <a href="#ensino" className="hover:text-background transition-colors">
                  Níveis de Ensino
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-background transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/70" style={{ fontFamily: 'Inter, sans-serif' }}>
            © {new Date().getFullYear()} Colégio Nós. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
