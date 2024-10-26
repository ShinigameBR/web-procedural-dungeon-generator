/**
 * Representa uma sala no calabouço.
 */
export class Room {
  /**
   * @param {number} x - A coordenada x da sala.
   * @param {number} y - A coordenada y da sala.
   * @param {number} width - A largura da sala em células.
   * @param {number} height - A altura da sala em células.
   * @param {number} index - O número de índice da sala.
   */
  constructor(x, y, width, height, index) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.index = index;
  }

  /**
   * Desenha o índice da sala no canvas.
   * @param {CanvasRenderingContext2D} context - O contexto de desenho.
   * @param {number} tileWidth - A largura de cada tile.
   */
  draw(context, tileWidth) {
    const centerX = (this.x + this.width / 2) * tileWidth;
    const centerY = (this.y + this.height / 2) * tileWidth;
    context.fillStyle = "white";
    context.font = "14px Arial";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(this.index, centerX, centerY);
  }
}
