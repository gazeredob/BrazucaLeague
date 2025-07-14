// src/data.js

// ==== BANCO DE DADOS FICTÍCIO ====

// Logos e Banners (placeholders, substitua por seus próprios links de imagem)
const LOGO_FG = 'https://i.imgur.com/gY5J3qE.png'; // Furia Gaucha
const LOGO_ES = 'https://i.imgur.com/b9kC2hY.png'; // Estrelas do Sul
const LOGO_LV = 'https://i.imgur.com/m5c1g5g.png'; // Leões do Vale (Genérico)
const BANNER_GENERICO = 'https://kingsleague.pro/img/bg-card-players.png';

export const timesData = [
  { id: 1, nome: "Fúria Gaúcha", acronym: "FGA", logo: LOGO_FG, banner: BANNER_GENERICO, vitorias: 8, derrotas: 2, gp: 35, gc: 15, sg: 20 },
  { id: 2, nome: "Estrelas do Sul", acronym: "EDS", logo: LOGO_ES, banner: BANNER_GENERICO, vitorias: 7, derrotas: 3, gp: 30, gc: 20, sg: 10 },
  { id: 3, nome: "Leões do Vale", acronym: "LDV", logo: LOGO_LV, banner: BANNER_GENERICO, vitorias: 6, derrotas: 4, gp: 25, gc: 22, sg: 3 },
  { id: 4, nome: "Tempestade Azul", acronym: "TPA", logo: LOGO_LV, banner: BANNER_GENERICO, vitorias: 5, derrotas: 5, gp: 24, gc: 24, sg: 0 },
  { id: 5, nome: "Panteras da Serra", acronym: "PAN", logo: LOGO_LV, banner: BANNER_GENERICO, vitorias: 4, derrotas: 6, gp: 20, gc: 28, sg: -8 },
  { id: 6, nome: "Guerreiros do Asfalto", acronym: "GDA", logo: LOGO_LV, banner: BANNER_GENERICO, vitorias: 3, derrotas: 7, gp: 18, gc: 32, sg: -14 },
  { id: 7, nome: "Titãs do Pampa", acronym: "TIT", logo: LOGO_LV, banner: BANNER_GENERICO, vitorias: 2, derrotas: 8, gp: 15, gc: 35, sg: -20 },
  { id: 8, nome: "Corsários da Ilha", acronym: "COR", logo: LOGO_LV, banner: BANNER_GENERICO, vitorias: 1, derrotas: 9, gp: 12, gc: 40, sg: -28 },
];

export const jogadoresData = [
  // Time 1: Fúria Gaúcha
  { id: 1, nome: "Caio 'Japa' Garcia", posicao: "Atacante", imagem: 'https://i.imgur.com/tBw2Ruc.png', timeId: 1, media: 71, stats: { jogos: 10, gols: 8, assist: 2, amarelos: 1, vermelhos: 0 }, atributos: { fisico: 80, duelos: 75, chute: 82, defesa: 67 } },
  { id: 2, nome: "Rubens 'Tucão' Magalhães", posicao: "Meia", imagem: 'https://i.imgur.com/D4sT3Z2.png', timeId: 1, media: 80, stats: { jogos: 10, gols: 5, assist: 8, amarelos: 2, vermelhos: 0 }, atributos: { fisico: 75, duelos: 80, chute: 78, defesa: 72 } },

  // Time 2: Estrelas do Sul
  { id: 3, nome: "Marcello 'Marcelinho' Jr", posicao: "Atacante", imagem: 'https://i.imgur.com/L44hYpY.png', timeId: 2, media: 85, stats: { jogos: 10, gols: 12, assist: 5, amarelos: 0, vermelhos: 0 }, atributos: { fisico: 82, duelos: 70, chute: 90, defesa: 60 } },
  { id: 4, nome: "Victor Florio", posicao: "Defesa", imagem: 'https://i.imgur.com/R3m4EfN.png', timeId: 2, media: 79, stats: { jogos: 10, gols: 1, assist: 1, amarelos: 3, vermelhos: 1 }, atributos: { fisico: 88, duelos: 85, chute: 60, defesa: 90 } },

  // Time 3: Leões do Vale
  { id: 5, nome: "Pedro 'Pedra' Rocha", posicao: "Goleiro", imagem: 'https://i.imgur.com/tBw2Ruc.png', timeId: 3, media: 75, stats: { jogos: 10, gols: 0, assist: 0, amarelos: 0, vermelhos: 0 }, atributos: { fisico: 85, duelos: 70, chute: 50, defesa: 88 } },
  { id: 6, nome: "Lucas 'Flash' Mendes", posicao: "Ponta", imagem: 'https://i.imgur.com/L44hYpY.png', timeId: 3, media: 78, stats: { jogos: 10, gols: 7, assist: 7, amarelos: 1, vermelhos: 0 }, atributos: { fisico: 92, duelos: 80, chute: 80, defesa: 65 } },
  
  // Adicione mais jogadores para outros times se desejar
];

export const classificacaoData = [
  { pos: 1, timeId: 1, p: 24, j: 10, v: 8, e: 0, d: 2, gp: 35, gc: 15, sg: 20, ultimos: ['V', 'V', 'D', 'V', 'V'] },
  { pos: 2, timeId: 2, p: 21, j: 10, v: 7, e: 0, d: 3, gp: 30, gc: 20, sg: 10, ultimos: ['V', 'D', 'V', 'V', 'D'] },
  { pos: 3, timeId: 3, p: 18, j: 10, v: 6, e: 0, d: 4, gp: 25, gc: 22, sg: 3, ultimos: ['V', 'V', 'D', 'D', 'V'] },
  { pos: 4, timeId: 4, p: 15, j: 10, v: 5, e: 0, d: 5, gp: 24, gc: 24, sg: 0, ultimos: ['D', 'V', 'D', 'V', 'D'] },
  { pos: 5, timeId: 5, p: 12, j: 10, v: 4, e: 0, d: 6, gp: 20, gc: 28, sg: -8, ultimos: ['D', 'V', 'V', 'D', 'D'] },
  { pos: 6, timeId: 6, p: 9, j: 10, v: 3, e: 0, d: 7, gp: 18, gc: 32, sg: -14, ultimos: ['V', 'D', 'D', 'D', 'V'] },
  { pos: 7, timeId: 7, p: 6, j: 10, v: 2, e: 0, d: 8, gp: 15, gc: 35, sg: -20, ultimos: ['D', 'D', 'V', 'D', 'D'] },
  { pos: 8, timeId: 8, p: 3, j: 10, v: 1, e: 0, d: 9, gp: 12, gc: 40, sg: -28, ultimos: ['D', 'D', 'D', 'D', 'D'] },
];


export const partidasData = [
  { id: 1, rodada: 11, data: '12/07', hora: '16:30', local: 'Maracanã', timeCasaId: 1, timeForaId: 2 },
  { id: 2, rodada: 11, data: '12/07', hora: '18:30', local: 'Mané Garrincha', timeCasaId: 3, timeForaId: 4 },
  { id: 3, rodada: 11, data: '12/07', hora: '21:00', local: 'Arena Fonte Nova', timeCasaId: 5, timeForaId: 6 },
  { id: 4, rodada: 11, data: '13/07', hora: '19:00', local: 'Neo Química Arena', timeCasaId: 7, timeForaId: 8 },
];
