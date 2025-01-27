"use strict"; 
import lib2D from "../../common/libs/lib2D.mjs";
import libSprite from "../../common/libs/libSprite.mjs";
import { SpriteInfoList, GameProps, EGameStatus } from "./FlappyBird.mjs";


export class TMenu{
    #spFlappyBird; 
    #spButtonPlay;
    #spNumber; 
    #spInfoText;  
    #spcvs; 
    #activeSprite; 
    

    constructor(aSpriteCanvas){
        this.#spcvs = aSpriteCanvas; 
        const pos = new lib2D.TPosition(SpriteInfoList.background.width/2 - SpriteInfoList.flappyBird.width/2,SpriteInfoList.background.height/2 - SpriteInfoList.ground.height); 

        this.#spFlappyBird = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.flappyBird, pos); 
        pos.y = 200; 
        pos.x = 230; 
        this.#spButtonPlay = new libSprite.TSprite(aSpriteCanvas,SpriteInfoList.buttonPlay, pos);

        pos.x = 200;
        pos.y = 150; 
        this.#spInfoText = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.infoText, pos); 

        pos.x = 270; 
        pos.y =210; 
        this.#spNumber = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.numberBig,pos); 
        this.#spNumber.index = 3; //nedtelling starter på 3

        this.#spcvs.addEventListener("mousemove", this.#onMouseMove); 
        this.#spcvs.addEventListener("click", this.#onClick); 
        this.#activeSprite = null; //Vi har ingen aktiv Sprite enda

    }


    draw(){
        switch(GameProps.status){
            case EGameStatus.idle:
                this.#spFlappyBird.draw(); 
                this.#spButtonPlay.draw(); 
                break; 
            case EGameStatus.getReady:
                this.#spInfoText.draw();
                this.#spNumber.draw(); 
                break; 
        }
    }

    //ikke eksamensrelevant 
    #onMouseMove = (aEvent) => {
        const pos = this.#spcvs.getMousePos(aEvent); 
        const boundRect = this.#spButtonPlay.boundingBox;
        switch(GameProps.status){
            case EGameStatus.idle: 
            if(boundRect.isPositionInside(pos)){
                this.#spcvs.style.cursor  = "pointer"; 
                this.#activeSprite = this.#spButtonPlay; 
            }else{
                this.#spcvs.style.cursor = "default"; 
                this.#activeSprite = null; 
            }
            break; 
        }


    }; 

    #onClick = () =>{
        if(this.#activeSprite === this.#spButtonPlay){
            GameProps.status = EGameStatus.getReady; 
            this.#spcvs.style.cursor = "default"; 
            setTimeout(this.#onCountDown, 1000); 
        }
    }; 
    
    #onCountDown = () => {
        if(this.#spNumber.index > 1){
            this.#spNumber.index --; 
            setTimeout(this.#onCountDown, 1000); 
        }else{
            GameProps.status = EGameStatus.playing; 
        }
    }

}//end of TMenu class

