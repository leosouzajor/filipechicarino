/**
 * Referências centrais das imagens originais do site (hospedadas no CDN da Lovable).
 * Mapeamento arquivo → uso:
 *  logo            → Header
 *  hero            → HeroSection (imagem de fundo)
 *  retratoFilipe   → QuemSouSection
 *  autorAvatar     → cards de blog (autor)
 *  artigoEngenharia→ card do artigo "A engenharia do prejuízo"
 *  parceiros[]     → ParceirosSection (12 logos, na ordem original)
 *  unsplash*       → capas de artigo (originalmente servidas pelo Unsplash)
 *  cubes           → textura de fundo usada na página /quem-sou (fases futuras)
 *  solucoes1..3    → página /solucoes (fases futuras)
 */
import logoAsset from "@/assets/logo.png.asset.json";
import heroAsset from "@/assets/hero.png.asset.json";
import retratoAsset from "@/assets/retrato-filipe.jpg.asset.json";
import avatarAsset from "@/assets/autor-avatar.jpg.asset.json";
import artigoEngenhariaAsset from "@/assets/artigo-engenharia-do-prejuizo.jpg.asset.json";
import carmeliaAsset from "@/assets/parceiro-fundacao-carmelia.png.asset.json";
import governoAsset from "@/assets/parceiro-governo-do-estado.png.asset.json";
import ijsnAsset from "@/assets/parceiro-ijsn.jpg.asset.json";
import senacAsset from "@/assets/parceiro-senac.png.asset.json";
import afortAsset from "@/assets/parceiro-afort.jpg.asset.json";
import aguaVivaAsset from "@/assets/parceiro-agua-viva.png.asset.json";
import pfizerAsset from "@/assets/parceiro-pfizer.png.asset.json";
import fortlevAsset from "@/assets/parceiro-fortlev.png.asset.json";
import edpAsset from "@/assets/parceiro-edp.jpg.asset.json";
import calwanAsset from "@/assets/parceiro-calwan.png.asset.json";
import icepiAsset from "@/assets/parceiro-icepi.jpg.asset.json";
import fuegoAsset from "@/assets/parceiro-fuego-uruguaio.png.asset.json";
import unsplashReuniaoAsset from "@/assets/unsplash-reuniao.jpg.asset.json";
import unsplashClickzacaoAsset from "@/assets/unsplash-clickzacao.jpg.asset.json";
import unsplashCrachaAsset from "@/assets/unsplash-cracha.jpg.asset.json";
import unsplashCnvAsset from "@/assets/unsplash-cnv.jpg.asset.json";
import cubesAsset from "@/assets/cubes.png.asset.json";
import solucoes1Asset from "@/assets/solucoes-1.jpg.asset.json";
import solucoes2Asset from "@/assets/solucoes-2.jpg.asset.json";
import solucoes3Asset from "@/assets/solucoes-3.jpg.asset.json";

type AssetPointer = { url: string };
const u = (a: unknown) => (a as AssetPointer).url;

export const images = {
  logo: u(logoAsset),
  hero: u(heroAsset),
  retratoFilipe: u(retratoAsset),
  autorAvatar: u(avatarAsset),
  artigoEngenhariaDoPrejuizo: u(artigoEngenhariaAsset),
  unsplashReuniao: u(unsplashReuniaoAsset),
  unsplashClickzacao: u(unsplashClickzacaoAsset),
  unsplashCracha: u(unsplashCrachaAsset),
  unsplashCnv: u(unsplashCnvAsset),
  cubes: u(cubesAsset),
  solucoes1: u(solucoes1Asset),
  solucoes2: u(solucoes2Asset),
  solucoes3: u(solucoes3Asset),
};

export const parceiros = [
  { name: "Fundação Carmelia", src: u(carmeliaAsset) },
  { name: "Governo do Estado", src: u(governoAsset) },
  { name: "IJSN", src: u(ijsnAsset) },
  { name: "Senac", src: u(senacAsset) },
  { name: "Afort", src: u(afortAsset) },
  { name: "Agua Viva", src: u(aguaVivaAsset) },
  { name: "Pfizer", src: u(pfizerAsset) },
  { name: "Fortlev", src: u(fortlevAsset) },
  { name: "EDP", src: u(edpAsset) },
  { name: "Calwan", src: u(calwanAsset) },
  { name: "ICEPI", src: u(icepiAsset) },
  { name: "Fuego Uruguaio", src: u(fuegoAsset) },
];
