import {ShapeType} from "./robots-test-model-shapetype";

/**
 * A robot class for drawing coordinates on a canvas
 */
export class RobotData {
  robot: Array<Array<number>> = [];
  cleaning_gadget: Array<Array<number>> = [];
  path: Array<Array<number>> = [];
  range: number = 0;
  scale: number = 0;
  currIndexFrom: number = 0; currIndexTo: number = 0;
  isAnimationPlaying: boolean = false;
  animationId: number = 0;
  currAnimationFps: number = 0;
  readonly DEFAULT_FPS: number = 60;

  constructor(private ctx: CanvasRenderingContext2D, private jsonData: any) {
      this.robot = jsonData.robot;
      this.cleaning_gadget = jsonData.cleaning_gadget;
      this.path = jsonData.path;
      this.calculateRangeScale();
  }

  /**
   * Draw all robot elements
   */
  public draw() {
    this.drawElement('purple', 5, this.robot, ShapeType.closed);
    this.drawElement('blue', 5, this.cleaning_gadget, ShapeType.open);
    this.drawElement('black', 5, this.path, ShapeType.open);
  }

  /**
   * Draw elements to the canvas given a style and coordinates array
   * @param style
   * @param lineWidth
   * @param coordinates
   * @private
   */
  private drawElement(style: string, lineWidth: number, coordinates: Array<Array<number>>, shapeType: ShapeType) {
    this.setContextStyle(style, lineWidth);
    this.ctx.beginPath();
    for (let index = 1; index < coordinates.length; index++) {
        this.drawStroke(coordinates[index - 1], coordinates[index]);
    }
    if (shapeType == ShapeType.closed) {
      this.ctx.lineTo(((coordinates[0][0]) / this.range) * this.scale, ((coordinates[0][1]) / this.range) * this.scale);
      this.ctx.stroke();
    }
  }

  /**
   * Start animating with a given FPS value
   * @param animationFps
   */
  public animate(animationFps: number) {
    this.resetAnimation()
    this.currAnimationFps = animationFps == 0? this.DEFAULT_FPS : animationFps;
    this.isAnimationPlaying = true;
    this.draw();
    this.animatePath();
  }

  /**
   * Reset the animation
   * @private
   */
  private resetAnimation() {
    this.isAnimationPlaying = false;
    cancelAnimationFrame(this.animationId);
    this.currIndexTo = this.currIndexFrom = 0;
  }

  /**
   * Animate the path
   */
  private animatePath() {
    if (!this.isAnimationPlaying) return;
    setTimeout(() => {
      this.animationId = requestAnimationFrame(() => this.animatePath());
    }, 1000 / this.currAnimationFps);
    this.setContextStyle('red', 2);
    this.ctx.beginPath();
    this.currIndexTo += 1;
    if (this.currIndexTo >= this.path.length || this.currIndexFrom >= this.path.length) {
      this.resetAnimation();
    }
    this.drawStroke(this.path[this.currIndexFrom], this.path[this.currIndexTo]);
    this.currIndexFrom += 1;
  }



  /**
   * Draw a stroke to the canvas from and to given coordinates
   * @param coordinatesFrom
   * @param coordinatesTo
   * @private
   */
  private drawStroke(coordinatesFrom: any, coordinatesTo: any) {
    this.ctx.moveTo(((coordinatesFrom[0]) / this.range) * this.scale, ((coordinatesFrom[1]) / this.range) * this.scale);
    this.ctx.lineTo(((coordinatesTo[0]) / this.range) * this.scale, ((coordinatesTo[1]) / this.range) * this.scale);
    this.ctx.stroke();
  }

  /**
   * Calculate the max range and scale ratio depending on the path extent
   * @private
   */
  private calculateRangeScale() {
    let maxX: number, maxY:number;
    let minX: number, minY: number;
    maxX = maxY = -Infinity;
    minX = minY = Infinity;
    this.path.forEach(coordinates => {
        minX = Math.min(minX, coordinates[0]);
        minY = Math.min(minY, coordinates[1]);
        maxX = Math.max(maxX, coordinates[0]);
        maxY = Math.max(maxY, coordinates[1]);
    });
    let rangeX: number = maxX - minX;
    let rangeY: number = maxY - minY;
    this.range = Math.max(rangeX, rangeY);
    this.scale = Math.min(this.ctx.canvas.width / this.range, this.ctx.canvas.height / this.range);
  }

  /**
   * Update context style
   * @param style
   * @param lineWidth
   * @private
   */
    private setContextStyle(style: string, lineWidth: number) {
      this.ctx.strokeStyle = style;
      this.ctx.lineWidth = lineWidth;
    }
}
