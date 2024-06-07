// ------------------( CHAPTERS )------------------------

// Que. 01
var user = prompt("Enter the city");
var cities = ["karachi","lahore","islamabad","multan","peshawar","hyderabad"]
if(user === "karachi"){
    alert("Welcome to city of lights");
}else{
    alert("Welcome the city");
}

// Que. 02
var userGender = prompt("Enter your Gender");
if (userGender === "male") {
  alert("Good Morning Sir");
} else {
  if (userGender === "female") {
    alert("Good Morning Ma’am");
  } else {
    alert("Enter Gender");
  }
}

// Que. 03
var userInp = prompt("Enter the road traffic signal color");
if (userInp === "red") {
  alert("Must Stop");
} else if (userInp === "yellow") {
  alert("Ready to Move");
} else if (userInp === "green") {
  alert("Move Now");
}else{
    alert("Enter traffic signal color");
}

// Que. 04
var userInput = prompt("Enter your car fuel in litres");
if(userInput <= 0.25){
    alert("Please refill the fuel in your car")
}else{
    alert("fuel is full")
}

// Que. 07
