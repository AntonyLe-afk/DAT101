"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");

const wakeUpTime = 7;
const time = 10;
if (wakeUpTime === time){
    printOut ("Take the bus!");
}else if (time === 8){
    printOut ("Take the train!");
}else{
    printOut ("Take the car!");
}




printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");

const part4Number = 5;
if (part4Number > 0){
    printOut ("The number is positive.");
}else if (part4Number < 0){
    printOut ("The number is negative.");
}else{
    printOut ("The number is zero!");
}




printOut("--- Part 6, 7 ----------------------------------------------------------------------------------------------");

const imageMinSize = 4;
const imageMaxSize = 6;
const imageUserSize = Math.floor(Math.random() * 8 ) + 1;
printOut (`Image User Size = ${imageUserSize}`);
if (imageUserSize >= imageMinSize){
    if (imageUserSize <= imageMaxSize){
    printOut ("Thank you");
    }else {
    printOut ("The image is too large");
    }
}else{
    printOut ("The image is too small");
}




printOut("--- Part 8 ----------------------------------------------------------------------------------------------");

const monthList = ["January", "February", "March", "April", "May", "Juni", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

if (monthName.includes ("r")) {
    printOut ("The month is " + monthName + " and you need to take vitamin D");
} else {
    printOut ("The month is " + monthName + " and you do not need to take vitamin D");
}




printOut("--- Part 9 ----------------------------------------------------------------------------------------------");

switch (monthName){
    case "January":
    case "March":
    case "May":
    case "Juli":
    case "August":
    case "October":
    case "December":
        printOut ("31 Days in a month");
        break;
    case "February":
        printOut ("28 Days in a month");
        break;
    default:
        printOut ("30 Days in a month");
}




printOut("--- Part 10 ---------------------------------------------------------------------------------------------");

if (monthName === "March" || monthName === "May"){
    printOut ("Sorry, the gallery is closed");
} else if (monthName === "April"){
    printOut ("The main gallery is closed, but you are welcome to the premises in the building next door!");
} else {
    printOut ("Welcome to my gallery!🤰");
}




