//LENGH OUTPUT ASSIGNMENT
let myString = "Hello, world!";
let stringLength = myString.length;

document.getElementById("lengthOutput").textContent = 
  "The length of the string is: " + stringLength;
// CALL LOOP ASSIGNMENT
function Call_Loop() {
  let output = "";
  let x = 1;

  while (x <= 5) {
    output += "Number: " + x + "<br>";
    x++;
  }

  document.getElementById("Loop").innerHTML = output;
}
//FOR LOOOP ASSIGNMENT
function for_loop() {
  let text = "";
  for (let i = 1; i <= 5; i++) {
    text += "Step " + i + "<br>";
  }

  document.getElementById("List_of_Instructions").innerHTML = text;
}
//HTMLBYID ASSIGNMENT
function array_Function() {
  let fruits = ["Apple", "Banana", "Cherry", "Mango"];
  let randomFruit = fruits[2]; // This will grab "Cherry", cherry is in the second slot 0-1-2 so it will grab that

  document.getElementById("Array").innerHTML = 
    "Your selected fruit is: " + randomFruit;
}
// Create an object with const and properties
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2010
};

function constant_function() {
  // Change a property value
  car.year = 2022;
  
  // Add a new property
  car.color = "blue";
  
  // Display updated info
  document.getElementById("Constant").innerHTML =
    "Car: " + car.make + " " + car.model + "<br>" +
    "Year: " + car.year + "<br>" +
    "Color: " + car.color;
}
function showLet() {
  let message = "This is a let variable";
  document.getElementById("output").textContent = message;
}
// A simple function that returns the sum of two numbers
function addNumbers(a, b) {
  return a + b; 
}

function showResult() {
  let total = addNumbers(1, 68);
  document.getElementById("result").textContent = "1 + 68 = " + total;
}
//Im honestly getting bored of using random stuff so im just gonna try and make what i can anime based
let animeCharacter = {
  name: "Naruto Uzumaki",
  anime: "Naruto",
  ability: "Shadow Clone Jutsu",
  
  // descirbing the character
  describe: function() {
    return this.name + " from " + this.anime + " can use " + this.ability + ".";
  }
};

function showAnime() {
  document.getElementById("animeInfo").textContent = animeCharacter.describe();
}
//break and continue challenge, with a loop abnout naruto c:
// [i] is used as a counter in loops, 
function breakLoop() {
  let output = "";
  let villains = ["Madara", "Kaguya", "Obito", "Zabuza", "Pain"];

  for (let i = 0; i < villains.length; i++) {
    if (villains[i] === "Obito") {
      output += "Found Obito, stopping the loop!<br>";
      break;  // stop when Obito is found
    }
    output += villains[i] + "<br>";
  }

  document.getElementById("breakOutput").innerHTML = output;
}

function continueLoop() {
  let output = "";
  let heroes = ["Naruto", "Sasuke", "Sakura", "Kakashi", "Rock Lee"];

  for (let i = 0; i < heroes.length; i++) {
    if (heroes[i] === "Sakura") {
      output += "Skipping Sakura...<br>";
      continue;  // its stopping at sakura
    }
    output += heroes[i] + "<br>";
  }

  document.getElementById("continueOutput").innerHTML = output;
}

