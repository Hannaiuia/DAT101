"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

//Two loop option 

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

// One loop option 

let text3 = "";
let text4 = "";

for (let num = 1; num <= 10; num++) {
    text3 += num.toString() 
    text4 += (11- num).toString() 
    if(num <10){
    text3 += ",";
    text4 += ",";
    }  
}
printOut(text3);
printOut(text4);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const secretNumber = 45; 

let maxNum = 60; 
let guess = 0; 

while(guess !== secretNumber ) {
    guess = Math.floor (Math.random() * maxNum) + 1 ; 
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
/* Put your code below here!*/ 
let primeNumbers = "";

for (let number = 2; number < 200; number++) { 
    let isPrime = true; 
    

    let divisor = 2; 
    while( divisor <= Math.sqrt(number)){
        if(number % divisor == 0) {
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

for (let rowNum = 1; rowNum <= 7; rowNum++) { 
    let row = "";  

    for (let columnNum= 1; columnNum <= 9; columnNum++) {  
       row += "K"+rowNum + "R" + columnNum + " ";  
    }

    printOut(row.trim());  
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let A = 0;
let B = 0;
let C = 0;
let D = 0;
let E = 0;
let F = 0;

for(let student = 1; student < 6;  student++ ){
    let randomScore = Math.ceil(Math.random()*236);
    let percentage = (randomScore / 236) * 100;
    let grade; 

    if(percentage >= 89){
        grade = "A";
        A++;
    }
    else if(percentage >= 77){
        grade = "B";
        B++;
    }
    else if (percentage >= 65){
        grade = "C";
        C++;
    }
    else if (percentage >= 53){
        grade = "D";
        D++;
    }
    else if (percentage >= 41){
        grade = "E";
        E++;
    }
    else{
        grade = "F";
        F++;
    }

    printOut("Student " + student + " Score: " + randomScore + " (" + percentage.toFixed(2) + "%) The grade will therfore be : " + grade);

}

printOut("Grade order:"); 

if (A > 0) {
    printOut("A: " + A);
}

if (B > 0){
    printOut("B: " + B);
} 

if (C > 0){
    printOut("C: " + C);
}

if (D > 0){
    printOut("D: " + D);
}

if (E > 0){
    printOut("E: " + E);
}

if (F > 0){
    printOut("F: " + F);
} 


printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

//Full Straight  
let dice1 = 0; 
let dice2 = 0; 
let dice3 = 0; 
let dice4 = 0; 
let dice5 = 0; 
let dice6 = 0; 

let countThrows = 0;
let fullStraight = false; 

while( fullStraight != true ) {

    countThrows++; 

    dice1 = Math.ceil(Math.random() * 6);
    dice2 = Math.ceil(Math.random() * 6);
    dice3 = Math.ceil(Math.random() * 6);
    dice4 = Math.ceil(Math.random() * 6);
    dice5 = Math.ceil(Math.random() * 6);
    dice6 = Math.ceil(Math.random() * 6);

    if ((dice1 === 1 || dice2 === 1 || dice3 === 1 || dice4 === 1 || dice5 === 1 || dice6 === 1) &&
        (dice1 === 2 || dice2 === 2 || dice3 === 2 || dice4 === 2 || dice5 === 2 || dice6 === 2) &&
        (dice1 === 3 || dice2 === 3 || dice3 === 3 || dice4 === 3 || dice5 === 3 || dice6 === 3) &&
        (dice1 === 4 || dice2 === 4 || dice3 === 4 || dice4 === 4 || dice5 === 4 || dice6 === 4) &&
        (dice1 === 5 || dice2 === 5 || dice3 === 5 || dice4 === 5 || dice5 === 5 || dice6 === 5) &&
        (dice1 === 6 || dice2 === 6 || dice3 === 6 || dice4 === 6 || dice5 === 6 || dice6 === 6)) {
        fullStraight = true;
    }

}
printOut("It took " + countThrows + " throws to get a full straight!");

//3 pairs 
countThrows = 0;
let pairs; 
let countNumb = 0; 

while (pairs != 3){
    countThrows ++;
    let pairs = 0; 

    dice1 = Math.ceil(Math.random() * 6);
    dice2 = Math.ceil(Math.random() * 6);
    dice3 = Math.ceil(Math.random() * 6);
    dice4 = Math.ceil(Math.random() * 6);
    dice5 = Math.ceil(Math.random() * 6);
    dice6 = Math.ceil(Math.random() * 6);

    for(let numb = 1; numb < 7; numb++){
        
        countNumb = 0; 

        if(dice1 == numb){
        countNumb++; 
        }
        if(dice2 == numb){
        countNumb++;
        }
        if(dice3 == numb){
        countNumb++; 
        }
        if(dice4 == numb){
        countNumb++; 
        }
        if(dice5 == numb){
        countNumb++; 
        }
        if(dice6 == numb){
        countNumb++; 
        }

        if(countNumb == 2){
        pairs++;  
        }
        
    }

    if(pairs == 3){
     break; 
    }
}

printOut ("It took " + countThrows + " throws to get three pairs!"); 

//2 of a kind and 4 of a kind (tower)
countThrows = 0; 
let tower = false; 

while(tower != true){
    countThrows++; 

    dice1 = Math.ceil(Math.random() * 6);
    dice2 = Math.ceil(Math.random() * 6);
    dice3 = Math.ceil(Math.random() * 6);
    dice4 = Math.ceil(Math.random() * 6);
    dice5 = Math.ceil(Math.random() * 6);
    dice6 = Math.ceil(Math.random() * 6);

    let countNumb2 = 0; 
    let countNumb4 = 0; 

    for(let numb = 1; numb < 7; numb++){
        countNumb = 0; 

        if (dice1 == numb){
        countNumb++;
        }
        if (dice2 == numb){
        countNumb++;
        }
        if (dice3 == numb){
        countNumb++;
        }
        if (dice4 == numb){
        countNumb++;
        }
        if (dice5 == numb){
        countNumb++;
        }
        if (dice6 == numb){
        countNumb++;
        }


        if (countNumb == 2){
        countNumb2++;
        } 
        if (countNumb == 4){
        countNumb4++;
        } 
    }

    if (countNumb2 == 1 && countNumb4 == 1) {
        tower = true;
    }
}
printOut("It took " + countThrows + " throws to get 2 of a kind and 4 of a kind (tower)!");

//Yahtzee 


countThrows = 0;
let Yahtzee = false; 

while( Yahtzee != true){
    countThrows++; 

    dice1 = Math.ceil(Math.random() * 6);
    dice2 = Math.ceil(Math.random() * 6);
    dice3 = Math.ceil(Math.random() * 6);
    dice4 = Math.ceil(Math.random() * 6);
    dice5 = Math.ceil(Math.random() * 6);
    dice6 = Math.ceil(Math.random() * 6);

    if( dice1 == dice2  && dice2 == dice3  && dice3 == dice4  && dice5 == dice6){
        Yahtzee = true; 
    }
}
printOut("It took " + countThrows + " throws to get Yahtzee!");
