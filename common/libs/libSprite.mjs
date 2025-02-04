"use strict"; 
import lib2D from "./lib2D.mjs"; 

/**
 * @library libSprite
 * @description A library for classes that manage sprite animations. 
 */

class TSpriteCanvas {
    #cvs; 
    #ctx; 
    #img; 
    #boundingRect; 

    constructor(aCanvas){
        this.#cvs = aCanvas; 
        this.#ctx = aCanvas.getContext("2d"); 
        this.#img = new Image(); 
        this.#boundingRect = this.#cvs.getBoundingClientRect(); 
        this.mousePos = new lib2D.TPosition(0,0); 

    }

    loadSpriteSheet(aFileName, aLoadedFinal){
        this.#img.onload = aLoadedFinal; 
        this.#img.src = aFileName; 
    }

    drawSprite(aSpriteInfo, aDx = 0, aDy= 0, aIndex, aRot = 0){
        let index = aIndex;  
        const sx = aSpriteInfo.x + (index * aSpriteInfo.width); 
        const sy = aSpriteInfo.y; 
        const sw = aSpriteInfo.width; 
        const sh = aSpriteInfo.height; 
        const dx = aDx; 
        const dy = aDy; 
        const dw = sw;
        const dh = sh; 
        if(aRot !== 0){
            //Hvis vi har rotasjon må vi flytte midthen av destinasjonen til 0,0
            const cx = dx + dw / 2; 
            const cy = dy + dh / 2; 
            const rad = aRot * Math.PI /180; 
            this.#ctx.translate(cx,cy); 
            this.#ctx.rotate(rad); 
            this.#ctx.drawImage(this.#img, sx, sy, sw, sh, -dw /2, -dh/2, dw, dh); 
            this.#ctx.rotate(-rad); 
            this.#ctx.translate(-cx, -cy); 
        }else{
            this.#ctx.drawImage(this.#img, sx,sy,sw,sh,dx,dy,dw,dh); 
        }  
    } //end of drawsprite

    drawText(aText, aPos){
        this.#ctx.font = "25px Arial"; 
        this.#ctx.fillStyle = "hsl(0, 91%, 42%)"; 
        this.#ctx.textAlign = "right"; 
        this.#ctx.fillText(aText,aPos.x, aPos.y); 
    }



    clearCanvas(){
        this.#ctx.clearRect(0,0, this.#cvs.width, this.#cvs.height);
    }

    addEventListener(aType, aListener){
        this.#cvs.addEventListener(aType, aListener); 
    }

    getMousePos(aEvent){
        const mousePos = new lib2D.TPosition(0,0); 
        this.mousePos.x = aEvent.clientX - this.#boundingRect.left;
        this.mousePos.y = aEvent.clientY - this.#boundingRect.top; 
        return this.mousePos; 
    }

    get style(){
        return this.#cvs.style;
    }
}
/*Utvid konstruktøren til å ta inn et punkt for destinasjonen til Spriten */

class TSprite {
    #spcvs;
    #spriteInfo; 
    #pos; 
    #index; 
    #speedIndex; 
    

    constructor(aSpriteCanvas, aSpriteInfo,aPosition){
        this.#spcvs = aSpriteCanvas; 
        this.#spriteInfo = aSpriteInfo; 
        this.#pos = aPosition.clone(); //vi trenger en kopi av posisjonen.
        this.#index = 0; 
        this.#speedIndex = 0; 
        this.animateSpeed = 0; 
        this.boundingBox = new lib2D.TRectangle(this.#pos.x,this.#pos.y,this.#spriteInfo.width, this.#spriteInfo.height); 
        this.rotation = 0; 

    }

    draw(){
        if(this.animateSpeed > 0){
            this.#speedIndex +=this.animateSpeed/100;
            if(this.#speedIndex >= 1){
                this.#index ++; 
                this.#speedIndex = 0; 
                if(this.#index >= this.#spriteInfo.count){
                    this.#index = 0; 
                }
            }
        }
        this.#spcvs.drawSprite(this.#spriteInfo, this.#pos.x, this.#pos.y, this.#index, this.rotation);  
    }
/* implementer en metode for å transelere sprite til en ny posisjon */
    translate(aDx,aDy){
        this.#pos.x += aDx; 
        this.#pos.y += aDy; 
        this.boundingBox.x += aDx; 
        this.boundingBox.y += aDy; 

    }

    get posX(){
        return this.#pos.x; 
    }

    get posY(){
        return this.#pos.y; 
    }

    set posX(aX){
        this.#pos.x = aX; 
        this.boundingBox.x = aX; 
    }

    set posY(aY){
        this.#pos.y = aY; 
        this.boundingBox.y = aY; 
    }

    get left(){
        return this.#pos.x; 
    }

    get right(){
        return this.#pos.x + this.#spriteInfo.width; 
    }

    setPos(aX,aY){
        this.#pos.x = aX; 
        this.#pos.y = aY; 
        this.boundingBox.x = aX;
        this.boundingBox.y = aY;  
    }

    getPos(){
        return this.#pos;
    }

    set index(aIndex){
        this.#index = aIndex; 
    }
    get index(){
        return this.#index; 
    }

    hasCollided(aSpriteInfo){
        return this.boundingBox.isInsideRect(aSpriteInfo.boundingBox); 
    }

    getCenter(){
        return this.boundingBox.center; 
    }
}

export default {
/**
 * @class TSpriteCanvas
 * @description A class that manage sprite canvas for loading sprite sheet
 * @param {HTMLCanvasElement} aCanvas - The canvas element to use
 * @function loadSpriteSheet - Loads a sprite sheet image
 * @param {string} aFileName - The file name of the sprite sheet image
 * @param {function} aLoadedFinal - A callback function to call when sheet is done loading
 */
    TSpriteCanvas: TSpriteCanvas, 

/**
 * @class TSprite
 * @description  A class that manage sprite animations
 * @param{TSpriteCanvas} a SpriteCanvas - The sprite canvas to use
 * @param{object} aSpriteInfo - the sprite information
 * @param{TPosition} aPosition - the position of the sprite
 * @function draw - Draws the sprite on the canvas
 */
    TSprite : TSprite
}