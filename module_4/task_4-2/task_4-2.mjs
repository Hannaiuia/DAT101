"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");


let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]; 

for (let n = 0; n < numbers.length; n++){
    printOut(numbers[n].toString()); 
}

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");

printOut(numbers.join(",")); 

printOut(newLine);


printOut("--- Part 3 ----------------------------------------------------------------------------------------------");

const greet = "Hello there, how are you?";

let splitArray = greet.split(" "); 

for (let i = 0; i < splitArray.length; i++) {
  printOut("Word number: " + (i + 1) + ", index: " + i + ", word: " + splitArray[i]);
}

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");

let girlNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid",
"Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth",  "Kristin"];

function removeElement(array, element){

    const index = array.indexOf(element); 
    if(index !== -1){
        array.splice(index, 1); 
        printOut("The element " + element + " was removed from the array"); 
    } else {
        printOut("The element " + element + " does not excist in the array"); 
}
}

printOut("The original array:" + girlNames);

printOut(newLine);

removeElement(girlNames, "Inger"); 
printOut("The updated array:" + girlNames);

printOut(newLine);

removeElement(girlNames, "Sandra"); 

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

let boyNames = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah",
"Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor", 
"Magnus"]; 

const allNames = girlNames.concat(boyNames);
printOut("The new array: " + allNames); 

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

class TBook{
    #title; 
    #author; 
    #ISBN;   
  
    constructor(title, author, ISBN) {
      this.#title = title;
      this.#author = author;
      this.#ISBN = ISBN;
}

returnTextString(){ //decided to name it returnTextString because toString is the name of a function, and so be a bit confusing 
    return "Title: " + this.#title + "Author: " + this.#author + "ISBN" + this.#ISBN; 
}
};

const books = [
    new TBook("The Housemaid", "Freida McFadden", "978-1538742570"),
    new TBook("The Silent Patient", "Alex Michaelides", "978-1250301697"),
    new TBook("Me Before You", "Jojo Moyes", "978-0143124542")
];

for (let b = 0; b < books.length; b++) {
    printOut(books[b].returnTextString());
}
  
printOut(newLine);


printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

const EWeekDays = {
    WeekDay1: { value: 0x01, name: "Mandag" },
    WeekDay2: { value: 0x02, name: "Tirsdag" },
    WeekDay3: { value: 0x04, name: "Onsdag" },
    WeekDay4: { value: 0x08, name: "Torsdag" },
    WeekDay5: { value: 0x10, name: "Fredag" },
    WeekDay6: { value: 0x20, name: "Lørdag" },
    WeekDay7: { value: 0x40, name: "Søndag" },
    Workdays: { value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Arbeidsdager" },
    Weekends: { value: 0x20 + 0x40, name: "Helg" },
};

const keys = Object.keys(EWeekDays);

for(let w = 0; w < keys.length; w++){
        const key = keys[w];
        const element = EWeekDays[key];
        printOut("Key: " + key + " Value: { value: " + element.value + " name: " + element.name + " }");       
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");

let randomNumbers = []; 

for(let r = 0; r < 35; r++){
    randomNumbers.push(Math.floor(Math.random() * 20) + 1);
}

let ascending = randomNumbers.slice().sort(function(a, b) {
    return a - b; 
});

let descending = randomNumbers.slice().sort(function(a, b) {
    return b - a; 
}); 

printOut("The original array:" + randomNumbers.toString());
printOut("Ascending: " + ascending.toString());
printOut("Descending " + descending.toString());


printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/*se på senere */

let frequencyArray = new Array(20).fill(0);
for (let i = 0; i < randomNumbers.length; i++) {
    frequencyArray[randomNumbers[i] - 1]++; 
}

let numberFrequencyPairs = [];
for (let num = 1; num <= 20; num++) {
    if (frequencyArray[num - 1] > 0) {
        numberFrequencyPairs.push([num, frequencyArray[num - 1]]);
    }
}

numberFrequencyPairs.sort(function(a, b) {
    if (b[1] === a[1]) {
        return a[0] - b[0]; 
    }
    return b[1] - a[1]; 
});

printOut("Numbers and their frequencies:");
for (let i = 0; i < numberFrequencyPairs.length; i++) {
    printOut("Number:" + numberFrequencyPairs[i][0] + " Frequency: " + numberFrequencyPairs[i][1]);
}

let groupedByFrequency = {};
for (let i = 0; i < numberFrequencyPairs.length; i++) {
    let frequency = numberFrequencyPairs[i][1];
    let number = numberFrequencyPairs[i][0];
    if (!groupedByFrequency[frequency]) {
        groupedByFrequency[frequency] = [];
    }
    groupedByFrequency[frequency].push(number);
}

printOut(newLine);

printOut("Frequencies and corresponding numbers:");
let sortedFrequencies = Object.keys(groupedByFrequency).map(Number).sort((a, b) => b - a);
for (let i = 0; i < sortedFrequencies.length; i++) {
    let frequency = sortedFrequencies[i];
    printOut("Frequency: "+ frequency + ",Numbers: " + groupedByFrequency[frequency].join(", "));
}

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");

let array = [];

for (let row = 1; row < 6; row++) {
    let rowArray = []; 

    for (let col = 1; col < 10; col++) {
        rowArray.push("Row:" + row + ", Column:" + col); 
    }

    array.push(rowArray);
}

for (let row = 0; row < 5; row++) {
    let rowOutput = "";  
    
    for (let col = 0; col < 9; col++) {
        rowOutput += array[row][col] + " "; 
    }
    printOut(rowOutput); 
}

printOut(newLine);