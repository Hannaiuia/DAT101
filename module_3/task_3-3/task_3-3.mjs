"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function todaysDateNorwegian() {
    let today = new Date();
    let formattedDate = today.toLocaleDateString("no-NB", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    printOut(formattedDate);
}

todaysDateNorwegian();

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Gjøre på ny senere

//Level Up Your Date Function:
function todaysDateNorwegianPart2() {
    let today = new Date();
    let formattedDate = today.toLocaleDateString("no-NB", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    return { today, formattedDate }; 
}

// The Hype Train is Leaving the Station: 
function daysUntil2XKORelease(today) {
    const releaseDate = new Date("2025-05-14");
    const timeDifference = releaseDate - today;

    return Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
}

// Time for the Grand Reveal:
function revealDateAndCountdown() {
    const { today, formattedDate } = todaysDateNorwegianPart2(); 
    const daysLeft = daysUntil2XKORelease(today); 

    const message = "God dag! 🌟 I dag er det:" + formattedDate + "🎉. Det er bare "+ daysLeft + " dager til den episke lanseringen av 2XKO!!! 🚀";

    printOut(message); 
}
revealDateAndCountdown();


printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function circle(radius){
    if(radius <= 0 ){
        printOut("Radius should be a positive number for this to work");
        return; 
    }

    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * Math.pow(radius, 2);

    printOut("Diameter: "+ diameter);
    printOut("Circumference:"+ circumference.toFixed(2));
    printOut("Area: " + area.toFixed(2));
}
circle(5);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function solveRectangleProperties(width, height){
    if(width <= 0 ||height <= 0){
        printOut("Width and height needs to be a positive numbers");
        return; 
}

    const area = width * height; 
    const circumferenceRectangle = 2 * (width + height); 

    printOut("The width is: " + width);
    printOut("The height is: " + height);

    printOut(newLine);

    printOut("The area of the rectangle: " + area);
    printOut("The circumference of the rectangle is: " + circumferenceRectangle); 
}
solveRectangleProperties(1,5);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const ETempType = {Celsius: 1, Fahrenheit: 2, Kelvin: 3}
function convertTemperature(aTemp, aType){

    let Fahrenheit = 0;
    let Celsius = 0; 
    let Kelvin = 0; 

    switch (aType){
        case ETempType.Celsius:

        printOut("Convert from Celsius");
        Celsius = aTemp; 
        Fahrenheit = (Celsius *9/5) + 32; 
        Kelvin = Celsius + 237.15; 
        printOut(newLine);

            break;

        case ETempType.Fahrenheit:
        printOut("Convert from Fahrenheit");
        Fahrenheit = aTemp; 
        Celsius = (Fahrenheit - 32) * 5/9;
        Kelvin = Celsius + 273.15;
        printOut(newLine);

            break; 
            
        case ETempType.Kelvin: 
        printOut("convert from Kelvin");
        Kelvin = aTemp; 
        Celsius = Kelvin - 237.15; 
        Fahrenheit = (Celsius * 9/5) + 32;
        printOut(newLine); 

            break; 
    }
    printOut("Celsius = " + Celsius.toFixed(0));
    printOut("Fahrenheit  = " + Fahrenheit.toFixed(0));
    printOut("Celsius = " + Kelvin.toFixed(0) );

}

convertTemperature(37, ETempType.Celsius); 
convertTemperature(37, ETempType.Fahrenheit); 
convertTemperature(37, ETempType.Kelvin); 

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/



printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
SE PÅ DENNE */

function calculateSpeedDistanceTime (speed, distance, time){
    let missingInfo = 0;

    if(speed == undefined){
        missingInfo ++; 
    }
    
    if(distance == undefined){
        missingInfo ++; 
    }

    if(time == undefined){
        missingInfo ++;
    }

    if(missingInfo > 1){
        return NaN; 
    }

    if(speed == undefined){
        return distance/time;
    }

    if(distance == undefined){
        return time * speed; 
    }

    if(time ==undefined ){
        return distance/speed; 
    }

    return NaN; 
}

/*?????

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function text (textString, maxSize, char, insertBefore){
    if (textString.length < maxSize){
        let charToAdd = maxSize - textString.length

        let addedChar = " "; 
        for (let i = 0; i < charToAdd; i++){
            addedChar += char; 
        }

        if (insertBefore){
            textString = addedChar + textString;

        } else{
            textString = textString + addedChar; 
        }
        
    }

    printOut(textString); 

    return textString;
}

text("Hola", 7, "*", true);  
text("Hola", 7, "*", false);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
