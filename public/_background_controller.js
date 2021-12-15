
function game_state(flappyBird, pipeStatus){
    // returns 1 if the game is still being played.
    // returns 0 if the game has been lost.

    // get the status of the first pipe.
    let xPipe0 = pipeStatus[0].getLowerPipe();
    let xPipe1 = pipeStatus[1].getLowerPipe();

    

}

import { bird } from "./classes/bird";

var bird_img = new Image();
bird_img.src = "assets/dabird.png";
var flappy_bird = new bird(50, 250, bird_img);

var upperPipe = new Image();
upperPipe.src = "assets/upperPipe.png";

var lowerPipe = new Image();
lowerPipe.src = "assets/lowerPipe.png";

var obstacle = new pipe(upperPipe, lowerPipe);

var pipeS = new pipeSys(lowerPipe, upperPipe);

        
console.log("readduyyy")
var c = document.getElementById('bird');
var ctx = c.getContext('2d');

var img = new Image();

img.src = 'assets/background.png';

var imgWidth = img.width * 0.6;
var imgHeight = img.height * 0.6;
c.width = imgWidth;
c.height = imgHeight;

console.log(typeof img);

console.log(typeof window.flappy_bird.getImage())

window.flappy_bird.img.onload = animate();

function animate(){
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.drawImage(img, 0, 0, imgWidth, imgHeight);
    window.flappy_bird.displayBird(ctx);

    window.pipeS.updatePosition();
    window.pipeS.display(ctx);

    window.flappy_bird.birdMovement();

    window.onkeypress = function(event){
        if (event.which == 32){
            window.flappy_bird.trigger()
        }
    } 
    
    requestAnimationFrame(animate);
}