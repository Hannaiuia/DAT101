"use strict"; 
/**
 * @library lib2D
 * @description A library for classes that manage 2D graphics
 */

/*Lag en klasse Tpoint med en konstruktr som tar inn x og y kordinatorer */
class TPoint{
    x;
    y; 

    constructor(aX,aY){
        this.x = aX; 
        this.y = aY; 
    }
}

/*Lag en klasse TPosition som arver fra TPoint og som har en konstruktør som tar imot x og y kordinatorer.
Og roper på super med disse kordinatene.  
En duplikat funksjon "clone" som returnerer en ny instans av TPosition med samme x og y kordinater.
En funksjon for å finne avstanden mellom to TPoint obkejekter*/


class TPosition extends TPoint{
    constructor(aX,aY){
        super(aX,aY); 
    }

    clone(){
        return new TPosition(this.x, this.y); 
    }

    distanceToPoint(aPoint){
        const dx = this.x - aPoint.x; 
        const dy = this.y - aPoint.y; 
        return Math.hypot(dx, dy); 
    }
}

class TRectangle extends TPosition {
    constructor(aX,aY,aWidth,aHeight){
        super(aX,aY); 
        this.width = aWidth; 
        this.height = aHeight; 
    }

    get left(){
        return this.x; 
    }

    get right(){
        return this.x + this.width; 
    }

    get top(){
        return this.y; 
    }

    get bottom(){
        return this.y + this.height; 
    }

    isInsideRect(aRect){
        if(this.left >= aRect.right) return false; 
        if(this.right <= aRect.left) return false; 
        if(this.top >= aRect.bottom) return false; 
        if(this.bottom <= aRect.top)return false; 
        return true; 
    }
    isPositionInside(aPosition){
        if(this.left>= aPosition.x) return false; 
        if(this.right <= aPosition.x) return false; 
        if(this.top >= aPosition.y)return false;
        if(this.bottom.y <= aPosition) return false; 
        return true; 
    }

    get center(){
        return new TPosition(this.x + this.width / 2, this.y + this.height / 2);
      }
    
      set center(aPoint){
        this.x = aPoint.x - this.width / 2;
        this.y = aPoint.y - this.height / 2;
      }
}

const RAD = Math.PI/180;

class TSineWave{
    #amplitude; 
    #frequency;
    #angle; 
    constructor(aAmplitude, aFrequency){
        this.#amplitude = aAmplitude; 
        this.#frequency = aFrequency; 
        this.#angle = 0; 
    }

    get value(){
        let value = this.#amplitude * Math.sin(this.#angle * RAD); 
        this.#angle += this.#frequency
        return value; 
    }
}

export default{

    /**
     * @class TPoint
     * @description A class representation for x and y point in 2D
     * @param {number} aX - the x coordinate
     * @param {number} aY - the y coordinate
     */
    TPoint, 
    /**
     * @class TPosition 
     * @description A position class  for manipulation of point in 2D.
     * @param {number} aX - the x coordinate
     * @param {number} aY - the y coordinate
     * @extends TPoint
     * @method clone - a method to clone the position object
     * @method distanceToPoint - a method to calculate the distance to another point
     */
    TPosition,

    /** 
     * @class TRectangle
     * @description A class representation for a rectangle in 2D
     * @param {number} aX - the x coordinate
     * @param {number} aY - the y coordinate
     * @param {number} aWidth - the width of the rectangle
     * @param {number} aHeight - the height of the rectangle
     * @param {number} width - the width of the rectangle
     * @param {number} height - the height of the rectangle
     *  @param {number} left - the left side of the rectangle
     * @param {number} right - the right side of the rectangle
     *  @param {number} top - the top side of the rectangle
     * @param {number} bottom - the bottom side of the rectangle
    */
   TRectangle,

   /** 
    * @class TSineWave
    * @description A class representation for sin wave
    * @param {number} aAmplitude - the amplitude of the wave
    * @param {number} aFrequency - the frequency of the wave
    * @property {number}value - the next value of the wave
   */
  TSineWave
}


