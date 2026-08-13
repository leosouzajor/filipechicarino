import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import HeroSection from "@/components/home/HeroSection";
import QuemSouSection from "@/components/home/QuemSouSection";
import NR1Section from "@/components/home/NR1Section";
import ParceirosSection from "@/components/home/ParceirosSection";
import NarrativasSection from "@/components/home/NarrativasSection";
import BlogSection from "@/components/home/BlogSection";
import ContactSection from "@/components/home/ContactSection";
import { images } from "@/lib/assets";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Filipe Chicarino - Comunicação Humanizada e Não-Violenta" },
      {
        name: "description",
        content:
          "Filipe Chicarino é facilitador em comunicação humanizada. Palestras sobre NR-1, treinamentos em CNV e produção audiovisual para empresas.",
      },
      { property: "og:title", content: "Filipe Chicarino - Comunicação Humanizada e Não-Violenta" },
      { property: "og:description", content: "Filipe Chicarino é facilitador em comunicação humanizada. Palestras sobre NR-1, treinamentos em CNV e produção audiovisual para empresas." },
      { property: "og:url", content: "https://filipechicarino.com.br/" },
      { property: "og:image", content: images.hero },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: images.hero },
    ],
    links: [
      { rel: "canonical", href: "https://filipechicarino.com.br/" }
    ]
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <QuemSouSection />
        <NR1Section />
        <ParceirosSection />
        <NarrativasSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
