import { Cell } from "./cell.js";
import { Room } from "./room.js";

/**
 * Gerencia a grade e a geração procedural do layout do calabouço.
 */
export class Grid {
  /**
   * @param {CanvasRenderingContext2D} context - O contexto de desenho.
   * @param {number} tileWidth - A largura de cada tile em pixels.
   * @param {number} rows - O número de linhas na grade.
   * @param {number} cols - O número de colunas na grade.
   * @param {number} roomCount - O número de salas a serem geradas.
   */
  constructor(context, tileWidth, rows, cols, roomCount) {
    this.context = context;
    this.tileWidth = tileWidth;
    this.rows = rows;
    this.cols = cols;
    this.roomCount = roomCount;
    this.grid = [];
    this.rooms = [];
  }

  /** Gera a grade e popula as células. */
  generateGrid() {
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        const cell = new Cell(col, row, col * this.tileWidth, row * this.tileWidth);
        this.grid.push(cell);
      }
    }
  }

  /** Cria e posiciona salas na grade, evitando sobreposição. */
  createRooms() {
    const minRoomSize = 5;
    const maxRoomSize = 10;

    for (let i = 0; i < this.roomCount; i++) {
      // Gera tamanho e posição aleatórios da sala
      const roomWidth =
        Math.floor(Math.random() * (maxRoomSize - minRoomSize + 1)) +
        minRoomSize;
      const roomHeight =
        Math.floor(Math.random() * (maxRoomSize - minRoomSize + 1)) +
        minRoomSize;
      const roomX = Math.floor(Math.random() * (this.cols - roomWidth));
      const roomY = Math.floor(Math.random() * (this.rows - roomHeight));

      const newRoom = new Room(roomX, roomY, roomWidth, roomHeight, i + 1);

      // Verifica sobreposição com salas existentes
      if (this.isRoomOverlapping(newRoom)) {
        i--; // Tenta novamente se houver sobreposição
        continue;
      }

      // Cria a sala na grade
      this.carveRoom(newRoom);
      this.rooms.push(newRoom);
    }

    this.connectRooms(); // Gera corredores entre as salas após criá-las
  }

  /**
   * Verifica se a nova sala se sobrepõe a salas existentes.
   * @param {Room} newRoom - A sala a ser verificada.
   * @returns {boolean} Verdadeiro se houver sobreposição; caso contrário, falso.
   */
  isRoomOverlapping(newRoom) {
    return this.rooms.some(
      (room) =>
        newRoom.x < room.x + room.width &&
        newRoom.x + newRoom.width > room.x &&
        newRoom.y < room.y + room.height &&
        newRoom.y + newRoom.height > room.y
    );
  }

  /**
   * Cria uma sala na grade marcando suas células como vazias.
   * @param {Room} room - A sala a ser criada.
   */
  carveRoom(room) {
    for (let row = room.y; row < room.y + room.height; row++) {
      for (let col = room.x; col < room.x + room.width; col++) {
        const cellIndex = row * this.cols + col;
        this.grid[cellIndex].carve();
      }
    }
  }

  /**
   * Conecta salas com corredores selecionando centros de salas e desenhando caminhos entre eles.
   */
  connectRooms() {
    for (let i = 0; i < this.rooms.length - 1; i++) {
      const roomA = this.rooms[i];
      const roomB = this.rooms[i + 1];

      // Calcula os pontos centrais
      const pointA = {
        x: roomA.x + Math.floor(roomA.width / 2),
        y: roomA.y + Math.floor(roomA.height / 2),
      };
      const pointB = {
        x: roomB.x + Math.floor(roomB.width / 2),
        y: roomB.y + Math.floor(roomB.height / 2),
      };

      this.createCorridor(pointA, pointB);
    }
  }

  /**
   * Cria um corredor entre dois pontos usando uma abordagem simples de busca de caminho.
   * @param {Object} pointA - Ponto inicial com propriedades x e y.
   * @param {Object} pointB - Ponto final com propriedades x e y.
   */
  createCorridor(pointA, pointB) {
    let x = pointA.x;
    let y = pointA.y;

    while (x !== pointB.x) {
      const cellIndex = y * this.cols + x;
      this.grid[cellIndex].carve();
      x += x < pointB.x ? 1 : -1;
    }

    while (y !== pointB.y) {
      const cellIndex = y * this.cols + x;
      this.grid[cellIndex].carve();
      y += y < pointB.y ? 1 : -1;
    }
  }

  /** Desenha toda a grade, salas e corredores no canvas. */
  draw() {
    this.grid.forEach((cell) => cell.draw(this.context, this.tileWidth));
    this.rooms.forEach((room) => {
      room.draw(this.context, this.tileWidth);
    });
  }
}
