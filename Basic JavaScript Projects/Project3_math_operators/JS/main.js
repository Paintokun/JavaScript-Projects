// Below are all the functions for all the math equations, with variables and theyre linked tot he html doc
function addNumbers() {
    let result = 1 + 1;
    document.getElementById("Math").innerHTML = "1 + 1 =" + result;
}
function subtraction_function() {
    var Subtraction = 1-1;
    document.getElementById("Math2").innerHTML = "1 - 1 ="+ Subtraction;
}
function multiplication(){
    var Multiplication = 6 * 8;
    document.getElementById("Multiply").innerHTML = "6 x 8 =" +Multiplication;
}
function division(){
    var divide = 48/6;
    document.getElementById("divide").innerHTML = "48/6 =" +divide;
}
function more_math(){
    var Multiple = (1+2) * 10 /2- 5;
    document.getElementById("Multiples").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals  " + Multiple;
}
function modulus_Operator(){
    var simple_Math = 25 % 6;
    document.getElementById("Dividen").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math
}
function negative_Operation(){
    var x = 10;
    document.getElementById("Negative").innerHTML= -x;
}
//these two are the incremented and decremented part of the assignment
var x1 = 5;
x1++;
document.write("Incremented: " +x1 + "<br>");

var x2 = 5.25;
x2--;
document.write("Decremented:" + x2 + "<br>");
//these two below are the random math equations
window.alert(Math.random());

window.alert(Math.random() * 100);

//Math Object Challenge
var result = Math.sqrt(25);

document.write("The square root of 25 is: " + result + "<br>");

var round = Math.round(5.9);

document.write("Rounding to the closest SVGAnimatedInteger of 5.9: " + round);
