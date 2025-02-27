"use strict"
import libSprite from "../../common/libs/libSprite.mjs";
import lib2D from "../../common/libs/lib2D.mjs"; 
import {GameProps} from "./FlappyBird.mjs"; 


class TObstacle {

    #upper; 
    #lower; 
    #spriteInfo; 

    constructor(aSpriteCanvas, aSpriteInfo,aPosition){ 
        this.#spriteInfo = aSpriteInfo; 
        const minTop = -320 + 25;
        const maxTop = 0; 
        let top = Math.floor(Math.random() * minTop); 
        let pos = new lib2D.TPosition(650,top );
        this.#upper = new libSprite.TSprite(aSpriteCanvas, aSpriteInfo, pos); 
        this.#upper.index = 3; 
        const groundY = GameProps.ground.posY; 
        top += this.#spriteInfo.height + 150; 
        const gap = top - groundY - 25; 

        top = Math.floor(Math.random() * gap) + groundY - 25; 
        pos.y = top; 
        this.#lower = new libSprite.TSprite(aSpriteCanvas, aSpriteInfo, pos);
        this.#lower.index =2; 
        this.hasPassed = false; //eksplisitt og implisitt kommer på eksamen
    }

    draw(){
        if(GameProps.dayTime === false){
        this.#upper.index = 1;
        this.#lower.index = 0; 
        }else{
        this.#upper.index = 3;
        this.#lower.index = 2; 
        }
        this.#upper.draw(); 
        this.#lower.draw(); 
    }

    update(){
        this.#upper.translate(-1,0); 
        this.#lower.translate(-1,0); 
        const hasCollided = 
        GameProps.hero.hasCollided(this.#upper) ||
        GameProps.hero.hasCollided(this.#lower); 

        if(hasCollided){
            GameProps.hero.flap(); 
            GameProps.hero.isDead = true; 
        }
    }

    get right(){
        return this.#upper.right; 
    }

    get left(){
        return this.#upper.left; 
    }
    get posX(){
        return this.#upper.posX; 
    }
}

export default TObstacle; 
