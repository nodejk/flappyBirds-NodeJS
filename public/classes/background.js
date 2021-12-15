export class background {
    constructor(pathImg, ctx, scale) {
        this.backgroundImage = new Image();
        this.backgroundImage.onload = (() => this.displayBackground());
        this.backgroundImage.src = pathImg;
        this.ctx = ctx;
        this.imgWidth = scale * this.backgroundImage.width;
        this.imgHeight = scale * this.backgroundImage.height;
    }
    getWidth() {
        return this.imgWidth;
    }
    getHeight() {
        return this.imgHeight;
    }
    displayBackground() {
        this.ctx.drawImage(this.backgroundImage, 0, 0, this.imgWidth, this.imgHeight);
    }
}
//# sourceMappingURL=background.js.map