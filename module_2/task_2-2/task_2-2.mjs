"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let y = 2 + 3 * 2 - 4 * 6;
let x = 2 + 3 * (2 - 4) * 6;
printOut("With parentheses: " + x);
printOut(newLine); 
printOut("Without parentheses: "+ y);
printOut(newLine); 

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const meters = 25;
const cm = 34; 

let totalCm = (meters * 100) + cm; 

let inches = totalCm / 2.54;
const roundedInches = inches.toFixed(2);

printOut("Inches: " + roundedInches);
printOut(newLine); 


printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let days = 3;
let hours = 12;
let minutes = 14;
let seconds = 45; 

let daysToMinutes = days * 1440;
let hoursToMinutes = hours * 60;
let secondsToMinutes = seconds/60;

let totalMinutes = daysToMinutes + hoursToMinutes + secondsToMinutes + minutes; 

printOut("The total minutes: " + totalMinutes.toString()); 
printOut(newLine); 

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

totalMinutes = 6322.52;

days = Math.floor(totalMinutes / 1440); 
let remainingMinutes = totalMinutes - (days * 1440);

hours = Math.floor(remainingMinutes / 60);
remainingMinutes = remainingMinutes - (hours * 60);

minutes = Math.floor(remainingMinutes);

seconds = Math.floor((remainingMinutes - minutes) * 60);

printOut(" Days: " + days + " Hours: " + hours + " Minutes: " + minutes + " Seconds: " + seconds);
printOut(newLine); 


printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const NOK = 76 / 8.6;
const USD = 8.6 / 76;
let amountUSD = 54;

const amountNOK = Math.round (amountUSD * NOK);

amountUSD = Math.round(amountNOK * USD); 

printOut(amountUSD + " dollar is " + amountNOK + " kroner ");
printOut(newLine); 
printOut(amountNOK + " kroner is " + amountUSD + " dollars");
printOut(newLine); 

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const sentence = "There is much between heaven and earth that we do not understand."

let numberOfCharacters = sentence.length;
printOut(" Number of Characters: " + numberOfCharacters.toString());
printOut(newLine); 

let position = 19; 
let character = sentence[position]; 
printOut(" Character at position 19: " + character);
printOut(newLine); 

position = 35;
character = sentence.slice(position, position + 8);
printOut(" Position number 35 + 8 forward:" + character); 
printOut(newLine); 


let letter ="earth"
let index = sentence.indexOf(letter);
printOut(" The index in earth starts at: " + index); 
printOut(newLine); 

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let result = 5 > 3; 
printOut(result.toString());
printOut(newLine); 

let result2 = 7 >= 7; 
printOut(result2.toString());
printOut(newLine); 

let result3 = "a" > "b"; 
printOut(result3.toString());
printOut(newLine); 

let result4 = "1" < "a";
printOut(result4.toString());
printOut(newLine); 

let result5 = "2500" < "abcd";
printOut(result5.toString());
printOut(newLine); 

let result6 = "Arne" !== "Thomas";
printOut(result6.toString());
printOut(newLine); 

let result7 = "abcd" > "bcd";
printOut(result7.toString());
printOut(newLine); 

let result8 = 2 == 5;
printOut(result8.toString());
printOut(newLine); 

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const text = "253";
let number = Number(text);
printOut(number.toString());
printOut(newLine); 

const text2 = "57.23";
let number2 = Number(text2);
printOut(number2.toString());
printOut(newLine);

const text3 = "25 kroner";
let number3 = parseFloat(text3);
printOut(number3 + " kroner".toString());
printOut(newLine); 

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let r = Math.floor(Math.random() * 360) + 1;

printOut("The randomly generated number is: " + r.toString());
printOut(newLine); 

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const totalDays = 131;
const weeks = Math.floor (totalDays/7);
days = totalDays % 7; 

printOut(" Weeks: " + weeks + " Days: " + days);
printOut(newLine); 