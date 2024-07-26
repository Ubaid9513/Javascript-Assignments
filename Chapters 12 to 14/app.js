// document.write(
//     "<h1>Write a program that takes a character [ Number Or String ] in a variable and checks whether the given input is a number, Uppercase letter or Lowercase letter. ( Hint: ASCII  <br> codes:- A=65, Z=90, a=97, z=122). </h1>"
//   );

//   alert(
//     "Input anything I Will tell you whether you Entered a Number or a Letter (in Uppercase or Lowercase)"
//   );

//   var userInput = prompt("Input  Something:");
//   var letterCase = userInput.charCodeAt(userInput);
//   var numberCase = parseInt(userInput);

//   if (letterCase == 65 || letterCase <= 90) {
//     document.write("<h1>" + userInput + " is a Uppercase Letter  </h1>");
//   } else if (letterCase == 97 || letterCase <= 122) {
//     document.write("<h1>" + userInput + " is a Lowercase Letter </h1>");
//   } else if (numberCase == userInput) {
//     document.write("<h1>" + userInput + " is a Number </h1>");
//   } else {
//     document.write("<h1> Invalid Input </h1>");
//   }
// ------------------( CHAPTERS )------------------------

// Que. 01

// function checkCharacterType(character) {
//     const charCode = character.charCodeAt(0);

//     if (charCode >= 48 && charCode <= 57) {
//         console.log(`${character} is a number.`);
//     } else if (charCode >= 65 && charCode <= 90) {
//         console.log(`${character} is an uppercase letter.`);
//     } else if (charCode >= 97 && charCode <= 122) {
//         console.log(`${character} is a lowercase letter.`);
//     } else {
//         console.log(`${character} is neither a number nor a letter.`);
//     }
// }

// // Test the function
// checkCharacterType('A'); // Output: A is an uppercase letter.
// checkCharacterType('a'); // Output: a is a lowercase letter.
// checkCharacterType('5'); // Output: 5 is a number.
// checkCharacterType('@'); // Output: @ is neither a number nor a letter.

// Que No. 01

// var user = prompt("Enter Any Number");
// if(user == "A"){
//     console.log("its a uppercase number");
// }else if(user == "a"){
//     console.log("its a lowercase number");
// }else if(user <= 100){
//     console.log("its number");
// }else if(user == "@"){
//     console.log("@ is neither a number nor a letter");
// }



// Que No. 02
// let num1 = +prompt("Enter First Integer")
// let num2 = +prompt("Enter second Integer")

// if (num1 > num2) {
//     console.log(num1 + " Is Larger Integer");
// } else if (num1 < num2){
//     console.log(num2 + " Is Larger Integer");
// }

// Que No. 03

// let userName = +prompt("Enter A Number")

// if (userName == 0) {
//     console.log(userName + " Given Number Is zero");
// } else if (userName > 0){
//     console.log(userName + " Given Number positive");
// } else if (userName<0){
//     console.log(userName + " Given Number Negative");
// }

// Que No. 04

// let user = prompt("Enter any alphabethic");
// let arr = ["a","e","i","o","u"];
// if(user == arr.length){
//     alert("this  is a vowel value");
//     // return true;
// }else{
//     alert("this  is not a vowel value");
// }

// Que No. 05
let pass1 = prompt("Enter your password");
let pass2 = prompt("Conform password");
if(pass1 || pass2 == ""){
    alert("Please enter your password");
    console.log("Please enter your password");
}else if(pass1 == pass2){
    alert("Correct! The password you entered matches the original password");
    console.log("Correct! The password you entered matches the original password");
}else if(pass1 !== pass2){
    alert("Incorrect password");
    console.log("Incorrect password");
} 