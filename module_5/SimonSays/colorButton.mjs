"use strict"; 
import lib2d from "../../common/libs/lib2d_v2.mjs"; 
import libSprite from "../../common/libs/libSprite_v2.mjs";
import {gameProps, EGameStatusType, spawnSequence} from "./SimonSays.mjs"; 


export class TColorButton extends libSprite.TSpriteButton{
    constructor(aSpriteCanvas, aSpriteInfo ){
        super(aSpriteCanvas, aSpriteInfo, aSpriteInfo.dst); 
        this.sound = null; 
    }

    //A.P.I.E (Abstract, Polymorphism, Inheritance, Encapsulation )
    //Vi må løse dette med polymorhpism, når musa er over smulteringen 
    isMouseInside(aPoint){
        let isInside = super.isMouseInside(aPoint); 
        //hvis musa er over, sjekk videre om den er innenfor redius 1 og innenfor radius 2
        if(isInside){
            const dx = aPoint.x - gameProps.GameCenter.x; 
            const dy = aPoint.y - gameProps.GameCenter.y; 
            const dist = Math.hypot(dx,dy); 
            isInside = (dist >= this.spi.dst.r1) && (dist <= this.spi.dst.r2); 
        }
        return isInside; 
    }

    onMouseDown(){
        this.index = 1; 
        this.sound.play(); 
    }

    onLeave(aEvent){
        if(aEvent.buttons !==0) {
            this.index = 0; 
            this.sound.stop(); 
        }
    }

    onMouseUp(){
        if(this.index !==1){
            return; //Hvis knappen ikke er trykket ned gjør det ingenting
        }
        this.index = 0; 
        this.sound.stop(); 
        if(gameProps.Status !== EGameStatusType.Player){
            return; 
        }
        if(gameProps.activeButton === this){
            console.log("Riktig knapp"); 
            //hvis vi har flere knapper i sekvensen velg neste knapp som aktiv 
            //hvis ikke så spawn ny knapp i sekvensen. 
            if(gameProps.seqIndex < gameProps.sequence.length - 1){
                gameProps.seqIndex++; 
                gameProps.activeButton = gameProps.sequence[gameProps.seqIndex]; 
            }else{
                //Nå er vi på siste knapp i sekvensen og det er computerens tur
                gameProps.spnRound.value++; 
                spawnSequence(); 
            }

        }else{
            console.log("Feil knapp"); 
            gameProps.Status = EGameStatusType.GameOver; 
            gameProps.buttonStartEnd.index = 1; 
            gameProps.buttonStartEnd.visible = true; 
        }
    }

}//End of TColorButton class
