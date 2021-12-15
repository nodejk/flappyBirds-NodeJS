export class bird {
    constructor(x, y, imgPath, ctx, flap, lastFlap, currentFlap) {
        this.x = x;
        this.y = y;
        this.flap = false;
        this.currentFlap = Date.now();
        this.lastFlap = Date.now();
        this.max_jump = 70;
        this.img = new Image();
        this.img.onload = (() => this.displayBird());
        this.ctx = ctx;
        this.img.src = imgPath;
    }
    getImage() {
        return this.img;
    }
    birdMovement(flag) {
        var dy = 4;
        var dy_down = 4;
        if (flag == true) {
            // this.flap = true;
            this.lastFlap = Date.now();
        }
        else {
            if (Date.now() - this.lastFlap < 200) {
                this.y = this.y - dy;
                if (this.y <= 100) {
                    this.y = 100;
                }
            }
            else {
                this.y = this.y + dy_down;
                if (this.y >= 500) {
                    this.y = 500;
                }
            }
        }
    }
    // this triggers the flap of the bird
    trigger() {
        this.flap = true;
        this.birdMovement(true);
    }
    getXleft() {
        return this.x;
    }
    getXright() {
        return this.x + 80;
    }
    getYtop() {
        return this.y;
    }
    getYbottom() {
        return Number(this.y + 60);
    }
    setY(y) {
        this.y = y;
    }
    getcoordinates() {
        return { x1: this.x, y1: this.y, x2: this.x + 100, y2: this.y + 100 };
    }
    displayBird() {
        this.ctx.drawImage(this.getImage(), this.x, this.y, 80, 60);
    }
}
//# sourceMappingURL=bird.js.map