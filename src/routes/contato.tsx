import { createFileRoute } from '@tanstack/react-router';
import React, { useState } from 'react';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin } from 'lucide-react';
import { toast } from 'sonner';

export const Route = createFileRoute('/contato')({
  head: () => ({
    meta: [
      { title: "Contato | Filipe Chicarino" },
      {
        name: "description",
        content: "Entre em contato com Filipe Chicarino para palestras, treinamentos e consultorias.",
      },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    assunto: '',
    mensagem: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.nome.trim()) newErrors.nome = 'Nome é obrigatório';
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }
    if (!formData.assunto.trim()) newErrors.assunto = 'Assunto é obrigatório';
    if (!formData.mensagem.trim()) newErrors.mensagem = 'Mensagem é obrigatória';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Erro no formulário", {
        description: "Por favor, verifique os campos destacados."
      });
      return;
    }
    setIsSubmitting(true);
    // Simulation
    setTimeout(() => {
      toast.success("Mensagem enviada!", {
        description: "Retornaremos o seu contato em breve."
      });
      setFormData({
        nome: '',
        email: '',
        empresa: '',
        assunto: '',
        mensagem: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F5F3EF]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-48 pb-16 px-4 md:px-8 lg:px-16 bg-[#001F3F] text-white">
        <div className="container mx-auto max-w-7xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-5xl md:text-7xl font-bold font-serif mb-6"
          >
            Vamos conversar?
          </motion.h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-[800px] mx-auto">
            Estamos prontos para ouvir você e entender como podemos transformar a comunicação da sua empresa.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left Column: Form */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white p-8 md:p-10 rounded-[8px] shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                <h2 className="text-3xl font-bold text-[#001F3F] font-serif mb-8">Envie uma mensagem</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#001F3F] mb-2">Nome Completo *</label>
                    <input 
                      type="text" 
                      name="nome" 
                      value={formData.nome} 
                      onChange={handleChange} 
                      className={`w-full px-4 py-3 border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#C85A3A] transition-all bg-gray-50 ${errors.nome ? 'border-red-500' : 'border-gray-200'}`} 
                      placeholder="Seu nome" 
                    />
                    {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome}</p>}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#001F3F] mb-2">E-mail *</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        className={`w-full px-4 py-3 border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#C85A3A] transition-all bg-gray-50 ${errors.email ? 'border-red-500' : 'border-gray-200'}`} 
                        placeholder="seu@email.com" 
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#001F3F] mb-2">Empresa</label>
                      <input 
                        type="text" 
                        name="empresa" 
                        value={formData.empresa} 
                        onChange={handleChange} 
                        className="w-full px-4 py-3 border border-gray-200 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#C85A3A] transition-all bg-gray-50" 
                        placeholder="Nome da empresa" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#001F3F] mb-2">Assunto *</label>
                    <input 
                      type="text" 
                      name="assunto" 
                      value={formData.assunto} 
                      onChange={handleChange} 
                      className={`w-full px-4 py-3 border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#C85A3A] transition-all bg-gray-50 ${errors.assunto ? 'border-red-500' : 'border-gray-200'}`} 
                      placeholder="Sobre o que vamos falar?" 
                    />
                    {errors.assunto && <p className="text-red-500 text-sm mt-1">{errors.assunto}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#001F3F] mb-2">Mensagem *</label>
                    <textarea 
                      name="mensagem" 
                      rows={5} 
                      value={formData.mensagem} 
                      onChange={handleChange} 
                      className={`w-full px-4 py-3 border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#C85A3A] transition-all bg-gray-50 resize-none ${errors.mensagem ? 'border-red-500' : 'border-gray-200'}`} 
                      placeholder="Descreva como podemos ajudar..."
                    ></textarea>
                    {errors.mensagem && <p className="text-red-500 text-sm mt-1">{errors.mensagem}</p>}
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="w-full bg-[#C85A3A] text-white px-8 py-4 rounded-[8px] font-semibold text-lg hover:bg-[#B84A2A] transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Enviando...' : (
                      <>
                        Enviar Mensagem <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Right Column: Info */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.4 }} 
              className="space-y-12 flex flex-col justify-center"
            >
              <div>
                <h3 className="text-2xl font-bold text-[#001F3F] font-serif mb-6">Informações de Contato</h3>
                <p className="text-gray-600 mb-8 leading-relaxed max-w-[500px]">
                  Prefere falar diretamente? Utilize um dos nossos canais de atendimento abaixo.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-[#F5F3EF] rounded-full flex items-center justify-center group-hover:bg-[#C85A3A] transition-colors duration-300">
                    <Mail className="w-6 h-6 text-[#C85A3A] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#001F3F] text-lg mb-1">E-mail</h4>
                    <a href="mailto:contato@filipechicarino.com.br" className="text-gray-600 hover:text-[#C85A3A] transition-colors text-lg">
                      contato@filipechicarino.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-[#F5F3EF] rounded-full flex items-center justify-center group-hover:bg-[#C85A3A] transition-colors duration-300">
                    <Phone className="w-6 h-6 text-[#C85A3A] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#001F3F] text-lg mb-1">WhatsApp / Telefone</h4>
                    <a href="tel:+5527981178654" className="text-gray-600 hover:text-[#C85A3A] transition-colors text-lg">
                      (27) 981178654
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-[#F5F3EF] rounded-full flex items-center justify-center group-hover:bg-[#C85A3A] transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-[#C85A3A] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#001F3F] text-lg mb-1">Localização</h4>
                    <span className="text-gray-600 text-lg block">Espírito Santo - Brasil</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <h4 className="font-bold text-[#001F3F] mb-4">Redes Sociais</h4>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/filipechicarino/" target="_blank" rel="noopener noreferrer" className="bg-[#001F3F] text-white p-3 rounded-full hover:bg-[#C85A3A] transition-all duration-300 shadow-md hover:-translate-y-1">
                    <Instagram size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/filipe-chicarino-07858022?originalSubdomain=br" target="_blank" rel="noopener noreferrer" className="bg-[#001F3F] text-white p-3 rounded-full hover:bg-[#C85A3A] transition-all duration-300 shadow-md hover:-translate-y-1">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
