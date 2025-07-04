function Ride_Function(){
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height <52)? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}
function checkAge() {
    var age = document.getElementById("ageInput").value;
    var message = (age >= 18) ? "You can vote!" : "You are not old enough to vote.";
    document.getElementById("result").innerHTML = message;
}
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
        " manufactured in " + Erik.Vehicle_Year;
}
// Constructor function using 'this' and 'new'
function Student(name, grade) {
    this.StudentName = name;
    this.StudentGrade = grade;
}

// Create a new object using the 'new' keyword
var myStudent = new Student("Alice", "10th Grade");

// Function to show the result in the HTML
function showStudentInfo() {
    document.getElementById("New_and_This").innerHTML =
        myStudent.StudentName + " is in " + myStudent.StudentGrade + ".";
}
// the reserved keyword challenge just causes a syntax error

// Reserved keyword as value
let reservedWord = "for";
document.write("The reserved word is: " + reservedWord + "<br>");

// Constructor function
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

let myCar = new Car("Honda", "Civic", 2022);
document.write("My car is a " + myCar.year + " " + myCar.make + " " + myCar.model + ".");

function count_Function(){
    document.getElementById("Counting").innerHTML = Count();
    function Count (){
        var Starting_Point = 9;
        function Plus_One() {Starting_Point += 1;}
        Plus_One();
        return Starting_Point;
    }
}