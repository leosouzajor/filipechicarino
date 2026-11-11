import { useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Clock,
  HeartHandshake,
  Instagram,
  Linkedin,
  MapPin,
  MessageSquareHeart,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { images } from "@/lib/assets";
import { INSTAGRAM_URL, LINKEDIN_URL } from "@/components/site/Header";

export const Route = createFileRoute("/chica")({
  head: () => ({
    meta: [
      {
        title: "CHICA | Inteligência artificial para uma comunicação mais humana na saúde",
      },
      {
        name: "description",
        content:
          "CHICA — Comunicação Humanizada Institucional Conectada ao Acolhimento. Ferramenta de inteligência artificial em desenvolvimento a partir do Método Chicarino.",
      },
      {
        property: "og:title",
        content: "CHICA | Inteligência artificial para uma comunicação mais humana na saúde",
      },
      {
        property: "og:description",
        content:
          "CHICA — Comunicação Humanizada Institucional Conectada ao Acolhimento. Inteligência artificial para uma comunicação mais humana na saúde.",
      },
      { property: "og:url", content: "https://filipechicarino.com/chica/" },
      {
        property: "og:image",
        content: `https://filipechicarino.com${images.retratoFilipe}`,
      },
      { property: "og:image:type", content: "image/jpeg" },
      {
        property: "og:image:alt",
        content: "Filipe Chicarino — Método Chicarino de Comunicação Humanizada",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "CHICA | Inteligência artificial para uma comunicação mais humana na saúde",
      },
      {
        name: "twitter:description",
        content:
          "Mais clareza para quem recebe. Mais tempo para quem cuida. Conheça a Chica, iniciativa fundamentada no Método Chicarino de Comunicação Humanizada.",
      },
      {
        name: "twitter:image",
        content: `https://filipechicarino.com${images.retratoFilipe}`,
      },
    ],
    links: [{ rel: "canonical", href: "https://filipechicarino.com/chica/" }],
  }),
  component: ChicaLandingPage,
});

const objectives = [
  {
    number: "01",
    title: "Mais compreensão",
    description: "Ajudar pacientes e familiares a entender melhor as informações que recebem.",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Menos dúvidas evitáveis",
    description:
      "Produzir orientações mais claras, reduzindo a necessidade de explicações repetidas.",
    icon: MessageSquareHeart,
  },
  {
    number: "03",
    title: "Mais tempo para cuidar",
    description:
      "Apoiar as equipes na produção de comunicações, sem abrir mão da qualidade e da revisão humana.",
    icon: Clock,
  },
] as const;

const everydayContexts = [
  "Consultas",
  "Exames",
  "Comunicados hospitalares",
  "Orientações em unidades básicas de saúde",
  "Outras situações do cotidiano",
] as const;

const animationStyles = `
/* Keyframe para entrada suave no carregamento inicial */
@keyframes chicaHeroEntrance {
  0% {
    opacity: 0;
    transform: translateY(16px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.chica-hero-animate-brand {
  animation: chicaHeroEntrance 600ms cubic-bezier(0.16, 1, 0.3, 1) 40ms both;
}

.chica-hero-animate-problem {
  animation: chicaHeroEntrance 650ms cubic-bezier(0.16, 1, 0.3, 1) 160ms both;
}

.chica-hero-animate-title {
  animation: chicaHeroEntrance 600ms cubic-bezier(0.16, 1, 0.3, 1) 260ms both;
}

.chica-hero-animate-actions {
  animation: chicaHeroEntrance 600ms cubic-bezier(0.16, 1, 0.3, 1) 340ms both;
}

.chica-hero-animate-card {
  animation: chicaHeroEntrance 700ms cubic-bezier(0.16, 1, 0.3, 1) 180ms both;
}

/* O estado oculto do scroll reveal SÓ é ativado após a hidratação do cliente */
.chica-observer-ready [data-chica-reveal] {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 550ms cubic-bezier(0.16, 1, 0.3, 1),
              transform 550ms cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}

.chica-observer-ready [data-chica-reveal].is-visible {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

/* Acessibilidade para movimento reduzido */
@media (prefers-reduced-motion: reduce) {
  .chica-hero-animate-brand,
  .chica-hero-animate-problem,
  .chica-hero-animate-title,
  .chica-hero-animate-actions,
  .chica-hero-animate-card,
  .chica-observer-ready [data-chica-reveal] {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
`;

function ChicaLandingPage() {
  const currentYear = new Date().getFullYear();

  const whatsappChicaUrl = `https://wa.me/5527981178654?text=${encodeURIComponent(
    "Olá, Filipe! Acessei a página da Chica e gostaria de conhecer mais sobre a iniciativa.",
  )}`;

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const container = document.getElementById("chica-page-root");
    if (!container) return;

    const revealElements = container.querySelectorAll<HTMLElement>("[data-chica-reveal]");
    if (!revealElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.getAttribute("data-chica-delay");
            if (delay) {
              setTimeout(
                () => {
                  el.classList.add("is-visible");
                },
                parseInt(delay, 10),
              );
            } else {
              el.classList.add("is-visible");
            }
            observer.unobserve(el);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -6% 0px",
        threshold: 0.12,
      },
    );

    container.classList.add("chica-observer-ready");

    revealElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("is-visible");
      } else {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      id="chica-page-root"
      className="min-h-screen w-full overflow-x-hidden bg-[#F5F3EF] text-[#001F3F] selection:bg-[#C85A3A] selection:text-white"
    >
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
      {/* Skip link for keyboard accessibility */}
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-[#001F3F] focus:text-white focus:px-5 focus:py-3 focus:rounded-lg focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#C85A3A]"
      >
        Pular para o conteúdo principal
      </a>

      {/* Editorial Independent Header */}
      <header className="sticky top-0 z-50 bg-[#F5F3EF]/95 backdrop-blur-md border-b border-[#001F3F]/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
          <div className="flex items-center justify-between h-18 sm:h-20 gap-3">
            <div className="flex items-center min-w-0">
              <a
                href="#topo"
                className="group inline-flex items-baseline gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A3A] rounded-sm"
                aria-label="CHICA — Voltar ao topo"
              >
                <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#001F3F] group-hover:text-[#C85A3A] transition-colors motion-reduce:transition-none">
                  CHICA
                </span>
                <span className="hidden sm:inline-block h-4 w-[1px] bg-[#C85A3A]/40" />
                <span className="hidden sm:inline-block text-xs font-semibold uppercase tracking-[0.18em] text-[#9A3E22]">
                  Método Chicarino
                </span>
              </a>
            </div>

            <nav
              aria-label="Navegação da página Chica"
              className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#001F3F]/85"
            >
              <a
                href="#proposito"
                className="hover:text-[#C85A3A] transition-colors motion-reduce:transition-none py-1"
              >
                Propósito
              </a>
              <a
                href="#na-pratica"
                className="hover:text-[#C85A3A] transition-colors motion-reduce:transition-none py-1"
              >
                Na prática
              </a>
              <a
                href="#papel-da-tecnologia"
                className="hover:text-[#C85A3A] transition-colors motion-reduce:transition-none py-1"
              >
                Papel da tecnologia
              </a>
              <a
                href="#objetivos"
                className="hover:text-[#C85A3A] transition-colors motion-reduce:transition-none py-1"
              >
                Objetivos
              </a>
              <a
                href="#conhecer-mais"
                className="hover:text-[#C85A3A] transition-colors motion-reduce:transition-none py-1"
              >
                Contato
              </a>
            </nav>

            <div className="flex items-center shrink-0">
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#001F3F] hover:text-[#C85A3A] transition-colors motion-reduce:transition-none px-3 py-2 rounded-md border border-[#001F3F]/15 hover:border-[#C85A3A]/50 bg-white/80"
              >
                <span>Filipe Chicarino</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C85A3A] shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main id="conteudo-principal">
        {/* HERO SECTION */}
        <section
          id="topo"
          aria-labelledby="chica-hero-heading"
          className="relative overflow-hidden bg-gradient-to-b from-[#EBE6DF] via-[#F5F3EF] to-[#F5F3EF] pt-12 pb-16 md:pt-20 md:pb-28 px-4 sm:px-6 md:px-8 lg:px-16 border-b border-[#001F3F]/10"
        >
          {/* Warm architectural background accents */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 right-0 w-72 sm:w-[28rem] h-72 sm:h-[28rem] rounded-full bg-[#C85A3A]/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/4 w-64 sm:w-[24rem] h-64 sm:h-[24rem] rounded-full bg-[#001F3F]/5 blur-3xl"
          />

          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              {/* Left Column: Brand Identity & Headline */}
              <div className="lg:col-span-7 min-w-0 space-y-6 sm:space-y-8">
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-[#C85A3A]/35 shadow-xs">
                  <span aria-hidden="true" className="w-2 h-2 rounded-full bg-[#C85A3A]" />
                  <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#9A3E22] uppercase">
                    Ferramenta em construção
                  </span>
                </div>

                <div className="space-y-4 chica-hero-animate-brand">
                  <h1
                    id="chica-hero-heading"
                    className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-[#001F3F] leading-none"
                  >
                    CHICA<span className="text-[#C85A3A]">.</span>
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl font-medium text-[#9A3E22] tracking-normal leading-snug max-w-2xl">
                    Comunicação Humanizada Institucional Conectada ao Acolhimento
                  </p>
                  <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-medium text-[#001F3F]/90 leading-snug max-w-2xl">
                    Inteligência artificial para uma comunicação mais humana na saúde
                  </p>
                </div>

                {/* O Problema: Bloco Editorial com as duas reflexões complementares */}
                <div className="border-l-4 border-[#C85A3A] pl-5 sm:pl-6 py-4 bg-white/80 rounded-r-2xl shadow-xs max-w-2xl space-y-3.5 chica-hero-animate-problem">
                  <span className="block text-xs font-bold uppercase tracking-[0.2em] text-[#9A3E22]">
                    O problema
                  </span>
                  <p className="font-serif text-2xl sm:text-3xl font-bold text-[#001F3F] leading-snug">
                    “A saúde cuida do corpo e descuida da palavra.”
                  </p>
                  <p className="text-base sm:text-lg text-[#001F3F]/85 font-normal leading-relaxed">
                    Na rotina dos serviços de saúde, informações importantes nem sempre chegam às
                    pessoas com a clareza e o acolhimento necessários.
                  </p>
                  <div className="pt-2.5 border-t border-[#001F3F]/10">
                    <p className="font-serif text-lg sm:text-xl font-medium text-[#001F3F] italic leading-relaxed">
                      “Na saúde, quase nunca falta vontade de humanizar. Falta tempo.”
                    </p>
                  </div>
                </div>

                <p className="text-lg sm:text-xl text-[#001F3F]/85 font-normal leading-relaxed max-w-2xl chica-hero-animate-title">
                  A Chica nasce para ajudar a enfrentar esse desafio, apoiando quem trabalha na
                  saúde a se comunicar melhor com quem é cuidado.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5 sm:gap-4 chica-hero-animate-actions">
                  <a
                    href="#na-pratica"
                    className="inline-flex items-center justify-center gap-3 bg-[#C85A3A] text-white px-6 sm:px-7 py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-[#AD4729] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 motion-reduce:transition-none shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C85A3A]"
                  >
                    <span>Veja um exemplo de comunicação</span>
                    <ArrowRight className="w-5 h-5 shrink-0" />
                  </a>
                  <a
                    href="#conhecer-mais"
                    className="inline-flex items-center justify-center gap-2 bg-white text-[#001F3F] border border-[#001F3F]/20 px-6 py-4 rounded-lg font-semibold text-base sm:text-lg hover:border-[#C85A3A] hover:text-[#C85A3A] hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 motion-reduce:transition-none"
                  >
                    <span>Conhecer a iniciativa</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Editorial Context Card */}
              <div
                id="proposito"
                className="lg:col-span-5 min-w-0 scroll-mt-28 chica-hero-animate-card"
              >
                <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-[0_12px_36px_rgba(0,31,63,0.08)] border border-[#001F3F]/10 hover:border-[#C85A3A]/30 transition-all duration-500 relative">
                  <div className="w-12 h-1 bg-[#C85A3A] mb-6" />

                  <span className="block text-xs font-bold uppercase tracking-[0.2em] text-[#9A3E22] mb-3">
                    Origem e Propósito
                  </span>

                  <div className="space-y-5 text-[#001F3F]/90 text-base sm:text-lg leading-relaxed">
                    <p>
                      A Chica — Comunicação Humanizada Institucional Conectada ao Acolhimento — é
                      uma ferramenta de inteligência artificial em desenvolvimento, criada a partir
                      do{" "}
                      <strong className="font-semibold text-[#001F3F]">
                        Método Chicarino de Comunicação Humanizada
                      </strong>
                      , que reúne três décadas de experiência escutando pessoas, contando histórias
                      e construindo formas mais humanas de comunicação.
                    </p>
                    <p>
                      A proposta é simples: ajudar profissionais e instituições de saúde a
                      transformar informações técnicas, burocráticas e muitas vezes difíceis de
                      entender em mensagens mais claras, acolhedoras e acessíveis.
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#001F3F]/10">
                    <p className="font-serif italic text-lg sm:text-xl text-[#001F3F] leading-relaxed">
                      “Porque cada palavra importa. E, na saúde, a maneira como uma informação chega
                      pode fazer tanta diferença quanto a própria informação.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: COMO ISSO FUNCIONA NA PRÁTICA? */}
        <section
          id="na-pratica"
          aria-labelledby="pratica-heading"
          className="py-16 md:py-28 px-4 sm:px-6 md:px-8 lg:px-16 bg-white scroll-mt-20"
        >
          <div className="container mx-auto max-w-6xl">
            <div
              data-chica-reveal
              className="max-w-3xl mx-auto text-center space-y-4 mb-12 md:mb-16"
            >
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#9A3E22] block">
                Exemplo concreto
              </span>
              <h2
                id="pratica-heading"
                className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#001F3F] leading-tight"
              >
                Como isso funciona na prática?
              </h2>
              <p className="text-lg sm:text-xl text-[#001F3F]/80 font-normal leading-relaxed pt-2">
                Pense em alguém que espera há semanas por um exame e recebe a seguinte mensagem:
              </p>
            </div>

            {/* Comparison Grid */}
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-stretch">
              {/* Original Message Card */}
              <article
                data-chica-reveal
                data-chica-delay="0"
                aria-label="Comunicação original"
                className="min-w-0 rounded-2xl bg-[#F5F3EF] border border-[#001F3F]/15 p-6 sm:p-10 flex flex-col justify-between hover:shadow-md transition-all duration-300"
              >
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-[#001F3F]/10 pb-4">
                    <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-[#001F3F]/85">
                      Comunicação original
                    </span>
                    <span className="text-xs sm:text-[13px] font-medium px-3 py-1 rounded-full bg-[#001F3F]/10 text-[#001F3F]">
                      Comunicado padrão
                    </span>
                  </div>

                  <blockquote className="font-sans text-lg sm:text-xl text-[#001F3F]/90 leading-relaxed bg-white p-5 sm:p-6 rounded-xl border border-[#001F3F]/10 shadow-2xs">
                    “Informamos que o exame agendado foi cancelado por indisponibilidade do
                    equipamento. Aguarde novo contato.”
                  </blockquote>
                </div>

                <p className="mt-6 text-sm sm:text-[15px] leading-relaxed text-[#001F3F]/80">
                  Mensagem técnica e impessoal, sem acolhimento a quem aguardava o atendimento.
                </p>
              </article>

              {/* Chica Adapted Message Card */}
              <article
                data-chica-reveal
                data-chica-delay="200"
                aria-label="Comunicação adaptada — Exemplo ilustrativo"
                className="min-w-0 rounded-2xl bg-[#FDF8F5] border-2 border-[#C85A3A] p-6 sm:p-10 flex flex-col justify-between shadow-[0_12px_32px_rgba(200,90,58,0.12)] hover:shadow-[0_16px_40px_rgba(200,90,58,0.18)] hover:-translate-y-0.5 transition-all duration-300 relative"
              >
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-[#C85A3A]/25 pb-4">
                    <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-[#9A3E22]">
                      Comunicação adaptada — Exemplo ilustrativo
                    </span>
                    <span className="text-xs sm:text-[13px] font-semibold px-3 py-1 rounded-full bg-[#C85A3A] text-white">
                      Comunicação humanizada
                    </span>
                  </div>

                  <blockquote className="font-serif text-lg sm:text-xl text-[#001F3F] leading-relaxed bg-white p-5 sm:p-6 rounded-xl border border-[#C85A3A]/25 shadow-xs">
                    “Infelizmente, seu exame foi cancelado porque o equipamento não está disponível.
                    Sabemos que essa notícia pode atrapalhar seus planos. Por enquanto, pedimos que
                    aguarde um novo contato sobre o exame.”
                  </blockquote>
                </div>

                <p className="mt-6 text-sm sm:text-[15px] leading-relaxed text-[#9A3E22] font-medium">
                  Mesma informação essencial, transmitida com clareza, respeito e orientação
                  compreensível.
                </p>
              </article>
            </div>

            {/* Discreet Editorial Note */}
            <p className="mt-6 text-center text-xs sm:text-sm text-[#001F3F]/75 italic leading-relaxed max-w-2xl mx-auto px-2">
              Exemplo ilustrativo da proposta da Chica. As mensagens produzidas pela ferramenta
              deverão passar por validação institucional.
            </p>

            {/* Key Takeaway Box */}
            <div
              data-chica-reveal
              className="mt-8 sm:mt-10 rounded-2xl bg-[#001F3F] text-white p-6 sm:p-10 md:p-12 shadow-xl"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 min-w-0 space-y-4">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug">
                    A informação continua sendo a mesma. O que muda é a forma de conversar.
                  </h3>
                  <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                    Sem inventar uma nova data, esconder informações ou fazer promessas que a
                    instituição não pode cumprir.
                  </p>
                </div>

                <div className="lg:col-span-5 min-w-0 lg:border-l lg:border-white/15 lg:pl-8 space-y-4">
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                    A Chica poderá apoiar a comunicação sobre consultas, exames, comunicados
                    hospitalares, orientações em unidades básicas de saúde e outras situações do
                    cotidiano.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {everydayContexts.map((context) => (
                      <span
                        key={context}
                        className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/10 text-white border border-white/15"
                      >
                        {context}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: TECNOLOGIA PARA APOIAR, NÃO SUBSTITUIR */}
        <section
          id="papel-da-tecnologia"
          aria-labelledby="tecnologia-heading"
          className="py-16 md:py-28 px-4 sm:px-6 md:px-8 lg:px-16 bg-[#F5F3EF] border-y border-[#001F3F]/10 scroll-mt-20"
        >
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Left Column: Editorial Narrative */}
              <div data-chica-reveal className="lg:col-span-7 min-w-0 space-y-6">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#9A3E22] block">
                  Ética e Responsabilidade
                </span>
                <h2
                  id="tecnologia-heading"
                  className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#001F3F] leading-tight"
                >
                  Tecnologia para apoiar, não substituir
                </h2>

                <div className="space-y-5 text-lg sm:text-xl text-[#001F3F]/90 leading-relaxed pt-2">
                  <p className="font-semibold text-[#001F3F]">
                    A Chica não pretende substituir os profissionais de saúde.
                  </p>
                  <p>Seu papel é apoiar o trabalho de quem já cuida das pessoas.</p>
                  <p>
                    A proposta combina inteligência artificial com um método de comunicação
                    humanizada, preservando as informações essenciais e mantendo a validação dos
                    conteúdos sob responsabilidade dos profissionais e das instituições.
                  </p>
                </div>
              </div>

              {/* Right Column: Principle Highlight Card */}
              <div data-chica-reveal data-chica-delay="150" className="lg:col-span-5 min-w-0">
                <div className="bg-white rounded-2xl p-6 sm:p-10 border-l-4 border-[#C85A3A] shadow-[0_8px_28px_rgba(0,31,63,0.07)] hover:shadow-md transition-all duration-300 space-y-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#FDF8F5] text-[#C85A3A] border border-[#C85A3A]/20">
                    <HeartHandshake className="w-6 h-6" />
                  </div>

                  <p className="font-serif text-xl sm:text-2xl text-[#001F3F] font-medium leading-relaxed">
                    “Porque humanizar não significa apenas escrever de um jeito mais simpático.”
                  </p>

                  <p className="text-base sm:text-lg text-[#001F3F]/85 leading-relaxed">
                    Significa comunicar com{" "}
                    <strong className="font-semibold text-[#001F3F]">
                      clareza, respeito, responsabilidade e atenção
                    </strong>{" "}
                    a quem recebe a mensagem.
                  </p>

                  <div className="pt-4 border-t border-[#001F3F]/10 flex items-center gap-3 text-sm font-medium text-[#001F3F]/80">
                    <ShieldCheck className="w-5 h-5 text-[#C85A3A] shrink-0" />
                    <span>
                      Revisão e validação sempre sob responsabilidade dos profissionais e das
                      instituições
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: COMO QUEREMOS FAZER A DIFERENÇA? */}
        <section
          id="objetivos"
          aria-labelledby="objetivos-heading"
          className="py-16 md:py-28 px-4 sm:px-6 md:px-8 lg:px-16 bg-white scroll-mt-20"
        >
          <div className="container mx-auto max-w-6xl">
            <div
              data-chica-reveal
              className="max-w-3xl mx-auto text-center space-y-4 mb-12 md:mb-16"
            >
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#9A3E22] block">
                Objetivos pretendidos
              </span>
              <h2
                id="objetivos-heading"
                className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#001F3F] leading-tight"
              >
                Como queremos fazer a diferença?
              </h2>
            </div>

            {/* 3 Objectives Cards */}
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {objectives.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.number}
                    data-chica-reveal
                    data-chica-delay={index * 140}
                    className="min-w-0 rounded-2xl bg-[#F5F3EF] p-6 sm:p-9 border border-[#001F3F]/10 flex flex-col justify-between hover:border-[#C85A3A]/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 motion-reduce:transition-none"
                  >
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-3xl font-bold text-[#C85A3A]">
                          {item.number}
                        </span>
                        <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-[#001F3F] border border-[#001F3F]/10">
                          <Icon className="w-5 h-5 text-[#C85A3A]" />
                        </div>
                      </div>

                      <h3 className="font-serif text-2xl font-bold text-[#001F3F]">{item.title}</h3>

                      <p className="text-base sm:text-lg text-[#001F3F]/85 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Transparency & Validation Disclaimer */}
            <div
              data-chica-reveal
              className="mt-10 rounded-xl bg-[#FDF8F5] border border-[#C85A3A]/30 px-5 sm:px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-start sm:items-center gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-[#C85A3A] shrink-0 mt-0.5 sm:mt-0" />
                <p className="text-sm sm:text-base text-[#001F3F]/90 font-medium">
                  Estes são{" "}
                  <strong className="font-semibold text-[#001F3F]">resultados pretendidos</strong>{" "}
                  pela iniciativa, ainda sujeitos à avaliação e validação.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: UMA IDEIA QUE ESTÁ GANHANDO VIDA */}
        <section
          aria-labelledby="ideia-heading"
          className="py-16 md:py-28 px-4 sm:px-6 md:px-8 lg:px-16 bg-[#001F3F] text-white relative overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-repeat opacity-5"
            style={{ backgroundImage: `url('${images.cubes}')` }}
          />
          <div data-chica-reveal className="container mx-auto max-w-5xl relative z-10">
            <div className="space-y-8 text-center">
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-[#E68A6E]">
                Em desenvolvimento
              </span>

              <h2
                id="ideia-heading"
                className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
              >
                Uma ideia que está ganhando vida
              </h2>

              <div className="max-w-3xl mx-auto space-y-6 text-lg sm:text-xl text-white/90 font-light leading-relaxed">
                <p>
                  A Chica está em desenvolvimento e nasce com a proposta de apoiar quem cuida e quem
                  é cuidado em diferentes momentos da jornada de saúde.
                </p>
                <p>
                  É uma iniciativa que une comunicação humanizada e tecnologia para enfrentar um
                  desafio presente em múltiplos pontos de atendimento: fazer com que a informação
                  chegue de um jeito que as pessoas realmente consigam compreender.
                </p>
                <p className="text-base sm:text-lg text-white/80 font-normal pt-2">
                  Seu campo de aplicação abrange hospitais, UPAs, unidades básicas de saúde,
                  clínicas, laboratórios e outros serviços de saúde onde a clareza e o acolhimento
                  são indispensáveis.
                </p>
              </div>

              {/* Manifesto Closing Statements */}
              <div className="mt-12 sm:mt-14 pt-10 sm:pt-12 border-t border-white/15 space-y-5 sm:space-y-6">
                <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#F3A68E] font-medium">
                  “Porque uma prosa é melhor que uma treta.”
                </p>
                <p className="font-serif text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white">
                  CHICA — Mais clareza para quem recebe. Mais tempo para quem cuida.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: CHAMADA DISCRETA PARA CONHECER MAIS */}
        <section
          id="conhecer-mais"
          aria-labelledby="contato-heading"
          className="py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-[#F5F3EF] scroll-mt-20"
        >
          <div className="container mx-auto max-w-5xl">
            <div className="bg-white rounded-2xl p-6 sm:p-10 md:p-14 border border-[#001F3F]/10 shadow-[0_8px_30px_rgba(0,31,63,0.06)]">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                <div className="lg:col-span-7 min-w-0 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9A3E22] block">
                    Diálogo aberto
                  </span>
                  <h2
                    id="contato-heading"
                    className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#001F3F] leading-snug"
                  >
                    Quer conhecer mais sobre a iniciativa?
                  </h2>
                  <p className="text-base sm:text-lg text-[#001F3F]/80 leading-relaxed">
                    Para conversar sobre a proposta da Chica, conhecer o Método Chicarino de
                    Comunicação Humanizada ou dialogar sobre a iniciativa, utilize os canais
                    públicos de contato do site.
                  </p>
                </div>

                <div className="lg:col-span-5 min-w-0 flex flex-col gap-3.5">
                  <a
                    href={whatsappChicaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between gap-3 bg-[#001F3F] text-white px-5 sm:px-6 py-4 rounded-xl font-semibold text-sm sm:text-base hover:bg-[#C85A3A] transition-colors motion-reduce:transition-none shadow-sm"
                  >
                    <span className="inline-flex items-center gap-3 min-w-0">
                      <Phone className="w-5 h-5 text-[#C85A3A] shrink-0" />
                      <span className="truncate">Conversar pelo WhatsApp</span>
                    </span>
                    <ArrowUpRight className="w-5 h-5 shrink-0" />
                  </a>

                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between gap-3 bg-[#F5F3EF] text-[#001F3F] px-5 sm:px-6 py-4 rounded-xl font-medium text-sm sm:text-base hover:bg-[#EBE6DF] transition-colors motion-reduce:transition-none border border-[#001F3F]/10"
                  >
                    <span className="inline-flex items-center gap-3 min-w-0">
                      <Linkedin className="w-5 h-5 text-[#C85A3A] shrink-0" />
                      <span className="truncate">Conhecer o LinkedIn de Filipe</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 shrink-0 text-[#001F3F]/60" />
                  </a>

                  <Link
                    to="/contato"
                    className="inline-flex items-center justify-between gap-3 px-5 sm:px-6 py-3.5 rounded-xl font-medium text-sm text-[#001F3F]/85 hover:text-[#C85A3A] transition-colors motion-reduce:transition-none"
                  >
                    <span>Acessar página de contato do site</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Independent Institutional Footer */}
      <footer className="bg-[#001F3F] text-white pt-14 pb-10 border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="grid md:grid-cols-12 gap-10 pb-10 border-b border-white/10">
            <div className="md:col-span-6 min-w-0 space-y-3">
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="font-serif text-2xl font-bold text-white">CHICA</span>
                <span className="text-xs uppercase tracking-[0.16em] text-[#E68A6E]">
                  Comunicação Humanizada Institucional Conectada ao Acolhimento
                </span>
              </div>
              <p className="text-sm text-white/75 max-w-md leading-relaxed">
                Ferramenta de inteligência artificial em desenvolvimento, criada a partir do Método
                Chicarino de Comunicação Humanizada.
              </p>
            </div>

            <div className="md:col-span-3 min-w-0 space-y-2.5 text-sm">
              <h3 className="font-serif font-bold text-white mb-3 border-l-2 border-[#C85A3A] pl-2.5">
                Navegação do Site
              </h3>
              <ul className="space-y-2 text-white/75">
                <li>
                  <Link
                    to="/"
                    className="hover:text-white transition-colors motion-reduce:transition-none"
                  >
                    Início — Filipe Chicarino
                  </Link>
                </li>
                <li>
                  <Link
                    to="/quem-sou"
                    className="hover:text-white transition-colors motion-reduce:transition-none"
                  >
                    Quem Sou
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solucoes"
                    className="hover:text-white transition-colors motion-reduce:transition-none"
                  >
                    Soluções
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contato"
                    className="hover:text-white transition-colors motion-reduce:transition-none"
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            <div className="md:col-span-3 min-w-0 space-y-2.5 text-sm">
              <h3 className="font-serif font-bold text-white mb-3 border-l-2 border-[#C85A3A] pl-2.5">
                Canais Públicos
              </h3>
              <ul className="space-y-2.5 text-white/75">
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#C85A3A] shrink-0" />
                  <a
                    href="tel:+5527981178654"
                    className="hover:text-white transition-colors motion-reduce:transition-none"
                  >
                    (27) 98117-8654
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#C85A3A] shrink-0" />
                  <span>Espírito Santo - Brasil</span>
                </li>
              </ul>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de Filipe Chicarino"
                  className="bg-white/10 p-2.5 rounded-lg hover:bg-[#C85A3A] transition-colors motion-reduce:transition-none"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de Filipe Chicarino"
                  className="bg-white/10 p-2.5 rounded-lg hover:bg-[#C85A3A] transition-colors motion-reduce:transition-none"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 text-center sm:text-left">
            <p>© {currentYear} Filipe Chicarino. Todos os direitos reservados.</p>
            <p className="font-serif italic text-white/75">
              CHICA — Mais clareza para quem recebe. Mais tempo para quem cuida.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
