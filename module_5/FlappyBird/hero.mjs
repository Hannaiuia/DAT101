"use strict";
import libSprite from "../../common/libs/libSprite.mjs";
import {SpriteInfoList} from "./FlappyBird.mjs";  
import {GameProps, EGameStatus,playSound} from "./FlappyBird.mjs"; 
import lib2D from "../../common/libs/lib2D.mjs";

class THero extends libSprite.TSprite{

    #spriteInfo; 
    #gravity =9.81 /60; 
    #velocity = 0; 
    #sineWave; 

    constructor(aSpriteCanvas, aSpriteInfo,aPosition){
        super(aSpriteCanvas, aSpriteInfo, aPosition); 
        this.animateSpeed = 10; 
        this.#spriteInfo = aSpriteInfo; 
        this.isDead = false; 
        this.rotation = 0; 
        this.#sineWave = new lib2D.TSineWave(2.5, 2.5);

    }

    draw(){
        super.draw(); 
    }

    update(){
        //const maxFall = SpriteInfoList.ground.y - SpriteInfoList.ground.height - SpriteInfoList.hero1.height;
        const groundY = GameProps.ground.posY;  //- GameProps.ground.height - GameProps.hero.height;
        const bottomY = this.posY + this.#spriteInfo.height; 

        if(bottomY < groundY) {
            if(this.posY < 0){
                this.posY = 0; 
                this.#velocity = 0;
            }
            this.translate(0,this.#velocity); 
            this.rotation = this.#velocity * 10; 
            this.#velocity += this.#gravity
        }else{
            this.posY = groundY - this.#spriteInfo.height; 
            GameProps.status = EGameStatus.gameOver; 
            this.animateSpeed = 0; 
            GameProps.sounds.countDown.stop(); 
            GameProps.sounds.running.stop(); 
            GameProps.sounds.food.stop();
            GameProps.sounds.gameOver.stop();
            GameProps.sounds.dead.stop(); 
            GameProps.sounds.flap.stop(); 
            playSound(GameProps.sounds.gameOver); 
        }
    }

    flap(){
        this.#velocity = -3; 

    }

    updateIdle(){
        this.translate(0, this.#sineWave.value); 
    }

}

export default THero; 
