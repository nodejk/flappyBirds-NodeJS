export class pipe{
    private x: number; // this is for the x position of pipe
    private gap: number; // this denotes the gap between the pipes.
    private posY: number; // this denotes the mid point of the gap. 
                 // this is used to calculate the length of the bottom and the upper pipe.
    
    private lowerPipe: {x: number, y: number};
    private upperPipe: {x: number, y: number};

    private imgLowerPipe: HTMLImageElement;
    private imgUpperPipe: HTMLImageElement;
    private ctx: CanvasRenderingContext2D;

    // private dimensions: {x1: number, y1: number, x2: number, y2: number};

    // private upperPipeDim: {x: }

    // ctx.drawImage(pipe, 0, 0, 244, 1499, 600, 275, 244 * 0.4, 1000 *0.4);

    // yMin = 275 and yMax = 500;
    // gap is constant for now :(
    private randomInt(max: number, min: number){
        return Math.random() * (max - min) + min;
    }

    constructor(imgUpperPath: string, imgLowerPath: string, ctx: CanvasRenderingContext2D){

        this.x = 1150; // this is starting position of the pipe (far right position)
        this.gap = 150;
        this.posY = this.randomInt(500, 275) - this.gap/2;
        this.lowerPipe = {x : this.x, y : this.posY + this.gap/2};
        // this.upperPipe = {x : this.x, y : -300};
        this.upperPipe = {x : this.x, y : this.posY - this.gap/2 - 400};

        this.imgLowerPipe = new Image();
        this.imgUpperPipe = new Image();

        this.ctx = ctx;

        this.imgLowerPipe.onload = (() => this.displayPipes());
        this.imgUpperPipe.onload = (() => this.displayPipes());
        
        this.imgLowerPipe.src = imgLowerPath;
        this.imgUpperPipe.src = imgUpperPath;

    }

    getLowerPipe(){
        return this.lowerPipe;
    }

    getUpperPipe(){
        return this.upperPipe;
    }

    getLowerPipeimg(){
        return this.imgLowerPipe;
    }

    getUpperPipeimg(){
        return this.imgUpperPipe;
    }

    movePipe(){
        this.upperPipe.x -= 5;
        this.lowerPipe.x -= 5;
    }

    getPosXLeft(): number{
        return this.upperPipe.x;
    }

    getPosXRight(): number{
        return Number(this.upperPipe.x + 244 * 0.4);
    }

    getLowerPipeY(): number{
        return this.lowerPipe.y;
    }

    getUpperPipeY(): number{
        return this.posY - this.gap/2;
    }



    displayPipes(){
        this.ctx.drawImage(this.getLowerPipeimg(), 0, 0, 244, 1499, this.getLowerPipe().x, this.getLowerPipe().y, 244 * 0.4, 1000 *0.4);
        this.ctx.drawImage(this.getUpperPipeimg(), 0, 0, 244, 1499, this.getUpperPipe().x, this.getUpperPipe().y, 244 * 0.4, 1000 *0.4);
        // this.ctx.drawImage(this.getUpperPipeimg(), 0, 0, 244, 1499, this.getUpperPipe().x, this.getUpperPipe().y, 244 * 0.4, 1000 *0);
    }
}