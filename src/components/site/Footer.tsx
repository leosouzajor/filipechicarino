import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { INSTAGRAM_URL, LINKEDIN_URL } from "@/components/site/Header";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#001F3F] text-white pt-20 pb-10 border-t border-[#C85A3A]/20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-serif">
              Filipe Chicarino
              <span className="block text-xs font-sans font-light tracking-widest uppercase mt-2 text-[#C85A3A]">
                Comunicação Humanizada
              </span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Facilitando diálogos, transformando ambientes corporativos e produzindo narrativas
              que conectam pessoas e propósitos.
            </p>
            <div className="flex gap-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 p-3 rounded-[8px] hover:bg-[#C85A3A] transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 p-3 rounded-[8px] hover:bg-[#C85A3A] transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif border-l-2 border-[#C85A3A] pl-3">
              Menu
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="/" className="hover:text-[#C85A3A] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="/quem-sou" className="hover:text-[#C85A3A] transition-colors">
                  Quem Sou
                </a>
              </li>
              <li>
                <a href="/solucoes" className="hover:text-[#C85A3A] transition-colors">
                  Soluções
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-[#C85A3A] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contato" className="hover:text-[#C85A3A] transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif border-l-2 border-[#C85A3A] pl-3">
              Soluções
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="/solucoes" className="hover:text-[#C85A3A] transition-colors">
                  Palestras
                </a>
              </li>
              <li>
                <a href="/solucoes" className="hover:text-[#C85A3A] transition-colors">
                  Treinamentos
                </a>
              </li>
              <li>
                <a href="/solucoes" className="hover:text-[#C85A3A] transition-colors">
                  Histórias Humanizadas
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif border-l-2 border-[#C85A3A] pl-3">
              Contato
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#C85A3A] mt-1 shrink-0" />
                <a
                  href="mailto:contato@filipechicarino.com.br"
                  className="hover:text-white transition-colors"
                >
                  contato@filipechicarino.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#C85A3A] mt-1 shrink-0" />
                <a href="tel:+5527981178654" className="hover:text-white transition-colors">
                  (27) 981178654
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C85A3A] mt-1 shrink-0" />
                <span>Espírito Santo - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {currentYear} Filipe Chicarino. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0 font-serif italic">Desenvolvido com excelência</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
