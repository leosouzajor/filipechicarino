import { useState } from "react";
import { Menu, X, Instagram, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { images } from "@/lib/assets";

const menuItems = [
  { name: "Início", path: "/" },
  { name: "Quem Sou", path: "/quem-sou" },
  { name: "Soluções", path: "/solucoes" },
  { name: "Blog", path: "/blog" },
  { name: "Contato", path: "/contato" },
] as const;

export const INSTAGRAM_URL = "https://www.instagram.com/filipechicarino/";
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/filipe-chicarino-07858022?originalSubdomain=br";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] py-2 transition-all duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <a href="/" className="flex items-center group h-full py-1">
            <img
              src={images.logo}
              alt="Filipe Chicarino - Comunicação Humanizada"
              className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.path}
                    className="font-medium text-sm tracking-wide text-[#001F3F] hover:text-[#C85A3A] transition-colors duration-300 uppercase"
                  >
                    {item.name}
                  </a>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C85A3A] transition-all duration-300 group-hover:w-full"></span>
                </div>
              ))}
            </nav>

            <div className="flex items-center space-x-4 border-l pl-6 border-gray-300">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#001F3F] hover:text-[#C85A3A] transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#001F3F] hover:text-[#C85A3A] transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 rounded-lg transition-colors duration-300 text-[#001F3F] hover:bg-[#001F3F]/5"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#001F3F] font-medium text-lg hover:text-[#C85A3A] transition-colors duration-300 py-3 border-b border-[#001F3F]/10 last:border-0"
                >
                  {item.name}
                </a>
              ))}

              <div className="flex flex-wrap items-center gap-6 pt-4 mt-2 border-t border-gray-200">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#001F3F] hover:text-[#C85A3A] transition-colors duration-300 flex items-center gap-2"
                >
                  <Instagram size={24} />
                  <span className="font-medium">Instagram</span>
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#001F3F] hover:text-[#C85A3A] transition-colors duration-300 flex items-center gap-2"
                >
                  <Linkedin size={24} />
                  <span className="font-medium">LinkedIn</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
