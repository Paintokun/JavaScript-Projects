// Global variable
var globalMessage = "Global Message";

function testFunction() {
    // Local variable
    let localMessage = "Local Message";
    
    console.log(globalMessage);
    console.log(localMessage);
    
    // Function ith an error
    let result = addNumbers(5, "seven"); 

    console.log("Result of addNumbers:", result);
}

// Function with ewrror
function addNumbers(a, b) {
    console.log("Inside addNumbers - a:", a, "b:", b);
    return (a + b) * 2;
}
//also I was researching it and  apparently let is used more then var, var never changes but let can change.

function displayGreeting() {
    let hour = new Date().getHours();

    if (hour < 12) {
        document.getElementById("greeting").innerText = "Good morning!";
    } else if (hour < 18) {
        document.getElementById("greeting").innerText = "Good afternoon!";
    } else {
        document.getElementById("greeting").innerText = "Good evening!";
    }
}
//this is pretty cool, got some help with it.

function checkNumber() {
    let number = 10;

    if (number > 5) {
        document.getElementById("message").innerText = "The number is greater than 5!";
    }
}
function myIfStatement() {
    let x = 3;

    if (x === 3) {
        document.getElementById("output").innerText = "x is 3!";
    }
}
function checkAge() {
    // Get value from the input field
    let age = document.getElementById("ageInput").value;

    // Convert it to a number, this also turns the string into a number
    age = Number(age);

    // Use if/else to check age
    if (age >= 17) {
        document.getElementById("resultMessage").innerText = "You're old enough to watch R-rated movies!";
    } else {
        document.getElementById("resultMessage").innerText = "Sorry, you're not old enough for R-rated movies.";
    }
}
//else if assignment
function Time_function() {
    var Time = new Date().getHours();
    var Reply;

    if (Time < 12 && Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 && Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }

    document.getElementById("Time_of_day").innerHTML = Reply;
}
