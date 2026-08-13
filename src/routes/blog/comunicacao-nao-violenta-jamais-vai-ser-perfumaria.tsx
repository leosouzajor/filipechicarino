import { createFileRoute, Link } from '@tanstack/react-router';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import PullQuote from '@/components/site/PullQuote';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { images } from '@/lib/assets';

export const Route = createFileRoute('/blog/comunicacao-nao-violenta-jamais-vai-ser-perfumaria')({
  head: () => ({
    meta: [
      { title: "Comunicação não Violenta jamais vai ser perfumaria | Filipe Chicarino" },
      {
        name: "description",
        content: "A Comunicação Não Violenta tira a comunicação do campo do conflito e a coloca no campo da eficiência",
      },
      { property: "og:title", content: "Comunicação não Violenta jamais vai ser perfumaria | Filipe Chicarino" },
      { property: "og:description", content: "A Comunicação Não Violenta tira a comunicação do campo do conflito e a coloca no campo da eficiência" },
      { property: "og:url", content: "https://filipechicarino.com.br/blog/comunicacao-nao-violenta-jamais-vai-ser-perfumaria" },
      { property: "og:image", content: images.unsplashCnv },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: images.unsplashCnv },
    ],
    links: [
      { rel: "canonical", href: "https://filipechicarino.com.br/blog/comunicacao-nao-violenta-jamais-vai-ser-perfumaria" }
    ]
  }),
  component: Article2,
});

function Article2() {
  return (
    <div className="min-h-screen bg-[#F5F3EF]">
      <Header />
      
      <article className="pt-40 pb-24 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto max-w-4xl bg-white p-8 md:p-16 rounded-2xl shadow-sm">
          <Link to="/blog" className="inline-flex items-center text-[#C85A3A] font-semibold mb-8 hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para o Blog
          </Link>
          
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 font-medium uppercase tracking-wide">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              15 Mar 2026
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              5 min de leitura
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#001F3F] font-serif mb-6 leading-tight">
            Comunicação não Violenta jamais vai ser perfumaria
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-600 font-light mb-10 leading-relaxed border-l-4 border-[#C85A3A] pl-6">
            A Comunicação Não Violenta tira a comunicação do campo do conflito e a coloca no campo da eficiência
          </h2>

          <div className="flex items-center gap-3 mb-12 pb-12 border-b border-gray-100">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
              <img src={images.autorAvatar} alt="Filipe Chicarino" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="block font-bold text-[#001F3F]">Filipe Chicarino</span>
              <span className="text-sm text-gray-500">Facilitador de Comunicação</span>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-[1.8] font-light">
            <p className="mb-6">
              Apesar de estar há três anos fora de sala de aula, eu nunca abandonei o lugar da docência. Pra mim, um dos espaços profissionais mais sagrados, já que não formamos apenas futuros profissionais, mas também contribuímos para a formação humana dessas pessoas. Ou, pelo menos, deveríamos contribuir. A experiência como professor me fez compreender, com profundidade, o quão importante é apresentar ao discente um feedback não violento.
            </p>

            <p className="mb-6">
              Digo isso, porque, a depender da qualidade do conteúdo embutido nesse feedback, a consequência poderá seguir por dois caminhos distintos. O estudante pode: se motivar para ser um profissional ainda mais qualificado, ou… ter uma baita dificuldade de acreditar em si mesmo pelo resto da vida. O feedback, pode ser positivo ou negativo, mas nunca pode deixar de ser humano. Humanizar a devolutiva é garantir que a pessoa saia da conversa sabendo o que precisa melhorar, mas se sentindo capaz de fazer isso. É criticar o processo preservando a dignidade do indivíduo. Essa é uma das grandes lições que aprendi sobre <strong>Comunicação Não Violenta</strong>.
            </p>

            <p className="mb-6">
              No meio corporativo, às vezes, esse processo de acolhimento e escuta ativa é tratado como “perfumaria”. E não dá para tratar como “perfumaria” o que deveria estar na mais alta prateleira da cultura organizacional de qualquer empresa, independente do seu tamanho.
            </p>

            <p className="mb-6">
              A <strong>Comunicação Não Violenta</strong> funciona como uma ferramenta de precisão técnica. Ela tira a comunicação do campo do conflito e a coloca no campo da <strong>eficiência</strong>.
            </p>

            <p className="mb-6">
              Se o <strong>feedback humano</strong> é o momento em que preservamos a dignidade e o respeito, existem outros pilares que garantem que essa engrenagem funcione sem triturar pessoas pelo caminho.
            </p>

            <ul className="list-disc pl-6 space-y-4 mb-6">
              <li>
                <strong>Fatos, não julgamentos</strong>: No jornalismo, o fato é o que sustenta a verdade. Na gestão, ele é o que sustenta a cobrança justa. Se um colaborador atrasa o relatório pela quarta vez, dizer que ele é "descompromissado" é um julgamento que gera resistência e negação. O fato é a recorrência: "Este é o quarto atraso em um mês". Contra fatos e dados, não há argumento. O foco deixa de ser o caráter do profissional e passa a ser o comportamento que precisa de correção imediata. O fato isola o problema e coloca a responsabilidade no colo de quem deve resolver.
              </li>
              <li>
                <strong>O compromisso com a clareza</strong>: Muitas "tretas" corporativas nascem da preguiça de dizer o óbvio. O gestor espera que o time adivinhe expectativas. <strong>Clareza</strong> é respeito. O óbvio precisa ser verbalizado de forma direta para reduzir a ansiedade e evitar o erro por suposição.
              </li>
              <li>
                <strong>Escuta Ativa como inteligência de dados</strong>: Ouvir não é passividade; é colheita de informação. Quando você pratica a escuta ativa, você entende a causa raiz do problema antes de disparar uma ordem. É trocar o monólogo autoritário por uma prosa de alinhamento que gera solução real.
              </li>
              <li>
                <strong>Necessidade gera Responsabilidade</strong>: Toda cobrança tem uma necessidade por trás. Quando o líder para de dar ordens secas e começa a expressar a necessidade do negócio: "precisamos de agilidade para garantir a entrega do cliente", ele convida o colaborador para ser parceiro do resultado, e não apenas um cumpridor de tarefas.
              </li>
            </ul>

            <p className="mb-6">
              A <strong>Comunicação Não Violenta</strong> é o que garante que o resultado apareça sem que as pessoas desapareçam durante o processo. É estratégia pura.
            </p>

            <PullQuote>
              Afinal, uma prosa é sempre melhor que uma treta.
            </PullQuote>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
