import { Grid } from './grid.js';

/**
 * Inicializa e desenha o calabouço no canvas.
 *
 * @function
 * @returns {void}
 */
function initializeDungeon() {
  const canvas = document.getElementById('game');
  const context = canvas.getContext('2d');
  const tileWidth = 12; // Largura de cada tile em pixels
  const rows = 50; // Número de linhas na grade
  const cols = 50; // Número de colunas na grade
  const roomCount = 10; // Número de salas a serem geradas

  // Cria uma nova instância da grade
  const grid = new Grid(context, tileWidth, rows, cols, roomCount);
  grid.generateGrid(); // Gera o layout da grade
  grid.createRooms(); // Cria salas dentro da grade
  grid.draw(); // Desenha a grade no canvas
}

// Adiciona um listener de evento para inicializar o calabouço quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', initializeDungeon);
