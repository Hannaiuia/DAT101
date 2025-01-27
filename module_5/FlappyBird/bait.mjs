"use strict"; 
import lib2D from "../../common/libs/lib2D.mjs";
import libSprite from "../../common/libs/libSprite.mjs"
import { GameProps } from "./FlappyBird.mjs";
import { EGameStatus } from "./FlappyBird.mjs";


export class TBait extends libSprite.TSprite{
    #speed; 
    #sineWave; 
    constructor(aSpriteCanvas, aSpriteInfo,aPosition){
        super(aSpriteCanvas, aSpriteInfo,aPosition); 
        this.animateSpeed = 70; 
        //Generer tilfedig hastighet mellom 0.5 og 1.5 med step på 0.1
        this.#speed =  Math.ceil(Math.random()*10)/10 + 0.5; 
        //Generer en tilfeldig amplitude mellom 1 og 3
        const amplitude = Math.ceil(Math.random()*3);
        this.#sineWave = new lib2D.TSineWave(amplitude, 0.7); 
        this.posY = this.#sineWave.value; 
    }

    update(){
        const deltaY = this.posY - this.#sineWave.value; 
        if(GameProps.status === EGameStatus.playing){
            this.translate(-this.#speed,this.#sineWave.value); 
        }else{
            this.translate(this.#speed/2, this.#sineWave.value ); 
        }
        
    }
}