import {pipe} from "../classes/pipe";
import {pipeSys}  from "../classes/pipeSys.js";
import {bird} from '../classes/bird.js';
import {background} from '../classes/background.js'


function collision_check(pipeSystem: pipeSys, flappyBird: bird, ctx: CanvasRenderingContext2D): boolean{

    var currentPipe = pipeSystem.getCurrentPipe(flappyBird);

    // upper pipe collision
    if(flappyBird.getYtop() <= currentPipe.getUpperPipeY()  
    && flappyBird.getXright() - currentPipe.getPosXLeft() >= 2){
            return false;
        }
    
    // lower pipe collision
    else if(flappyBird.getYtop() >= currentPipe.getLowerPipeY()  
    && flappyBird.getXright() - currentPipe.getPosXLeft() >= 2){
            return false;
        }
    
    // in-between pipe collision
    else if(flappyBird.getXright() > currentPipe.getPosXLeft()
    && (flappyBird.getYtop() < currentPipe.getUpperPipeY()
    || flappyBird.getYbottom() > currentPipe.getLowerPipeY())){
            return false;
        }
    
    else{
        console.log("continue");
        return true;
    }

    }
    

window.onload = (event) =>{

    var elem = <HTMLCanvasElement> document.getElementById('background');
    const ctx = <CanvasRenderingContext2D> elem.getContext('2d');

    
    const gameBackground = new background('assets/background.png', ctx, 0.6)

    elem.width = gameBackground.getWidth();
    elem.height = gameBackground.getHeight()

    gameBackground.displayBackground();

    const flappyBird = new bird(50, 250, 'assets/dabird.png', ctx);
    const pipeS = new pipeSys("assets/lowerPipe.png", "assets/upperPipe.png", ctx, 1500);

    var req;
    req = requestAnimationFrame(animate);

    function animate(){
        ctx.clearRect(0, 0, elem.width, elem.height);
        gameBackground.displayBackground();
        
        flappyBird.displayBird();
        
        pipeS.updatePosition();
        pipeS.display();

        flappyBird.birdMovement();
        
        window.onkeypress = function(event){
            if (event.which == 32){
                flappyBird.trigger();
            }
        }

        if(pipeS.getNumPipes() != 0){
            console.log("checking for collision");
            if(collision_check(pipeS, flappyBird, ctx) == false) return;
        }
        requestAnimationFrame(animate);
        }

        // C:\Users\Krishna\Desktop\pProjects\flappyBirds\src\browser_control\background_control.ts
    }
 



