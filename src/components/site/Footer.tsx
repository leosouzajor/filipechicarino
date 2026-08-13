import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { INSTAGRAM_URL, LINKEDIN_URL } from "@/components/site/Header";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#001F3F] text-white pt-12 md:pt-20 pb-8 md:pb-10 border-t border-[#C85A3A]/20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-8 md:mb-16 border-b border-white/10 pb-8 md:pb-16">
          {/* Brand */}
          <div className="space-y-5 md:space-y-6">
            <h3 className="text-2xl font-bold font-serif">
              Filipe Chicarino
              <span className="block text-[10px] md:text-xs font-sans font-light tracking-widest uppercase mt-2 text-[#C85A3A]">
                Comunicação Humanizada
              </span>
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xs">
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
            <h4 className="text-lg font-bold mb-4 md:mb-6 font-serif border-l-2 border-[#C85A3A] pl-3">
              Menu
            </h4>
            <ul className="space-y-3 md:space-y-4 text-gray-400">
              <li>
                <a href="/" className="hover:text-[#C85A3A] transition-colors block py-1 md:py-0">
                  Início
                </a>
              </li>
              <li>
                <a href="/quem-sou" className="hover:text-[#C85A3A] transition-colors block py-1 md:py-0">
                  Quem Sou
                </a>
              </li>
              <li>
                <a href="/solucoes" className="hover:text-[#C85A3A] transition-colors block py-1 md:py-0">
                  Soluções
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-[#C85A3A] transition-colors block py-1 md:py-0">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contato" className="hover:text-[#C85A3A] transition-colors block py-1 md:py-0">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 md:mb-6 font-serif border-l-2 border-[#C85A3A] pl-3">
              Soluções
            </h4>
            <ul className="space-y-3 md:space-y-4 text-gray-400">
              <li>
                <a href="/solucoes" className="hover:text-[#C85A3A] transition-colors block py-1 md:py-0">
                  Palestras
                </a>
              </li>
              <li>
                <a href="/solucoes" className="hover:text-[#C85A3A] transition-colors block py-1 md:py-0">
                  Treinamentos
                </a>
              </li>
              <li>
                <a href="/solucoes" className="hover:text-[#C85A3A] transition-colors block py-1 md:py-0">
                  Histórias Humanizadas
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 md:mb-6 font-serif border-l-2 border-[#C85A3A] pl-3">
              Contato
            </h4>
            <ul className="space-y-3 md:space-y-4 text-gray-400">
              <li className="flex items-start gap-3 py-1 md:py-0">
                <Mail className="w-5 h-5 text-[#C85A3A] mt-1 shrink-0" />
                <a
                  href="mailto:contato@filipechicarino.com.br"
                  className="hover:text-white transition-colors"
                >
                  contato@filipechicarino.com.br
                </a>
              </li>
              <li className="flex items-start gap-3 py-1 md:py-0">
                <Phone className="w-5 h-5 text-[#C85A3A] mt-1 shrink-0" />
                <a href="tel:+5527981178654" className="hover:text-white transition-colors">
                  (27) 981178654
                </a>
              </li>
              <li className="flex items-start gap-3 py-1 md:py-0">
                <MapPin className="w-5 h-5 text-[#C85A3A] mt-1 shrink-0" />
                <span>Espírito Santo - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left text-gray-500 text-[13px] md:text-sm gap-2 md:gap-0">
          <p>© {currentYear} Filipe Chicarino. Todos os direitos reservados.</p>
          <p className="font-serif italic">Desenvolvido com excelência</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
