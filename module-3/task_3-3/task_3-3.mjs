"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function printDate() {
    const dateOption = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }
    const toDay = new Date();
    printOut(toDay.toLocaleString("no-Nb", dateOption));
    return toDay;
}

printDate();
printOut(newLine);

printOut("--- Part 2 ------------------------------S----------------------------------------------------------------");
/* Put your code below here!*/

function calcDaysToGTA(){
    const toDay = printDate();
    const gtaDate = new Date("11/19/2026");
    printOut(gtaDate.toLocaleString("no-Nb"));
    const days = (gtaDate - toDay)/ (1000 * 60 * 60 * 24);
    printOut(`There is ${Math.floor(days)} days left to GTA - 6 release.`);
}


calcDaysToGTA();
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function calculateCircle (aRadius){
    const diameter = aRadius * 2;
    const circumference = diameter * Math.PI;
    const area = Math.PI * Math.pow (aRadius, 2);
    printOut (`Diam.: ${diameter}, circum.: ${circumference}, area: ${area}`);
}

calculateCircle (5);

printOut(newLine);


printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function calcRectangle (aWidth, aHeight){
    const circumference = (2 * aWidth) + (2 * aHeight);
    const area = aWidth * aHeight;

    printOut (`circum.: ${circumference}, area: ${area}`);
}

calcRectangle (2, 4);

printOut(newLine);


printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

// Fahrenheit = (Kelvin - 273.15) * 9/5 + 32
// Fahrenheit = (Celsius * 9/5) + 32
// Celsius = (Fahrenheit - 32) * 5/9
// Celsius = Kelvin - 273.15
// Kelvin = (Fahrenheit - 32) * 5/9 + 273.15
// Kelvin = Celsius + 273.15

const TempType = {
  // Enum type er dette. Husk på eksamen!
  Fahrenheit: 1,
  Celsius: 2,
  Kelvin: 3,
};

function convertTemp(aTemp, aType) {
  let fahrenheit = 0;
  let celsius = 0;
  let kelvin = 0;
  // Vi bruker her en switch statement for å sjekke typen.
  switch (aType) {
    case TempType.Fahrenheit:
      fahrenheit = aTemp;
      celsius = ((fahrenheit - 32) * 5) / 9;
      kelvin = ((fahrenheit - 32) * 5) / 9 + 273.15;
      break;
    case TempType.Celsius:
      celsius = aTemp;
      fahrenheit = (celsius * 9) / 5 + 32;
      kelvin = celsius + 273.15;
      break;
    case TempType.Kelvin:
      kelvin = aTemp;
      fahrenheit = ((kelvin - 273.15) * 9) / 5 + 32;
      celsius = kelvin - 273.15;
      break;
  }

  printOut(`${celsius.toFixed(0)} Celsius, ${fahrenheit.toFixed(0)} Fahrenheit, ${kelvin.toFixed(0)} Kelvin`);
}

convertTemp(38, TempType.Celsius);
convertTemp(-40, TempType.Fahrenheit);
convertTemp(0, TempType.Kelvin);

printOut(newLine);


printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function calcVAT(aAmount, aVATGroup) {
  let vat = 0;
  const VATGroup = aVATGroup.toLowerCase();
  switch (VATGroup) {
    case "normal":
      vat = 25;
      break;
    case "food":
      vat = 15;
      break;
    case "hotel":
    case "transport":
    case "cinema":
      vat = 10;
      break;
    default:
      printOut("Unknown VAT group!");
      return; // Vi kan bruke return for å avslutte funksjonen tidlig.
  }
  //if (vat != 0) {
    const vatAmount = (vat * aAmount) / 100;
    const netAmount = aAmount + vatAmount;

    printOut(`Amount: ${aAmount}, VAT: ${vatAmount}, Net: ${netAmount}`);
  //}
}

calcVAT(100, "Normal");
calcVAT(90, "Cinema");
calcVAT(50, "Shampoo");

printOut(newLine);


printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function calcMotion(aSpeed, aDistance, aTime){
  if(aSpeed != undefined && aDistance != undefined && aTime == undefined){
    return aDistance / aSpeed;
  }else if(aSpeed != undefined && aTime != undefined && aDistance == undefined){
    return aSpeed * aTime;
  } else if(aDistance != undefined && aTime != undefined && aSpeed == undefined){
    return aDistance / aTime;
  }else{
    return NaN;
  }
}

let speed = calcMotion(undefined, 100, 2);
printOut(`Speed = ${speed}`);
let time = calcMotion(50, 100, undefined);
printOut(`Time = ${time}`);
let distance = calcMotion(undefined, undefined, 3);
printOut(`Distance = ${distance}`);

printOut(newLine);



printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function justifyText(aText, aMaxSize, aChar, aBefore){
  let length = aText.length;
  while(length < aMaxSize){
    if(aBefore){
      aText = aChar + aText;
    }else{
      aText = aText + aChar;
    }
    length++;
  }
  return aText;
}

let newText = justifyText("Hello World!", 100, "&nbsp;", true);
printOut(newText);

printOut(newLine);



printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let counter = 1;

function calcLeftSide(aRound){
  let sum = 0;
  for(let i = 1; i <= aRound + 1; i++){
    sum += counter;
    counter++;
  }
  return sum;
}

function calcRightSide(aRound){
 let sum = 0;
 for(let i = 1; i <= aRound; i++){
  sum += counter;
  counter++;
 }
 return sum;
}
let mathIsCorrect = true;
for (let round = 1; round <= 200; round++){
  const left = calcLeftSide(round);
  const right = calcRightSide(round);
  if(left !== right){
    printOut(`Left side is not equal to right side for round ${round}`);
    mathIsCorrect = false;
    break; // her kan vi stoppe for-løkken
  }
}

if(mathIsCorrect){
  printOut("Math is fun!!!");
}

printOut(newLine);


/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/


/*let roundCounter = 0;
function PrintText (aText){
    printOut (aText);
    if (roundCounter < 100){
        PrintText (aText);
    }
}

PrintText ("Hei på deg!");*/

function factorial (aValue){
    let sum = 1;
    if (aValue >= 1){
       sum = aValue * factorial (aValue - 1);
    }
    return sum;
}

const result = factorial (6);
printOut (`Factorial of 6 = ${result}`);
printOut (6 * 5 * 4 * 3 * 2 * 1);



printOut(newLine);
