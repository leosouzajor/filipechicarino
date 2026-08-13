import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from '@tanstack/react-router';

const EditorialSection = ({ 
  title, 
  subtitle, 
  children, 
  image, 
  imageAlt, 
  imageCaption,
  buttonText, 
  buttonLink, 
  reverse = false,
  className,
  id
}: any) => {
  return (
    <section id={id} className={cn("py-20 md:py-24 px-4 md:px-8 lg:px-16 overflow-hidden", className)}>
      <div className="container mx-auto max-w-7xl">
        <div className={cn("grid lg:grid-cols-2 gap-12 lg:gap-20 items-center", reverse ? "lg:flex-row-reverse" : "")}>
          
          {/* Content Column */}
          <div className={cn("order-2", reverse ? "lg:order-2" : "lg:order-1")}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {subtitle && (
                <span className="text-[#C85A3A] font-bold tracking-widest text-sm uppercase mb-4 block">
                  {subtitle}
                </span>
              )}
              
              {title && (
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#001F3F] font-serif mb-8 leading-tight">
                  {title}
                </h2>
              )}
              
              <div className="prose prose-lg text-gray-700 leading-relaxed font-light max-w-none">
                {children}
              </div>

              {buttonText && buttonLink && (
                <div className="mt-10">
                   {buttonLink.startsWith('/') ? (
                     <a 
                        href={buttonLink}
                        className="inline-flex items-center gap-3 bg-[#001F3F] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#C85A3A] transition-all duration-300 shadow-lg group"
                     >
                        {buttonText}
                        <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                     </a>
                   ) : (
                     <a 
                        href={buttonLink}
                        className="inline-flex items-center gap-3 bg-[#001F3F] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#C85A3A] transition-all duration-300 shadow-lg group"
                     >
                        {buttonText}
                        <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                     </a>
                   )}
                </div>
              )}
            </motion.div>
          </div>

          {/* Image Column */}
          {image && (
            <div className={cn("order-1 relative", reverse ? "lg:order-1" : "lg:order-2")}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
              >
                <div className="relative rounded-sm overflow-hidden shadow-2xl">
                  <img 
                    src={image} 
                    alt={imageAlt || title} 
                    className="w-full h-auto object-cover"
                  />
                  {imageCaption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-12">
                      <p className="text-white/90 text-sm font-light italic text-center">{imageCaption}</p>
                    </div>
                  )}
                </div>
                {/* Decorative border */}
                <div className="absolute -inset-4 border border-[#C85A3A]/30 z-0 hidden md:block" />
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;
