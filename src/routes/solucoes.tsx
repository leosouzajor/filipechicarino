import { createFileRoute } from '@tanstack/react-router';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import EditorialSection from '@/components/site/EditorialSection';
import { motion } from 'framer-motion';
import { Play, Shield, Heart } from 'lucide-react';
import { images } from '@/lib/assets';

export const Route = createFileRoute('/solucoes')({
  head: () => ({
    meta: [
      { title: "Soluções Corporativas | Filipe Chicarino" },
      {
        name: "description",
        content: "Palestras, treinamentos, mentoria e consultoria para transformar o ambiente corporativo com Comunicação Não Violenta e gestão de riscos psicossociais.",
      },
      { property: "og:title", content: "Soluções Corporativas | Filipe Chicarino" },
      { property: "og:description", content: "Palestras, treinamentos, mentoria e consultoria para transformar o ambiente corporativo com Comunicação Não Violenta e gestão de riscos psicossociais." },
      { property: "og:url", content: "https://filipechicarino.com.br/solucoes" },
      { property: "og:image", content: images.hero },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: images.hero },
    ],
    links: [
      { rel: "canonical", href: "https://filipechicarino.com.br/solucoes" }
    ]
  }),
  component: SolucoesPage,
});

function SolucoesPage() {
  const storyVideos = [
    {
      category: "WEBSÉRIE",
      title: "Ser Senac / <strong>Senac ES</strong>",
      url: "https://youtu.be/AVHyTPrsLjU",
      image: "https://img.youtube.com/vi/AVHyTPrsLjU/maxresdefault.jpg"
    },
    {
      category: "DOCUMENTÁRIO",
      title: "COVID no Brasil - Memórias da Resistência Capixaba / <strong>Organização Colibri</strong>",
      url: "https://youtu.be/d1vLeM7r8nk",
      image: "https://img.youtube.com/vi/d1vLeM7r8nk/maxresdefault.jpg"
    },
    {
      category: "INSTITUCIONAL",
      title: "Giro Fortlev / <strong>Fortlev</strong>",
      url: "https://youtu.be/2na7fAnhjVg",
      image: "https://img.youtube.com/vi/2na7fAnhjVg/maxresdefault.jpg"
    },
    {
      category: "COMUNICAÇÃO INTERNA",
      title: "Novembro Azul / <strong>Fortlev</strong>",
      url: "https://www.youtube.com/watch?v=4k3H035FUxs",
      image: "https://img.youtube.com/vi/4k3H035FUxs/maxresdefault.jpg"
    },
    {
      category: "INSTITUCIONAL",
      title: "Telhas coloniais / <strong>AFORT</strong>",
      url: "https://www.youtube.com/watch?v=gTl6FXBX2oc",
      image: "https://img.youtube.com/vi/gTl6FXBX2oc/maxresdefault.jpg"
    },
    {
      category: "INSTITUCIONAL",
      title: "Mensagem de Natal / <strong>AFORT</strong>",
      url: "https://www.youtube.com/watch?v=m_Tdsl8q5T0",
      image: "https://img.youtube.com/vi/m_Tdsl8q5T0/maxresdefault.jpg"
    }
  ];

  const editorialTextStyle = "prose prose-lg text-gray-700 leading-[1.8] font-light max-w-prose space-y-8";

  return (
    <div className="min-h-screen bg-[#F5F3EF]">
      <Header />
      
      {/* HERO SECTION */}
      <section className="pt-40 pb-24 px-4 md:px-8 lg:px-16 bg-[#001F3F] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-repeat opacity-5" style={{ backgroundImage: `url('${images.cubes}')` }}></div>
        <div className="container mx-auto max-w-7xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif mb-8">Nossas Soluções</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Caminhos para reconstruir conexões reais e devolver a humanidade aos processos e narrativas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1: O Humanizador de Processos e Narrativas */}
      <EditorialSection
        title="O Humanizador de Processos e Narrativas"
        subtitle="Metodologia"
        className="bg-white border-b border-gray-100"
      >
        <div className={`${editorialTextStyle} text-left`}>
          <h3 className="text-xl font-bold text-[#C85A3A] mb-6">Filipe Chicarino</h3>
          <p className="text-xl leading-relaxed">
            Minha atuação vai além da técnica; é um compromisso com a reconstrução do diálogo. Através da <strong className="text-[#001F3F] font-semibold">Metodologia Humanizar</strong>, utilizo a <strong className="text-[#001F3F] font-semibold">CNV</strong> (Comunicação Não Violenta) e a <strong className="text-[#001F3F] font-semibold">escuta ativa</strong> para <strong className="text-[#001F3F] font-semibold">reumanizar a cultura organizacional</strong>, substituindo o ruído pela <strong className="text-[#001F3F] font-semibold">boa prosa</strong>.
          </p>
        </div>
      </EditorialSection>

      {/* SECTION 2: Palestras */}
      <EditorialSection
        title="Palestras"
        subtitle="Inspiração e Conhecimento"
        image={images.solucoes1}
        imageAlt="Palestras Corporativas"
        buttonText="Solicitar palestra"
        buttonLink="/#contato"
        className="bg-[#F5F3EF]"
      >
        <p className="text-xl font-serif italic text-[#001F3F] mb-6">"Tudo é sobre gente."</p>
        <div className={editorialTextStyle}>
          <p>
            <strong>Filipe Chicarino utiliza a comunicação humanizada e não violenta em palestras e treinamentos, tanto para empresas públicas quanto privadas.</strong> Seu propósito é claro: promover o fortalecimento de vínculos, a melhora no clima organizacional, a resolução de conflitos, a valorização da empatia, e a prevenção da saúde mental no ambiente de trabalho. Essa abordagem estratégica, intrinsecamente ligada à comunicação não violenta, impulsiona diretamente a criatividade e a produtividade.
          </p>
          <p>
            <strong>Com quase 20 anos de experiência nas áreas de comunicação, jornalismo e docência, Filipe traz uma perspectiva única e aprofundada para os desafios comunicacionais contemporâneos.</strong> Ele transforma conceitos em narrativas vivas e exemplos reais, utilizando o poder do storytelling para criar engajamento e uma mudança de perspectiva duradoura. Sua metodologia vai além da teoria, inspirando os participantes a aplicarem os princípios da Comunicação Humanizada em cada interação.
          </p>
          <p>
            <strong>As palestras capacitam equipes e lideranças a experimentarem transformações palpáveis, resultando em uma cultura que valoriza a escuta ativa, a conexão autêntica e o bem-estar coletivo.</strong> É a arte de conectar, inspirar e fazer-se entender, fortalecendo relações e impulsionando o desempenho de forma significativa. Investir em uma palestra de Filipe Chicarino é escolher uma abordagem focada em pessoas, que integra a solidez de sua experiência para resolver problemas de comunicação e promover um ambiente saudável.
          </p>
        </div>
      </EditorialSection>

      {/* SECTION 3: Treinamentos */}
      <EditorialSection
        title="Treinamentos"
        subtitle="Desenvolvimento e Prática"
        image={images.solucoes2}
        imageAlt="Treinamento de Equipes"
        buttonText="Solicitar treinamento"
        buttonLink="/#contato"
        reverse={true}
        className="bg-white"
      >
        <div className={editorialTextStyle}>
          <p>
            <strong>Os treinamentos de Filipe Chicarino são a materialização prática da comunicação humanizada, indo além da teoria para gerar impacto real e duradouro.</strong> Diferente de abordagens padronizadas, cada treinamento é cuidadosamente personalizado para as dores e realidades específicas de cada instituição. Através de um processo de escuta ativa e diagnóstica, Filipe desenha soluções sob medida, capacitando equipes e lideranças de empresas públicas e privadas a fortalecer vínculos, resolverem conflitos de forma construtiva, cultivarem a empatia e contribuírem ativamente para a prevenção da saúde mental e a melhoria contínua do clima organizacional.
          </p>
          <p>
            <strong>Filipe Chicarino guia os participantes em uma jornada imersiva, onde o storytelling serve como ferramenta para contextualizar os aprendizados e tornar os conceitos palpáveis.</strong> É um convite para desatar os nós da comunicação, identificar e gerenciar gatilhos comportamentais, e transformar a interação em uma poderosa ferramenta de produtividade e bem-estar.
          </p>
          <p>
            <strong>O resultado é um impacto direto na produtividade, criatividade e na capacidade de liderança, construindo um ambiente de trabalho mais colaborativo, transparente e humano.</strong> Os treinamentos de Filipe Chicarino são um investimento estratégico no capital humano de sua organização, transformando cada membro em um agente de mudança para uma cultura de comunicação mais eficaz e empática.
          </p>
        </div>
      </EditorialSection>

      {/* SECTION 4: Histórias Humanizadas */}
      <section className="py-24 px-4 md:px-8 lg:px-16 bg-[#001F3F] text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 mb-16 items-start">
            <div>
              <span className="text-[#C85A3A] font-bold tracking-widest text-sm uppercase mb-4 block">Audiovisual</span>
              <h2 className="text-4xl lg:text-5xl font-bold font-serif mb-6 leading-tight">Histórias Humanizadas</h2>
              <div className="w-20 h-1 bg-[#C85A3A] mb-8"></div>
              <div className="mt-8">
                <img 
                  src={images.solucoes3} 
                  alt="Filipe sentado em escada segurando clapperboard de filme" 
                  className="w-full h-auto md:h-full rounded-xl shadow-lg object-contain md:object-cover aspect-[4/3] md:aspect-auto" 
                />
              </div>
            </div>
            <div className="prose prose-lg text-gray-300 font-light leading-[1.8] max-w-prose space-y-8">
              <p>
                <strong>Hoje não se conta mais vantagens, se conta histórias.</strong> Filipe Chicarino utiliza a comunicação humanizada e sensível na produção audiovisual para ir além do convencional. Sua intenção é clara: provocar reflexão e sentimentos através de narrativas leves, sensíveis, empáticas, criativas e profundamente humanas. Com isso, ele traduz os valores das marcas em emoções, cultivando um sentimento de pertencimento e fortalecendo as conexões. Essa abordagem estratégica, ligada à perspectiva humana, impulsiona diretamente a conexão emocional e o engajamento do público.
              </p>
              <p>
                <strong>Como especialista na produção de webséries e documentários, Filipe Chicarino possui um portfólio robusto que ilustra sua habilidade em transformar complexidades em narrativas acessíveis e envolventes.</strong> Entre suas produções de destaque, encontram-se o projeto Gotas no Sertão, documentário produzido com a Fortlev Brasil; Ser Senac, websérie produzida com o Senac Espírito Santo; COVID no Brasil: memórias da resistência capixaba, produzido com a Organização Colibri em parceria com Governo do Espírito Santo e 10 anos, 10 histórias, produzido com o Instituto Água Viva. Investir em produções audiovisuais com Filipe Chicarino é escolher uma abordagem focada em pessoas, que integra a solidez de sua experiência para resolver desafios de comunicação, amplificar mensagens relevantes e promover narrativas que geram impacto e conexão verdadeiros.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {storyVideos.map((video, idx) => (
              <a
                key={idx}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative rounded-xl overflow-hidden shadow-lg aspect-video mb-4 border border-white/10">
                  <img
                    src={video.image}
                    alt={video.title.replace(/<[^>]*>?/gm, '')}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-[#C85A3A] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className="text-left space-y-1">
                  <span className="text-xs font-bold text-[#C85A3A] uppercase tracking-wider">{video.category}</span>
                  <h3 
                    className="font-medium text-lg font-serif group-hover:text-[#C85A3A] transition-colors"
                    dangerouslySetInnerHTML={{ __html: video.title }}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: NR-1 */}
      <section className="py-24 px-4 md:px-8 lg:px-16 bg-[#F5F3EF]">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 md:p-14 lg:p-20 space-y-8 flex flex-col justify-center">
                <div>
                  <span className="inline-block bg-[#001F3F] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">DESTAQUE</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] font-serif mb-2">Comunicação humanizada e NR-1</h2>
                  <p className="text-[#C85A3A] font-medium text-lg italic">O imperativo legal e o risco real</p>
                </div>

                <div className="prose text-gray-700 leading-[1.8] font-light max-w-prose space-y-8">
                  <p>
                    <strong>A Norma Regulamentadora 01 (NR-1), atualizada pela Portaria MTE nº 1.419/2024, exige que sua empresa inclua Riscos Psicossociais (como estresse, burnout e assédio) no Gerenciamento de Riscos Ocupacionais (GRO), com o mesmo rigor dos riscos físicos e químicos.</strong> A má comunicação, ruídos internos e ambientes de trabalho "frios" são vetores críticos que intensificam esses riscos, expondo a organização a sanções legais, autuações e sérios danos à reputação.
                  </p>
                  <p>
                    <strong>Em minha palestra "Tudo é sobre gente", uso princípios da Comunicação Humanizada e Não Violenta para capacitar sua equipe e liderança a responderem proativamente à NR-1.</strong> Esta norma, consolidada pela Portaria MTE nº 1.419/2024, exige que sua empresa identifique e mitigue Riscos Psicossociais (estresse, burnout, assédio) com o mesmo rigor dos riscos físicos. Minha abordagem vai diretamente ao ponto: uma comunicação eficaz é a primeira linha de defesa contra esses riscos.
                  </p>
                  <p>
                    <strong>A mudança da NR 1 provocada pelos altos indicadores de afastamentos profissionais trouxe consigo a necessidade de mudança de comportamento das empresas.</strong> Agora, é obrigatório avaliar e mitigar Riscos Psicossociai com o mesmo rigor dos riscos físicos. Ignorar essa exigência não é uma opção; cuidar e investir na saúde mental dos colaboradores é um imperativo legal e estratégico para qualquer organização. A má comunicação é um dos protagonistas nas "tretas" cultivadas pelo time e também no adoecimento no ambiente corporativo, elevando os riscos psicossociais e gerando conflitos que afetam a saúde mental. Com princípios e conceitos da Comunicação Humanizada e Não Violenta a palestra "Tudo é sobre gente!" usa ferramentas para fortalecer vínculos, resolver conflitos construtivamente e valorizar a empatia. Com isso, sua equipe desenvolve um clima organizacional mais saudável, transformando ruídos em diálogo e garantindo um ambiente que previne o esgotamento e promove o bem-estar.
                  </p>
                  <p>
                    <strong>Minha palestra "Saúde Mental no Trabalho: Da NR-1 à Prevenção Ativa" oferece a solução.</strong> Foco em Comunicação Humanizada e Não Violenta, capacito equipes e lideranças a identificar, avaliar e mitigar os Riscos Psicossociais – como sobrecarga de trabalho e ambientes tóxicos – através do diálogo empático e da escuta ativa. É a ferramenta essencial para o PGR (Programa de Gerenciamento de Riscos) e para a participação efetiva dos trabalhadores.
                  </p>
                  <p>
                    <strong>Resultados que Protegem e Potencializam:</strong> Os resultados são tangíveis: sua empresa alcançará o compliance proativo com a NR-1, fortalecendo a conexão com a LDRT (Lista de Doenças Relacionadas ao Trabalho) e evitando autuações. Além da segurança jurídica, você verá a redução de conflitos, absenteísmo e turnover, impulsionando a produtividade e construindo uma cultura organizacional que valoriza a saúde mental e o bem-estar coletivo – transformando um desafio em um diferencial estratégico duradouro.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  <div className="bg-[#F5F3EF] p-6 rounded-lg flex items-start gap-4 transition-all hover:bg-[#F5F3EF]/70">
                    <Shield className="w-8 h-8 text-[#C85A3A] mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#001F3F] text-base mb-1">Segurança Jurídica</h4>
                      <p className="text-sm text-gray-600">Conformidade com normas trabalhistas</p>
                    </div>
                  </div>
                  <div className="bg-[#F5F3EF] p-6 rounded-lg flex items-start gap-4 transition-all hover:bg-[#F5F3EF]/70">
                    <Heart className="w-8 h-8 text-[#C85A3A] mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#001F3F] text-base mb-1">Saúde Mental</h4>
                      <p className="text-sm text-gray-600">Prevenção de riscos psicossociais</p>
                    </div>
                  </div>
                </div>

                <a href="/#contato" className="inline-flex items-center justify-center gap-2 border-2 border-[#001F3F] text-[#001F3F] px-8 py-4 rounded-lg font-semibold hover:bg-[#001F3F] hover:text-white transition-all duration-300 w-full md:w-auto mt-6">
                  Levar essa palestra para minha empresa
                </a>
              </div>
              
              <div className="relative bg-[#001F3F] min-h-[400px] lg:min-h-full flex items-center justify-center p-10 overflow-hidden">
                <div className="absolute inset-0 bg-repeat opacity-10" style={{ backgroundImage: `url('${images.cubes}')` }}></div>
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#C85A3A] rounded-full filter blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C85A3A] rounded-full filter blur-[100px] opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
                
                <div className="relative z-10 text-center text-white space-y-8 max-w-sm">
                  <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto border border-white/10 backdrop-blur-sm">
                    <Shield className="w-10 h-10 text-[#C85A3A]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-serif mb-4">Proteja sua equipe</h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      O assédio moral e sexual são riscos ocupacionais que devem ser gerenciados. Nossa palestra aborda este tema com seriedade, empatia e foco na prevenção.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
