// ------------------( CHAPTERS )------------------------

// Que. 01
document.write(
    "<h1>Write a program that takes a character [ Number Or String ] in a variable and checks whether the given input is a number, Uppercase letter or Lowercase letter. ( Hint: ASCII  <br> codes:- A=65, Z=90, a=97, z=122). </h1>"
  );
  
  alert(
    "Input anything I Will tell you whether you Entered a Number or a Letter (in Uppercase or Lowercase)"
  );
  
  var userInput = prompt("Input  Something:");
  var letterCase = userInput.charCodeAt(userInput);
  var numberCase = parseInt(userInput);
  
  if (letterCase == 65 || letterCase <= 90) {
    document.write("<h1>" + userInput + " is a Uppercase Letter  </h1>");
  } else if (letterCase == 97 || letterCase <= 122) {
    document.write("<h1>" + userInput + " is a Lowercase Letter </h1>");
  } else if (numberCase == userInput) {
    document.write("<h1>" + userInput + " is a Number </h1>");
  } else {
    document.write("<h1> Invalid Input </h1>");
  }