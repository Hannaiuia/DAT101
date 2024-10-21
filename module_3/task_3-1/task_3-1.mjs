"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
printOut(newLine);


let wakeUpTime = 9;
printOut( "Wakeup time is at 9")

if (wakeUpTime == 7) {
  printOut("I can take the bus to school.");
} else if (wakeUpTime == 8) {
  printOut("I can take the train to school.");
} else {
  printOut("I have to take the car to school.");
}
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let number = -5 ;

if (number > 0) {
  printOut("This is a positive number");
} else if (number < 0) {
  printOut("This is a negative number");
} else {
  printOut("This is zero");
}
  
printOut(newLine);

printOut("--- Part 6 and 7  ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let imageSize = Math.floor(Math.random() * 8) + 1;

printOut( "Uploaded image size is " + imageSize + " MP ");
printOut(newLine);

if (imageSize >= 6){ 
  printOut("This image is to large. Try again"); 
} else if (imageSize >= 4){
  printOut("Thank you for uploading right image size!"); ; 
} else {
  printOut("The image is to small. Try again");
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "November", "December"];
let noOfMonth = monthList.length;
let monthName = monthList[Math.floor(Math.random() * noOfMonth)];

printOut("Selected month is " + monthName);

if (monthName.includes("r")) {
  printOut(" You must take your vitamin D");
} else{
  printOut("You don't need to take your vitamin D!");
}

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut("The month is " + monthName);

if(monthName == "January" ||
  monthName == "March" ||
  monthName == "May" ||
  monthName == "July" ||
  monthName == "August" || 
  monthName == "October " ||
  monthName== "December") 
  {
  printOut("The month contains 31 days");
  }

else if(monthName == "April" ||
        monthName == "June" ||
        monthName == "September" ||
        monthName == "November")
        {
        printOut("The month contains 31 days");
        }

else(monthName == "February")
{
  printOut("The month contains 31 days");
}

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut("Selected month is " + monthName);

if (monthName == "March" || monthName == "May"){
  printOut("Gallery is closed for refurbishment"); 
} 
  else if (monthName == "April") {
  printOut("Gallery has temporary premises in the building next door"); 
} 
  else {
  printOut("Gallery is open"); 
}

printOut(newLine);