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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Filipe Chicarino - Comunicação Humanizada e Não-Violenta" },
      {
        name: "description",
        content:
          "Filipe Chicarino é facilitador em comunicação humanizada. Palestras sobre NR-1, treinamentos em CNV e produção audiovisual para empresas.",
      },
    ],
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
