/**
 * Representa uma célula na grade do calabouço.
 */
export class Cell {
  /**
   * @param {number} column - O índice da coluna da célula.
   * @param {number} row - O índice da linha da célula.
   * @param {number} x - A coordenada x em pixels.
   * @param {number} y - A coordenada y em pixels.
   */
  constructor(column, row, x, y) {
    this.column = column;
    this.row = row;
    this.x = x;
    this.y = y;
    this.empty = false;
  }

  /**
   * Desenha a célula no canvas.
   * @param {CanvasRenderingContext2D} context - O contexto de desenho.
   * @param {number} tileWidth - A largura do tile em pixels.
   */
  draw(context, tileWidth) {
    context.fillStyle = this.empty ? "#696966" : "#323232";
    context.fillRect(this.x, this.y, tileWidth, tileWidth);
  }

  /** Marca a célula como vazia. */
  carve() {
    this.empty = true;
  }
}
