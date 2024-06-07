// ------------------( CHAPTER 01 ALERTS )------------------------

// Que. 01
var foo = "Welcom Visitor";
alert(foo);

// Que. 02
var foo1 = "Error! Please enter a valid password.";
alert(foo1);

// Que. 03
var foo1 = "Error! Please enter a valid password.";
alert(foo1);

// Que. 04
var msg = "Welcome to JS land";
alert(msg);
var msg = "Happy coding!";
alert(msg);

// ------------------( CHAPTER 02 VARIABLES FOR STRINGS )------------------------

// Que. 01
var userName;
// Que. 02
var myName = "ypur full name";
// Que. 03
var message = "Hello world";
alert(message);

// Que. 04
var studentName = "Jhone Doe";
alert(studentName);
console.log(studentName);

var age = "15 year old";
alert(age);
console.log(age);

var certified = "Certified  Mobile Application Development";
alert(certified);
console.log(certified);

// Que. 05
var pizza = "Pizza \n Pizz \n Piz \n Pi \n P"
alert(pizza);
console.log(pizza);

// Que. 06
var email = "My Email Address is example123@example.come";
alert(email);
console.log(email);

// Que. 07
var book = "I am trying to learn from the book A smarter way to learn javascript";
alert(book);
console.log(book);

// Que. 08
var display = "Yah! I can write HTML content through Javascript <br>";
document.write(display);

// Que. 09
var diagram = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬ <br>";
alert(diagram);
console.log(diagram);
document.write(diagram);

// ------------------( CHAPTER 03 VARIABLES FOR NUMBERS )------------------------

// // Que. 01
var myAge = "I am 18 year old";
alert(myAge);
console.log(myAge);

// // Que. 02

// Check if the visitor's count is stored in local storage
let visitCount = localStorage.getItem('visitorCount') || 0;

// Increment the visit count
visitCount++;

// Update the local storage with the new count
localStorage.setItem('visitorCount', visitCount);

// Display the message with the number of visits
alert(`You have visited this site ${visitCount} times`);
console.log(`You have visited this site ${visitCount} times`);

// // Que. 03
var birthYear = "My birth year is 1990 <br> Data type of my declared variable is number"
document.write(birthYear + "<br>");

// Que. 03

// Get visitor name
var visitorName = prompt(" Enter your name:");

// Get product title
var productTitle = prompt("Enter the product title:");

// Get quantity
var quantity = prompt("Enter the quantity:");

// Display the Message
var messageTwo = visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store <br>";

// Display the message in the browser
document.write(messageTwo);
console.log(messageTwo);

// ------------------( CHAPTER 04 LEGAL AND ILLEGAL )------------------------

// // Que. 01
var name = "A variable name can contain only letters, numbers, dollar signs, and underscores. <br><br>";
document.write(name);
console.log(name);


// // Que. 03
var display_1 = "a) Variable names can only contain, number , $ and _ . For : $my_1stVariable <br>";
document.write(display_1);
console.log(display_1);

var display_2 = "b) Variables must begin with a Letter, $ sign or _ . For example $name, _name or name <br>";
document.write(display_2);
console.log(display_2);

var display_3 = "c) Variable names are case sensitive . <br>"
document.write(display_3);
console.log(display_3);

var display_4 = "d) Variable names should not be JS Keywords ."
document.write(display_4);
console.log(display_4);