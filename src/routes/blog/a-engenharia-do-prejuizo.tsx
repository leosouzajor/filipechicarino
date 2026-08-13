import { createFileRoute, Link } from '@tanstack/react-router';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { images } from '@/lib/assets';

export const Route = createFileRoute('/blog/a-engenharia-do-prejuizo')({
  head: () => ({
    meta: [
      { title: "A engenharia do prejuízo | Filipe Chicarino" },
      {
        name: "description",
        content: "O impacto do vício em apostas virtuais na saúde pública e na economia do Brasil",
      },
    ],
  }),
  component: Article5,
});

function Article5() {
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
              05 Ago 2026
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              5 MIN DE LEITURA
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#001F3F] font-serif mb-6 leading-tight">
            A engenharia do prejuízo
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-600 font-light mb-10 leading-relaxed border-l-4 border-[#C85A3A] pl-6">
            O impacto do vício em apostas virtuais na saúde pública e na economia do Brasil
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

          <div className="mb-12 rounded-xl overflow-hidden shadow-sm">
            <img 
              src={images.artigoEngenhariaDoPrejuizo} 
              alt="Mãos segurando smartphone com jogo de apostas" 
              className="w-full h-auto object-cover max-h-[500px]"
            />
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-[2] font-light">
            <p className="mb-8">
              Ainda sou capaz de lembrar o cheiro de fumo impregnado no tecido aveludado e o barulho estridente das máquinas caça-níqueis nos inúmeros bingos clandestinos que cobri na época em que trabalhava como repórter de TV. A memória também guarda com clareza o perfil de quem frequentava aqueles espaços insalubres: em sua maioria, pessoas acima dos 60 anos, aposentadas, atraídas pela promessa de convivência e, principalmente, pela ilusão do ganho fácil.
            </p>

            <p className="mb-8">
              As operações policiais eram um retrato do constrangimento. As pessoas deixavam o local de cabeça baixa, escondendo o rosto como se tivessem cometido um grande crime, quando, na verdade, eram vítimas de um esquema desenhado para explorar a sua solidão e o seu bolso.
            </p>

            <h2 className="text-2xl font-bold text-[#001F3F] mt-12 mb-6 font-serif">Agora é outro patamar</h2>
            
            <p className="mb-8">
              O tempo passou, a maioria dos bingos físicos desapareceu e a aposta mudou de patamar, parafraseando Bruno Henrique (e qualquer semelhança aqui não é mera coincidência). O jogo migrou dos espaços mofados com cheiro de tabaco para a palma de nossas mãos. Se antes o apostador precisava ir ao caixa eletrônico e se deslocar escondido, hoje a ilusão está a um clique, a um PIX de distância, na intimidade do lar. O que ocupava as páginas policiais agora domina as redes sociais, a programação da TV, o futebol e a rotina do país.
            </p>

            <p className="mb-8">
              A aposta não apenas migrou para o digital: ela foi higienizada, gourmetizada e passou a ser vendida como entretenimento leve por pessoas com alto poder de influência, que conversam diariamente com milhões de brasileiros. A grande perversidade desse novo modelo está na mudança da narrativa. A aposta deixou de ser marginalizada e passou a ser vendida como "estilo de vida" e "investimento". Cria-se a falsa ilusão da meritocracia do palpite e do "aposta com responsabilidade".
            </p>

            <h2 className="text-2xl font-bold text-[#001F3F] mt-12 mb-6 font-serif">A epidemia silenciosa</h2>
            
            <p className="mb-8">
              Por aqui, durante a Copa do Mundo de 2026, a verdadeira disputa pelos holofotes não ficou restrita às transmissões da TV aberta ou do streaming. A grande guerra foi travada pelas dezenas de casas de apostas que brigavam, segundo a segundo, não apenas pela atenção do torcedor, mas pelo seu dinheiro. O resultado? Mais de 75 milhões de pessoas fizeram ao menos uma aposta durante o torneio. Um em cada três brasileiros colocou a mão no bolso para financiar essa engrenagem durante o mundial. Foram movimentados mais de R$990 milhões de reais, quase um bilhão em 39 dias de Copa. Números alarmantes que carecem urgentemente de atenção, discussão e ação.
            </p>

            <h2 className="text-2xl font-bold text-[#001F3F] mt-12 mb-6 font-serif">Redução de danos e estímulos</h2>
            
            <p className="mb-8">
              Como pesquisador e profissional da comunicação, enxergo que conter essa escalada exige encarar o problema por dois caminhos estruturais.
            </p>

            <p className="mb-8">
              O primeiro é o banimento irrestrito da publicidade, semelhante ao case mais bem sucedido de saúde pública brasileira: o combate ao tabagismo. No final dos anos 1980, quando o cigarro era embalado pelo glamour da TV e do esporte a motor, cerca de 35% dos adultos brasileiros eram fumantes. A virada veio no ano 2000, quando uma mudança normativa cortou o cordão umbilical da propaganda de tabaco nas mídias de massa.
            </p>

            <p className="mb-8">
              A matemática foi simples e eficaz: ao estancar o estímulo publicitário, reduziu o número de novos adeptos e a curva de fumantes despencou para menos de 10% da população adulta. A lei não mudou apenas os números, ela salvou vidas e transformou a relação do país com o tabaco.
            </p>

            <p className="mb-8">
              No caso da propaganda de apostas, a engrenagem é idêntica. Assim como a indústria do tabaco, as casas de apostas trabalham estimulando o desejo e o prazer da recompensa imediata. A dopamina liberada no cérebro de quem foca na fumaça não difere daquela de quem aguarda o resultado da roleta do tigrinho.
            </p>

            <p className="mb-8">
              O que torna tudo isso ainda mais grave é a forma agressiva e sem trégua com que o jogo foi empurrado para dentro da nossa rotina. As propagandas de apostas tem uma presença quase onipresente. Elas parecem estar em todo lugar ao mesmo tempo. É um bombardeio contínuo de estímulos, feito sob medida para manter a mente em alerta e o desejo aceso.
            </p>

            <p className="mb-8">
              O reflexo dessa superexposição midiática se dá em um efeito dominó assustador. E a primeira conta a chegar é na saúde pública: dados do INSS mostram um salto de mais de 2.300% nos pedidos de afastamento do trabalho por conta da ludopatia, o vício compulsivo em jogar. 80% dessas licenças médicas atingem jovens entre 18 e 39 anos, exatamente no auge de sua capacidade produtiva. Na rede pública de saúde, os atendimentos no SUS por dependência de apostas já se multiplicaram por vinte. E esses números são só a ponta do iceberg: atrás da explosão de quadros de ansiedade, depressão e, no limite mais doloroso da dívida, de pessoas tirando a própria vida.
            </p>

            <p className="mb-8">
              O vício em apostas tem impactado diretamente a economia, um impacto silencioso, é verdade, já que quem ganha com as apostas frequentemente tem limites editoriais para falar sobre elas. No entanto, a conta do desastre não dá pra esconder. Dados do setor varejista mostram que 23% dos apostadores deixaram de comprar roupas, 19% reduziram despesas no supermercado e 11% têm negligenciado a própria saúde, deixando de comprar medicamentos essenciais.
            </p>

            <p className="mb-8">
              O segundo caminho exige a construção urgente de um ecossistema de prevenção, acolhimento e cuidado integral. O assunto não pode mais ser empurrado para debaixo do tapete, precisa ser debatido abertamente.
            </p>

            <p className="mb-8">
              As empresas precisam criar e/ou aprimorar espaços de escuta para acolher colaboradores que estão imersos nesse sofrimento silencioso enxergando o problema como questão de saúde e suporte humano. Esse debate precisa ocupar os espaços religiosos, independentemente da crença, oferecendo acolhimento em vez de condenação moral. Precisa estar no dia a dia de escolas e universidades, preparando jovens e famílias para enxergarem as armadilhas por trás da tela.
            </p>

            <p className="mb-8">
              E, acima de tudo, o poder público precisa preparar pessoas e estruturar espaços para receber quem perdeu o chão. Um bom exemplo vem do Governo do Estado do Espírito Santo que, desde o começo de 2026, tem oferecido, pelo Programa Rede Abraço, atendimento multiprofissional, gratuito e humanizado focado na dependência em apostas virtuais e na ludopatia.
            </p>

            <p className="mb-8">
              Se na virada do milênio o Brasil teve a coragem de banir o cigarro da TV para proteger a saúde de uma geração, precisa ter hoje a mesma firmeza para estancar a farra das propagandas de apostas. O futuro das famílias não pode continuar servindo de combustível para a tradicional ilusão do ganho fácil.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
