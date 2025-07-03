//This is Typeof, Im getting in the habit of adding <br> breaks on most of my things so its cleaner
var mynumber = 42;

document.write("mynumber =" + mynumber + "<br>");

document.write("The type of myVariable is: " + typeof mynumber + "<br>");

//This is type coercion, the numbers add together 
var num = 5;
var str = "10";

var result = num + str;

document.write("Result: " + result + "<br>");
document.write("Type of result: " + typeof result + "<br>");

// 1. Display NaN
var result = 0 / "hello";
document.write("NaN example: " + result + "<br>");

// 2. Use isNaN() to display true
var notANumber = "apple";
document.write("isNaN('apple'): " + isNaN(notANumber) + "<br>");

// 3. Use isNaN() to display false
var actualNumber = 42;
document.write("isNaN(42): " + isNaN(actualNumber) + "<br>");
//infinity number
function showInfinity() {
    var Infinite = 2E310; 
    document.getElementById("infinity").innerHTML = Infinite;
}
//negative infinity
function showNegativeInfinity() {
    var negative = -3E310; 
    document.getElementById("negativeInfinity").innerHTML = negative;
}
//BOOLEOAN assignment
function showTrue() {
    var trueresult = 10 > 5; 
    document.getElementById("trueResult").innerHTML = trueresult;
}

function showFalse() {
    var falseresult = 3 < 1; 
    document.getElementById("falseResult").innerHTML = falseresult;
}
console.log(10 <5);

document.write(10==10);

document.write(10==3);
//these were off the worksheet, I was just copying and writing as i go
S = 1000;
N = 100;
F = 1000;
G = "Apple";
A = "Apple";

document.write((S===N) + "<br>");
document.write((S===F) + "<br>");
document.write((G===A) + "<br>");

//assuming i can name these "var" for better practice and doing what the assignment need
var a = 10;
var b = 10;
document.write((a === b) + "<br>"); 

var c = "banana";
var d = 5;
document.write((c === d) + "<br>"); 

var e = "10";
var f = 10;
document.write((e === f) + "<br>"); 


var g = 20;
var h = 30;
document.write((g === h) + "<br>"); 

// AND operator examples
document.write("AND true: " + (10 > 5 && 20 > 10) + "<br>");  
document.write("AND false: " + (10 > 5 && 3 > 10) + "<br>"); 

// OR operator examples
document.write("OR true: " + (10 > 5 || 3 > 10) + "<br>");    
document.write("OR false: " + (2 > 10 || 3 > 10) + "<br>");   

// NOT operator examples

// This is false because !true = false
document.write("NOT true: " + (!true) + "<br>");

// This is true because !false = true
document.write("NOT false: " + (!false) + "<br>");

//keep adding breaks aswell <br>