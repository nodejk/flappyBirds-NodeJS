export class pipe {
    constructor(imgUpperPath, imgLowerPath, ctx) {
        this.x = 1150; // this is starting position of the pipe (far right position)
        this.gap = 150;
        this.posY = this.randomInt(500, 275) - this.gap / 2;
        this.lowerPipe = { x: this.x, y: this.posY + this.gap / 2 };
        // this.upperPipe = {x : this.x, y : -300};
        this.upperPipe = { x: this.x, y: this.posY - this.gap / 2 - 400 };
        this.imgLowerPipe = new Image();
        this.imgUpperPipe = new Image();
        this.ctx = ctx;
        this.imgLowerPipe.onload = (() => this.displayPipes());
        this.imgUpperPipe.onload = (() => this.displayPipes());
        this.imgLowerPipe.src = imgLowerPath;
        this.imgUpperPipe.src = imgUpperPath;
    }
    // private dimensions: {x1: number, y1: number, x2: number, y2: number};
    // private upperPipeDim: {x: }
    // ctx.drawImage(pipe, 0, 0, 244, 1499, 600, 275, 244 * 0.4, 1000 *0.4);
    // yMin = 275 and yMax = 500;
    // gap is constant for now :(
    randomInt(max, min) {
        return Math.random() * (max - min) + min;
    }
    getLowerPipe() {
        return this.lowerPipe;
    }
    getUpperPipe() {
        return this.upperPipe;
    }
    getLowerPipeimg() {
        return this.imgLowerPipe;
    }
    getUpperPipeimg() {
        return this.imgUpperPipe;
    }
    movePipe() {
        this.upperPipe.x -= 5;
        this.lowerPipe.x -= 5;
    }
    getPosXLeft() {
        return this.upperPipe.x;
    }
    getPosXRight() {
        return Number(this.upperPipe.x + 244 * 0.4);
    }
    getLowerPipeY() {
        return this.lowerPipe.y;
    }
    getUpperPipeY() {
        return this.posY - this.gap / 2;
    }
    displayPipes() {
        this.ctx.drawImage(this.getLowerPipeimg(), 0, 0, 244, 1499, this.getLowerPipe().x, this.getLowerPipe().y, 244 * 0.4, 1000 * 0.4);
        this.ctx.drawImage(this.getUpperPipeimg(), 0, 0, 244, 1499, this.getUpperPipe().x, this.getUpperPipe().y, 244 * 0.4, 1000 * 0.4);
        // this.ctx.drawImage(this.getUpperPipeimg(), 0, 0, 244, 1499, this.getUpperPipe().x, this.getUpperPipe().y, 244 * 0.4, 1000 *0);
    }
}
//# sourceMappingURL=pipe.js.map