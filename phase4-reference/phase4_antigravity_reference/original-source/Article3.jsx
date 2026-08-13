import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PullQuote from '@/components/PullQuote';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Article3 = () => {
  return (
    <>
      <Helmet>
        <title>A Clickzação da Vida | Filipe Chicarino</title>
        <meta name="description" content="O que o filme de Adam Sandler nos ensinou (e ignoramos)" />
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
                22 Mar 2026
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                7 min de leitura
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#001F3F] font-serif mb-6 leading-tight">
              A Clickzação da Vida
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-600 font-light mb-10 leading-relaxed border-l-4 border-[#C85A3A] pl-6">
              O que o filme de Adam Sandler nos ensinou (e ignoramos)
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
                Antes de começar a leitura deste artigo, é preciso que se faça uma pequena reflexão: você tem o costume de acelerar, por exemplo, as mensagens em áudio que chegam diariamente no seu Whatsapp? Se a resposta for sim, saiba que você faz parte de uma maioria preocupante. Bora para a prosa?
              </p>

              <p className="mb-6">
                No filme Click (2006), o personagem de Adam Sandler recebe um controle remoto universal capaz de acelerar as partes "tediosas" de sua rotina. Uma briga de casal? Acelera! Um jantar de família monótono? Click! Uma reunião de trabalho arrastada? Avança para a promoção. O que parecia o sonho de produtividade de qualquer profissional moderno, termina como um pesadelo: ele acorda no fim da vida, percebendo que, ao acelerar o tempo, ele deixou de existir nos momentos que realmente importavam. Como esse filme envelheceu bem…
              </p>

              <p className="mb-6">
                O que era ficção científica e comédia há 20 anos, tornou-se o nosso "novo normal" silencioso e acelerado. Hoje, não precisamos de um controle remoto mágico, nós já temos o botão para acelerar todas as vozes que quisermos.
              </p>

              <p className="mb-6">
                Será que o nosso comportamento está padecendo do fenômeno da <strong>Clickzação</strong>? Ou seja, estamos repetindo diariamente o mesmo erro de Michael Newman? A vida tem imitado a arte? As minhas dúvidas se sustentam na pseudo economia de tempo proporcionado pela aceleração desenfreada de mensagens. Por que acreditamos piamente nisso?
              </p>

              <h2 className="text-2xl font-bold text-[#001F3F] mt-10 mb-4 font-serif">O custo invisível do botão "2x"</h2>
              
              <p className="mb-6">
                Não se trata apenas de uma percepção subjetiva, os indicadores confirmam o diagnóstico. Pesquisas de comportamento digital mostram que a maioria dos usuários já não consome áudios na velocidade real. Um levantamento feito recentemente pela <strong>YouGov</strong>, uma das maiores e mais respeitadas empresas de pesquisa de mercado e análise de dados, revelou que mais de <strong>60%</strong> dos usuários de aplicativos de mensagens utilizam a função de aceleração regularmente.
              </p>

              <p className="mb-6">
                No entanto, a ciência alerta que essa economia de segundos tem um custo cognitivo alto. Um estudo da Universidade da Califórnia (<strong>UCLA</strong>), publicado em 2022, revelou que, embora o cérebro consiga processar informações em velocidade dobrada, a capacidade de realizar inferências, ou seja, entender as entrelinhas e o contexto, tende a despencar.
              </p>

              <p className="mb-6">
                E não para por aí. Para que a memória de longo prazo se consolide, o cérebro precisa de pausas. Ao deletar os silêncios, as hesitações e a melodia da voz humana, estamos transformando conhecimento em apenas "dados brutos". O dado entra, mas a conexão não fica. A gente ouve, mas não escuta.
              </p>

              <h2 className="text-2xl font-bold text-[#001F3F] mt-10 mb-4 font-serif">Aceleramos o áudio, atrofiamos a escuta</h2>
              
              <p className="mb-6">
                No meio corporativo, a "<strong>Clickzação</strong>" é um baita ruído de comunicação. Se eu treino minha mente para "engolir" a fala do outro no aplicativo, como terei a paciência e a presença necessárias para uma escuta ativa em uma reunião estratégica ou em um feedback sensível? Acelerar e ignorar se tornam maus hábitos.
              </p>

              <p className="mb-6">
                Quando aceleramos a voz de alguém, perdemos a <strong>sincronia neuronal</strong>, a base biológica da empatia. Deixamos de ouvir uma pessoa para apenas processar um arquivo. O resultado é uma sociedade de profissionais exaustos, que "ouvem" tudo, mas não compreendem quase nada.
              </p>

              <p className="mb-6">
                A Comunicação Humanizada e Não Violenta pode ser o antídoto para esse controle remoto desregulado. É o resgate do tempo da prosa. Porque, no fim das contas, a maior lição de Click continua valendo:
              </p>

              <PullQuote>
                Quem acelera a vida para ganhar tempo, acaba perdendo os encontros que dão sentido à jornada.
              </PullQuote>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default Article3;