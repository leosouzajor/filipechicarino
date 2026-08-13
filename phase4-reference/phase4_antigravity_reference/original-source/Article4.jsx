import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PullQuote from '@/components/PullQuote';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Article4 = () => {
  return (
    <>
      <Helmet>
        <title>A Reunião Fantasma: você está presente ou apenas conectado? | Filipe Chicarino</title>
        <meta name="description" content="92% dos profissionais admitem realizar outras tarefas durante uma reunião online" />
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
                28 Mar 2026
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                4 min de leitura
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#001F3F] font-serif mb-6 leading-tight">
              A Reunião Fantasma: você está presente ou apenas conectado?
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-600 font-light mb-10 leading-relaxed border-l-4 border-[#C85A3A] pl-6">
              92% dos profissionais admitem realizar outras tarefas durante uma reunião online
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
                Antes de entrar na pauta de hoje, uma pergunta honesta: enquanto você lê este texto, quantas abas estão abertas no seu navegador? Quantas notificações de WhatsApp já brilharam no seu celular? Se você estiver em uma reunião por vídeo agora, com a câmera desligada, você está realmente lá ou é apenas uma foto estática ocupando espaço na tela?
              </p>
              
              <p className="mb-6">
                Percebo que temos atualmente um "novo normal". Por exemplo, entro em uma sala para falar com um colega e percebo que ele está em uma reunião online, com fones de ouvido, mas gesticulando para resolver um problema físico e acenando para mim ao mesmo tempo. Naquele momento, a reunião que acontecia nos fones dele era apenas um ruído de fundo. Ele estava conectado, mas não estava presente.
              </p>

              <h2 className="text-2xl font-bold text-[#001F3F] mt-10 mb-4 font-serif">A ilusão da onipresença</h2>
              
              <p className="mb-6">
                A pandemia acelerou a cultura das reuniões virtuais, mas também oficializou a Reunião Fantasma. Acreditamos piamente na mentira da multitarefa. No entanto, os indicadores mostram o custo dessa distração. O <strong>Work Trend Index</strong> da <strong>Microsoft</strong> revela que cerca de <strong>68%</strong> dos trabalhadores não têm tempo de foco suficiente e acabam sucumbindo ao "<strong>multitasking</strong>", a prática de tentar realizar duas ou mais atividades simultaneamente ou alternar rapidamente entre elas. O resultado? Uma queda de até <strong>40%</strong> na produtividade cognitiva.
              </p>

              <p className="mb-6">
                O prejuízo não é apenas de tempo; é de inteligência estratégica. Quando <strong>92%</strong> dos profissionais admitem realizar outras tarefas durante uma reunião (segundo dados analisados pela <strong>Harvard Business Review</strong>), a consequência é o retrabalho. Toda reunião deveria gerar uma consequência: uma decisão, um plano de ação, um compromisso. Se você "estava, mas não estava", você perdeu a nuance, o tom de voz do cliente e os detalhes do combinado. O ruído de amanhã nasce exatamente do silêncio ausente de hoje.
              </p>

              <h2 className="text-2xl font-bold text-[#001F3F] mt-10 mb-4 font-serif">O custo biológico da ausência</h2>
              
              <p className="mb-6">
                A ciência explica por que isso nos esgota. O Stanford Virtual Human Interaction Lab estuda a "<strong>Fadiga do Zoom</strong>" e aponta que, sem o contato visual e a interação real, a sincronia interpessoal é quebrada. Quando você desliga a câmera e foca em outra demanda, seu cérebro para de processar a intenção emocional do grupo. Você consome a informação como um dado bruto, mas não se compromete com ela como um parceiro de projeto.
              </p>

              <p className="mb-6">
                No fim do dia, todos estão exaustos, mas a sensação é de que nada foi decidido. Precisamos de mais uma reunião para explicar o que foi "falado" na primeira. Se o assunto exige uma reunião, exige também 100% de atenção.
              </p>

              <PullQuote>
                A câmera desligada não esconde a sua ausência; ela apenas evidencia a falta de conexão.
              </PullQuote>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default Article4;