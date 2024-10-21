"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let text = "";
for (let i = 1; i <= 10; i++){
    text += i.toString();
    if(i <10){
    text += ","; 
 }
 }
printOut(text);

let text2 ="";
for (let i = 10; i >= 1; i--){
    text2 += i.toString();
    if(i > 1){
    text2 += ",";
    }
} 
printOut(text2);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const secretNumber = 45; 

let maxNum = 60; 
let guess = 0; 

while(guess !== secretNumber ) {
    guess = Math.floor (Math.random() * maxNum) + 1 ; //Kan også bruke math.ceil(math random()* maxNum); 
}
printOut("I have guessed the right number! It is:" + guess ); 

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const secretNum = 45; 
const maxNumber = 1000000; 
let guesses = 0; 
let guessCount= 0;

const startTime = Date.now();

while(guesses !== secretNum ) {
    guesses = Math.floor(Math.random() * maxNumber) + 1; 
    guessCount++; 
}

const endTime = Date.now(); 

const timeTaken = endTime - startTime; 

printOut("I have guessed the right number! It is: " + guesses ); 
printOut("The pc used " + guessCount + " rounds");
printOut("It used " + timeTaken + " milliseconds"); 

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/ // se på denne 

let primeNumbers = "";

for (let number =2; number < 200; number++) { 
    let isPrime = true; 
    

    let divisor = 2; 
    while( divisor <= Math.sqrt(number)){
        if(number % divisor === 0) {
            isPrime = false; 
            break; 
            } 

    divisor ++; 
    }


if(isPrime){
    primeNumbers += number.toString() + ", ";
    }
}
primeNumbers = primeNumbers.slice(0, -2); 
printOut(primeNumbers);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("The dice rolling extravaganza");
const dice1 = math.ceil(math.random()*6);
const dice2 = math.ceil(math.random()*6);
const dice3 = math.ceil(math.random()*6);
const dice4 = math.ceil(math.random()*6);
const dice5 = math.ceil(math.random()*6);
const dice6 = math.ceil(math.random()*6);

let diceThrow = ""; 
diceThrow += d1.toString() + ",";
diceThrow += d2.toString() + ",";
diceThrow += d3.toString() + ",";
diceThrow += d4.toString() + ",";
diceThrow += d5.toString() + ",";
diceThrow += d6.toString();

printOut("diceThrow" + diceThrow);


const count1 = (diceThrow.match(/1/g)|| "").length;
const count2 = (diceThrow.match(/2/g)|| "").length;
const count3 = (diceThrow.match(/3/g)|| "").length;
const count4 = (diceThrow.match(/4/g)|| "").length;
const count5 = (diceThrow.match(/5/g)|| "").length;
const count6 = (diceThrow.match(/6/g)|| "").length;

const diceCount = "";

diceCount += d1.toString() + ","; //alt shft 
diceCount += d2.toString() + ",";
diceCount += d3.toString() + ",";
diceCount += d4.toString() + ",";
diceCount += d5.toString() + ",";
diceCount += d6.toString();

printOut("diceCount " + diceCount);

const equals1 = (diceCount.match(/1/g) ||"").length; 
printOut("equals1" + equals6.toString());

const equals6  = (diceCount.match(/6/g) ||"").length; 
printOut("equals6" + equals6.toString());

if(equals1 ===6){
    printOut("Full straight");
}
else if (equals6 ===1){
    printOut("Yatzy!");
}

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
