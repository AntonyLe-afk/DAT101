"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const orgMatExp = "2 + 3 * 2 - 4 * 6";
const newMatExp = "2 + (3 * 2 - 4) * 6";
const part1Answer = 2 + (3 * 2 - 4) * 6;

printOut (orgMatExp);
printOut (newMatExp);
printOut (part1Answer);


const newMatExp2 = "2 + 3 * (2 - 4) * 6";
const part1Answer2 = 2 + 3 * (2 - 4) * 6;

printOut (newMatExp2);
printOut (part1Answer2);




printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const millimeters = (25 * 1000) + (34 * 10);
const millPrInch = 25.4;
const sumPart2 = millimeters / millPrInch;

printOut (millimeters + " Millimeters");
printOut (millPrInch + " Inches");
printOut (sumPart2.toFixed(2) + " Inches");




printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// Vi konverterer dagene, timene, og sekundene om til minutter.

const part3Days = 3;
printOut (part3Days + " Days");
const part3Hours = 12;
printOut (part3Hours + " Hours");
const part3Minutes = 14;
printOut (part3Minutes + " Minutes");
const part3Seconds = 34;
printOut (part3Seconds + " Seconds");

const part3Answer = (part3Days * 24 * 60) + (part3Hours * 60) + part3Minutes + (part3Seconds / 60);
printOut (part3Answer.toFixed(2) + " minutes");




printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

//Step 1
const p4totaldays = (6322.52) / (24 * 60);
printOut (p4totaldays.toFixed(6) + " Total Days");
const p4wholedays = Math.floor(4);
printOut (p4wholedays + " Whole Days");

//Step 2
const p4restdays = p4totaldays - p4wholedays;
printOut (p4restdays.toFixed(6) + " Leftover Fraction Days");
const p4totalhours = p4restdays * 24;
printOut (p4totalhours.toFixed(4) + " Total Hours");
const p4wholehours = Math.floor(9);
printOut (p4wholehours + " Whole Hours");

//Step 3
const p4resthours = p4totalhours - p4wholehours;
printOut (p4resthours.toFixed(4) + " Leftover Fraction Hours");
const p4totalminutes = p4resthours * 60;
printOut (p4totalminutes.toFixed(2) + " Total Minutes");
const p4wholeminutes = Math.floor(22);
printOut (p4wholeminutes + " Whole Minutes");

//Step 4
const p4restminutes = p4totalminutes - p4wholeminutes;
printOut (p4restminutes.toFixed(2) + " Leftover Fraction Minutes");
const p4totalseconds = p4restminutes * 60;
printOut (p4totalseconds.toFixed(1) + " Total Seconds");
const p4wholeseconds = Math.floor(31);
printOut (p4wholeseconds + " Whole Seconds");




printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const NOKrate = 76 / 8.6;
printOut (NOKrate + " NOK rate");
const USDrate = 8.6 / 76;
printOut (USDrate + " USD rate");

let Kroner = Math.round (54 * NOKrate);
printOut (Kroner + " Kroner");

let Dollar = Math.round (477 * USDrate);
printOut (Dollar + " Dollar");




printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let text = "There is much between heaven and earth that we do not understand.";
printOut (text);

printOut (text.length);
printOut (text.charAt(19));
printOut (text.substring(35, 43));
printOut (text.indexOf ("earth"));




printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

if (5 > 3);
    printOut ("5 is greater than 3");

if (7 >= 7);
    printOut ("7 is greater or equal to 7");

if ("a" > "b");
    printOut ("a is greater than b");

if ("1" < "a");
    printOut ("1 is less than a");

if ("2500" < "abcd");
    printOut ("2500 is less than abcd");

if ("arne" !== "thomas");
    printOut ("arne does not equal thomas");

if (2 === 5);
    printOut ("2 does not equal 5");

if ("abcd" > "bcd");
    printOut ("abcd is greater than bcd");




printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

//Punkt 1
const text1 = Number.parseInt ("254");
printOut (text1);
const text2 = Number.parseFloat ("254");
printOut (text2);

//Punkt 2
const text3 = Number.parseInt ("57.23");
printOut (text3);
const text4 = Number.parseFloat ("57.23");
printOut (text4);

//Punkt 3
const text5 = Number.parseFloat ("25 kroner");
printOut (text5 + " kroner");
const text6 = Number.parseFloat ("25 kroner");
printOut (text6 + " kroner");




printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let r = Math.floor (Math.random () * 360) + 1;
printOut (r);





/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let division = Math.floor (131 / 7);

let fullweeks = division;
let modulus = 131 % 7;

printOut (fullweeks);
printOut (modulus);