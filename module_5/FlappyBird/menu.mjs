"use strict"; 
import lib2D from "../../common/libs/lib2D.mjs";
import libSprite from "../../common/libs/libSprite.mjs";
import { SpriteInfoList, GameProps, EGameStatus,startGame } from "./FlappyBird.mjs";


export class TMenu{
    #spFlappyBird; 
    #spButtonPlay;
    #spNumber; 
    #spInfoText;  
    #spcvs; 
    #activeSprite; 
    #posScore;
    #posBestScore; 
    #posPlayScore; 
    #spGameOver; 
    #spMedal; 
    #ranking = {first: 0, second: 0, third:0}; 
  
    

    constructor(aSpriteCanvas){
        this.#spcvs = aSpriteCanvas; 
        const pos = new lib2D.TPosition(SpriteInfoList.background.width/2 - SpriteInfoList.flappyBird.width/2,SpriteInfoList.background.height/2 - SpriteInfoList.ground.height); 
        //GameProps.status = EGameStatus.gameOver; 
        //GameProps.status = EGameStatus.getReady; 

        this.#spFlappyBird = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.flappyBird, pos); 
        pos.y = 200; 
        pos.x = 230; 
        this.#spButtonPlay = new libSprite.TSprite(aSpriteCanvas,SpriteInfoList.buttonPlay, pos);

        pos.x = 180;
        pos.y = 80; 
        this.#spInfoText = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.infoText, pos); 

        pos.x = 270; 
        pos.y = 210; 
        this.#spNumber = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.numberBig,pos); 
        this.#spNumber.index = 3; //nedtelling starter på 3

        this.#spcvs.addEventListener("mousemove", this.#onMouseMove); 
        this.#spcvs.addEventListener("click", this.#onClick); 
        this.#activeSprite = null; //Vi har ingen aktiv Sprite enda

        pos.x = 170;
        pos.y = 150; 
        this.#spGameOver = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.gameOver, pos); 

        pos.y = 290; 
        pos.x = 230; 
        this.#spButtonPlay = new libSprite.TSprite(aSpriteCanvas,SpriteInfoList.buttonPlay, pos);

        pos.y = 190; 
        pos.x = 195; 
        this.#spMedal = new libSprite.TSprite(aSpriteCanvas,SpriteInfoList.medal, pos);
        this.#spMedal.index = 3; 

        this.#posScore = new lib2D.TPosition(380,200);
        this.#posBestScore = new lib2D.TPosition(380, 250); 
        this.#posPlayScore = new lib2D.TPosition(75, 30); 
    }


    draw(){
        switch(GameProps.status){
            case EGameStatus.idle:
                this.#spFlappyBird.draw(); 
                this.#spButtonPlay.draw(); 

                break; 
            case EGameStatus.getReady:
                this.#spInfoText.index = 0; 
                this.#spInfoText.draw();
                this.#spNumber.draw(); 
                break; 
            case EGameStatus.gameOver:
            //her skal dere nå tegne game over spritene. Dere må lage forskjellige objektene som private medlemmer i en klasse.
            //hint bruk eks this#spGameOver; 
                this.#spGameOver.draw(); 
                this.#spButtonPlay.draw(); 
                this.#spMedal.draw(); 
                this.#spcvs.drawText(GameProps.score, this.#posScore); 
                this.#spcvs.drawText(GameProps.bestScore, this.#posBestScore); 
                
                this.#spInfoText.index = 1; 
                this.#spInfoText.draw(); 
                break; 
            case EGameStatus.playing:
                this.#spcvs.drawText(GameProps.score.toString(), this.#posPlayScore); 
                break; 
        }
    }

    incScore(aScore){
        GameProps.score += aScore;
        if(GameProps.score > this.#ranking.first){
          this.#ranking.third = this.#ranking.second;
          this.#ranking.second = this.#ranking.first;
          this.#ranking.first = GameProps.score;
          GameProps.bestScore = this.#ranking.first; 
          this.#spMedal.index = 2; 

      }else if(GameProps.score > this.#ranking.second){
          this.#ranking.third = this.#ranking.second;
          this.#ranking.second = GameProps.score;
          this.#spMedal.index = 1; 
         

      }else if(GameProps.score > this.#ranking.third){
          this.#ranking.third = GameProps.score;
          this.#spMedal = 3; 

      }else{
        this.#spMedal.index = 0; 
      }
    }

    reset(){
        GameProps.score = 0; 
        this.#spNumber.index = 3; 
        
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
            startGame();
        }
    }

}//end of TMenu class

