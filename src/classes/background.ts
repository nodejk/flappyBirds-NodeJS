export class background{
    private backgroundImage: HTMLImageElement;
    private ctx: CanvasRenderingContext2D;
    private imgWidth: number;
    private imgHeight: number;

    constructor(pathImg: string, ctx: CanvasRenderingContext2D, scale: number){

        this.backgroundImage = new Image();
        this.backgroundImage.onload = (() => this.displayBackground());
        this.backgroundImage.src = pathImg;

        this.ctx = ctx;

        this.imgWidth = scale * this.backgroundImage.width;
        this.imgHeight = scale * this.backgroundImage.height;

    }

    getWidth(): number{
        return this.imgWidth;
    }

    getHeight(): number{
        return this.imgHeight;
    }

    displayBackground(){
        this.ctx.drawImage(this.backgroundImage, 0, 0, this.imgWidth, this.imgHeight);
    }
}