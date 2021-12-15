// basically it keeps track of all the pipes which are in the system.
// it makes new pipes and removes the ones which are out of the range.
import { pipe } from "../classes/pipe.js";
// material UI --> for the standard google styling 
// bootstrap --> twitter (server side) (use this for the project)
// for the next one use react.
// be expert in one thing.
// react is simple, angular is hard
// angular is stable and better structed. 
// react: easy to start but not suitable for big projects. (react)
export class pipeSys {
    // pipeObject: object;
    constructor(imgLowerPipe, imgUpperPipe, ctx, interval) {
        this.imgLowerPipe = imgLowerPipe;
        this.imgUpperPipe = imgUpperPipe;
        this.pipes = [];
        this.lastUpdate = Date.now();
        // this.pipeObject = pipeGiven;
        this.ctx = ctx;
        if (interval == undefined) {
            this.interval = 900; //milisecond
        }
        else {
            this.interval = interval;
        }
    }
    updatePosition() {
        if (Date.now() - this.lastUpdate >= this.interval) {
            let temp = new pipe(this.imgUpperPipe, this.imgLowerPipe, this.ctx);
            this.pipes.push(temp);
            this.lastUpdate = Date.now();
        }
        if (this.pipes.length !== 0) {
            for (let i = 0; i < this.pipes.length; i++) {
                if (this.pipes[i].getPosXRight() <= 0) {
                    this.pipes.shift();
                }
                this.pipes[i].movePipe();
            }
        }
    }
    display() {
        for (let i = 0; i < this.pipes.length; i++) {
            // ctx.drawImage()  
            this.pipes[i].displayPipes();
        }
    }
    getCurrentPipeIdx(flappyBird) {
        if (flappyBird.getXleft() <= this.pipes[0].getPosXRight() && this.pipes[0].getPosXLeft() >= 0) {
            return 0;
        }
        else {
            return 1;
        }
    }
    getNumPipes() {
        return this.pipes.length;
    }
    getPipeIndex(idx) {
        return this.pipes[idx];
    }
    getCurrentPipe(flappyBird) {
        return this.pipes[this.getCurrentPipeIdx(flappyBird)];
    }
}
//# sourceMappingURL=pipeSys.js.map