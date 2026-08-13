import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PullQuote from '@/components/PullQuote';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Article1 = () => {
  return (
    <>
      <Helmet>
        <title>Empresas precisam enxergar além do crachá | Filipe Chicarino</title>
        <meta name="description" content="O cenário da saúde mental no Brasil, a NR1 e os riscos psicossociais" />
      </Helmet>

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
                10 Mar 2026
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                6 min de leitura
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#001F3F] font-serif mb-6 leading-tight">
              Empresas precisam enxergar além do crachá
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-600 font-light mb-10 leading-relaxed border-l-4 border-[#C85A3A] pl-6">
              O cenário da saúde mental no Brasil, a NR1 e os riscos psicossociais
            </h2>

            <div className="flex items-center gap-3 mb-12 pb-12 border-b border-gray-100">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                <img src="https://horizons-cdn.hostinger.com/c9c44d5a-7b6c-49a2-a669-295003b83b7f/56117ad5fadf793022a65f1ff928e574.jpg" alt="Filipe Chicarino" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="block font-bold text-[#001F3F]">Filipe Chicarino</span>
                <span className="text-sm text-gray-500">Facilitador de Comunicação</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-[1.8] font-light">
              <p className="mb-6">
                Eu escuto falar sobre <strong>Saúde Mental</strong> desde menino. O assunto permeava todos os cômodos da minha casa. Metade da carreira da minha mãe como secretária foi em uma recepção de um consultório psiquiátrico. Quando fecho os olhos, posso enxergar, nitidamente, a minha mãe chegando em casa do trabalho com um semblante cansado e carregado somado a uma tristeza latente no olhar. E esse desgaste todo da <strong>Neusinha</strong> não era sem motivos, ela era, além de secretária, o filtro entre a dor da alma e o profissional que ajudava a curar.
              </p>

              <p className="mb-6">
                Essa vasta experiência da minha mãe na Psiquiatria me fez entender, desde menino, que a dor da alma era democrática e poderia atingir qualquer um e que, a saúde mental, deveria ser assunto em todos os espaços, assim como era dentro da minha casa.
              </p>

              <p className="mb-6">
                Ingenuidade a minha…
              </p>

              <p className="mb-6">
                Desde os meus 24 anos, eu atuo ininterruptamente na Comunicação. Comecei como jornalista de rádio, passei por assessoria de imprensa, pela mídia impressa (jornal e revista) e vivi 12 anos labutando como repórter de TV em diferentes emissoras.
              </p>

              <p className="mb-6">
                Durante esse período nada glamuroso, fui exposto a ameaças de morte, tragédias, dilemas éticos e à complexidade crua das ruas. Vi o pior e o melhor do ser humano através dos meus 4 olhos. E, em meio a tudo isso, eu experimentava um padrão silencioso e, às vezes, até cruel: independente da consequência da pauta, quase nunca me perguntavam “como você está diante disso, Chicarino?”
              </p>

              <p className="mb-6">
                O tempo, a literatura e minhas experiências me mostraram que isso não é um vício negligencial pontual presente apenas nas nas redações de imprensa, a negligência é sistêmica. E a conta chegou para pagar: com juros, correção e afastamentos.
              </p>

              <p className="mb-6">
                O Brasil bateu, pela segunda vez seguida, o recorde com o maior número de afastamentos do trabalho por transtornos mentais em uma década. Segundo o Ministério da Previdência Social, o número de licenças voltou a crescer em 2025. Mais de <strong>meio milhão</strong> foram concedidas por transtornos mentais.
              </p>

              <p className="mb-6">
                É nesse cenário de 'conta alta' que a nova <strong>NR1</strong> ganha fôlego. Ela não é apenas uma norma técnica; é um ultimato. O Gerenciamento de Riscos Ocupacionais agora exige que as empresas olhem para o invisível: os <strong>riscos psicossociais</strong>. Não dá mais para ignorar o impacto do silêncio e da falta de escuta no resultado final.
              </p>

              <p className="mb-6">
                Dentro das empresas, muitas das vezes, este adoecimento psicossocial é alimentado cotidianamente por uma cultura de comunicação ruim. A treta que adoece está conectada a uma instrução mal explicada; à indiferença constante com o outro; à ausência crônica de empatia; em um feedback que nunca chega e na ausência cotidiana de escuta ativa.
              </p>

              <p className="mb-6">
                Soma-se a isso, o peso de um silêncio punitivo quando a meta não é alcançada ou quando a ansiedade é potencializada porque o colaborador precisa “adivinhar” o que está na cabeça do gestor, porque o óbvio nunca é dito.
              </p>

              <p className="mb-6">
                É evidente que o sucesso da mudança de legislação passa pela sensibilidade e boa vontade de líderes e gestores de enxergar a dor e o humano além do crachá. Mas é preciso ressaltar que a responsabilidade de um ambiente de trabalho saudável e sustentável é de todos. Dentro ou fora do ambiente corporativo escutar o outro virou demodê. Estamos trocando a conexão real pelo entretenimento sintético que apenas nos isola. Falamos mais com as IAs do que com quem a gente ama. Num mundo onde todos viraram mestres em oratória, ninguém se escuta mais.
              </p>

              <p className="mb-6">
                Por isso, acredito que a Comunicação Humanizada e Não Violenta pode agir dentro dos ambientes institucionais como um remédio para minimizar as dores crônicas. Ela promove clareza onde há dúvida e empatia onde sobra indiferença. Quando a gente aprende a falar o que precisa ser dito sem anular o outro, a gente não só evita a treta que adoece, mas constrói um ambiente onde a produtividade e a saúde mental possam caminhar juntos.
              </p>

              <PullQuote>
                Em qualquer espaço, uma prosa vai ser sempre melhor que uma treta.
              </PullQuote>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default Article1;