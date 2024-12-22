"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");

function todaysDateNorwegian() {
    let today = new Date();
    let formattedDate = today.toLocaleDateString("no-NB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
        
    });
    printOut(formattedDate);
}

todaysDateNorwegian();

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");

//Level Up Your Date Function:
function todaysDateNorwegianPart2() {
    let today = new Date();
    let formattedDate = today.toLocaleDateString("no-NB", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    printOut(formattedDate);  
    return today;
}

// The Hype Train is Leaving the Station: 
function daysUntil2XKORelease(today) {
    const releaseDate = new Date("2025-05-14");
    const timeDifference = releaseDate - today;

    return Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
}

// Time for the Grand Reveal:
function revealDateAndCountdown() {
    let today = todaysDateNorwegianPart2();  
    let daysLeft = daysUntil2XKORelease(today);  
    
    
    printOut("God dag! 🌟 I dag er det: " + today.toLocaleDateString("no-NB", { weekday: "long", year: "numeric", month: "long", day: "numeric" }) +
        "🎉. Det er bare " + daysLeft + " dager til den episke lanseringen av 2XKO!!! 🚀");
}

revealDateAndCountdown();

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");

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

function calculateRectangle(width, height){
    if(width <= 0 || height <= 0){
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
calculateRectangle(1,5);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

const ETempType = {Celsius: 1, Fahrenheit: 2, Kelvin: 3}
function convertTemperature(aTemp, aType){

    let Fahrenheit = 0;
    let Celsius = 0; 
    let Kelvin = 0; 

    switch (aType){
        case ETempType.Celsius:

        printOut("Convert " + aTemp + " Celsius");
        Celsius = aTemp; 
        Fahrenheit = (Celsius *9/5) + 32; 
        Kelvin = Celsius + 273.15; 
        

            break;

        case ETempType.Fahrenheit:
        printOut("Convert " + aTemp + " Fahrenheit");
        Fahrenheit = aTemp; 
        Celsius = (Fahrenheit - 32) * 5/9;
        Kelvin = Celsius + 273.15;

            break; 
            
        case ETempType.Kelvin: 
        printOut("Convert " + aTemp + " Kelvin");
        Kelvin = aTemp; 
        Celsius = Kelvin - 273.15; 
        Fahrenheit = (Celsius * 9/5) + 32;

            break; 
    }
    printOut("Celsius = " + Celsius.toFixed(0));
    printOut("Fahrenheit  = " + Fahrenheit.toFixed(0));
    printOut("Kelvin = " + Kelvin.toFixed(0));
    printOut(newLine); 

}

convertTemperature(47, ETempType.Celsius); 
convertTemperature(100, ETempType.Fahrenheit); 
convertTemperature(300, ETempType.Kelvin); 


printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
printOut(newLine); 

function calculateNetPrice(gross, taxGroup) {
    let group = taxGroup.toLowerCase();
    let vat;

    if (group === "normal") {
        vat = 25;
    } else if (group === "food") {
        vat = 15;
    } else if (group === "hotel" || group === "transport" || group === "cinema") {
        vat = 10;
    } else {
        printOut(taxGroup + " is unknown tax-group!");
        return NaN;
    }

    let net = (100 * gross) / (vat + 100);
    return net;
}

printOut(100 + " is " + calculateNetPrice(100, "normal").toFixed(2) + " without tax");
printOut(150 + " is " + calculateNetPrice(150, "food").toFixed(2) + " without tax");
printOut(50 + " is " + calculateNetPrice(50, "hotel").toFixed(2) + " without tax");
calculateNetPrice(50, "textile");

printOut(newLine);


printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

function calculate({ speed = NaN, time = NaN, distance = NaN } = {}) {

        if(Number.isNaN(speed) + Number.isNaN(time) + Number.isNaN(distance) >1) {
            return " But waittttt, what do we get returned here? You don't have enough values : " + NaN; 
        }

        if(!Number.isNaN(speed) && !Number.isNaN(time) && Number.isNaN(distance)){
            return speed*time; 
        }

        if(!Number.isNaN(speed) && Number.isNaN(time) &&!Number.isNaN(distance)){
            return distance/speed;
        }

        if(Number.isNaN(speed) && !Number.isNaN(time) && !Number.isNaN(distance)){
            return distance/time; 
        }
        return "Waitttttt we dont have enough values! So we get the answer: " + NaN;  
    }
    
    
    printOut("Here we find the distance: " + calculate({speed: 45, time: 60})); 
    printOut("Here we find the time: " + calculate({speed: 45, distance: 900})); 
    printOut("Here we find the speed: " + calculate({time: 60, distance: 900})); 
    printOut(calculate({speed: 45}).toString());
    printOut(calculate({}).toString()); 


printOut("--- Part 8 ----------------------------------------------------------------------------------------------");

function text (textString, maxSize, char, insertChar){
    if (textString.length < maxSize){
        let charToAdd = maxSize - textString.length
        let addedChar = ""; 

        for (let i = 0; i < charToAdd; i++){
            addedChar += (char === " " ? "\u00A0" : char);
        }

        if (insertChar){
            textString = addedChar + textString; 
            
        } else{
           textString = textString + addedChar; 
    }}
    textString = '"' + textString + '"'
    return textString;
}

let t = text("This is a text", 20, "0", true);  
printOut(t);
t = text("This is a text", 20, "0", false);  
printOut(t);


printOut("--- Part 9 ----------------------------------------------------------------------------------------------");

function generateLeft(n) {
    let start = n * n;
    let str = "";
    for (let i = 0; i < n + 1; i++) {
        str += (start + i);
        if (i < n) {
            str += " + ";
        }
    }
    return str;
}

function generateRight(n) {
    let start = n * n + n + 1;
    let str = "";
    for (let i = 0; i < n; i++) {
        str += (start + i);
        if (i < n - 1) {
            str += " + ";
        }
    }
    return str;
}

function printEquations() {
    for (let n = 1; n <= 7; n++) {
        let left = generateLeft(n);
        let right = generateRight(n);
        printOut(left + " = " + right);
    }
    printOut("Maths fun!");
}

printEquations();

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");

function factorial(n) {

    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

let result = factorial(5);
printOut("The factorial of 5 is: " + result);
