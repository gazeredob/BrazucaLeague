// src/data.js

// Placeholder para logos e fotos. O ideal é ter URLs de imagens reais aqui.
const P_LOGO = 'https://i.imgur.com/m5c1g5g.png'; // Um placeholder genérico

export const timesData = [
  { id: 1, nome: "Fúria Gaúcha", logo: P_LOGO, banner: 'url_banner_1.jpg', vitorias: 8, derrotas: 1, gp: 25, gc: 10, sg: 15 },
  { id: 2, nome: "Estrelas do Sul", logo: P_LOGO, banner: 'url_banner_2.jpg', vitorias: 7, derrotas: 2, gp: 21, gc: 12, sg: 9 },
  { id: 3, nome: "Leões do Vale", logo: P_LOGO, banner: 'url_banner_3.jpg', vitorias: 6, derrotas: 3, gp: 18, gc: 15, sg: 3 },
  // Adicione mais times aqui
];

export const jogadoresData = [
  { id: 1, nome: "Caio 'Japa' Garcia", posicao: "Atacante", imagem: 'https://i.imgur.com/tBw2Ruc.png', timeId: 1, media: 71, stats: { jogos: 7, gols: 0, assist: 0, amarelos: 0, vermelhos: 0 }, atributos: { fisico: 80, duelos: 75, chute: 72, defesa: 67 } },
  { id: 2, nome: "Marcello 'Marcelinho' Junior", posicao: "Atacante", imagem: 'https://i.imgur.com/L44hYpY.png', timeId: 2, media: 73, stats: { jogos: 11, gols: 9, assist: 3, amarelos: 0, vermelhos: 0 }, atributos: { fisico: 82, duelos: 70, chute: 85, defesa: 60 } },
  { id: 3, nome: "Rubens 'Tucão' Magalhães", posicao: "Meia", imagem: 'https://i.imgur.com/D4sT3Z2.png', timeId: 1, media: 70, stats: { jogos: 12, gols: 5, assist: 3, amarelos: 1, vermelhos: 0 }, atributos: { fisico: 75, duelos: 80, chute: 70, defesa: 72 } },
  { id: 4, nome: "Victor Florio", posicao: "Defesa", imagem: 'https://i.imgur.com/R3m4EfN.png', timeId: 3, media: 79, stats: { jogos: 1, gols: 0, assist: 0, amarelos: 0, vermelhos: 0 }, atributos: { fisico: 88, duelos: 85, chute: 60, defesa: 90 } },
  // Adicione mais jogadores
];

export const classificacaoData = [
    { pos: 1, timeId: 1, p: 24, j: 11, v: 7, e: 3, d: 1, gp: 24, gc: 4, sg: 20, ultimos: ['V', 'V', 'E', 'V', 'D'] },
    { pos: 2, timeId: 2, p: 24, j: 12, v: 7, e: 3, d: 2, gp: 17, gc: 8, sg: 9, ultimos: ['V', 'V', 'V', 'E', 'V'] },
    { pos: 3, timeId: 3, p: 23, j: 12, v: 7, e: 2, d: 3, gp: 14, gc: 11, sg: 3, ultimos: ['V', 'D', 'D', 'V', 'V'] },
    //...
];
