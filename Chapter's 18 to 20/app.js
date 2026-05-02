// Question No. 01
document.writeln("Question No. 01", "<br>")

var arr = [];
arr[0] = [0, 1, 2];
arr[1] = [3, 4, 5];
arr[2] = [6, 7, 8];

console.log(arr);
document.writeln("Answer console m hai", "<br><br><br>")



// Question No. 02
document.writeln("Question No. 02", "<br><br>")

var arr01 = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1],
]

for (var i = 0; i < arr01.length; i++) {
    document.writeln(arr01[i] + "<br>")
}

document.writeln("<br><br>")

// Question No. 03
document.writeln("Question No. 03", "<br><br>")

var count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < count.length; i++) {
    document.writeln(count[i], "<br>")
}


document.writeln("<br><br>")

// Question No. 04
document.writeln("Question No. 04", "<br><br>")

var tableNum = +prompt("Enter a number to show its multiplication table");
var tableLength = +prompt("Enter length multiplication table");


document.writeln("Multiplication Table of " + tableNum + " Length " + tableLength, "<br><br>")
for (let i = 1; i <= tableLength; i++) {
    document.writeln(tableNum + " x " + i + " = " + tableNum * i + "<br>")
}


document.writeln("<br><br>")


// Question No. 05
document.writeln("Question No. 05", "<br><br>")

var fruits = ["apple", "banana", "mango", "orange"];

for (let i = 0; i < fruits.length; i++) {
    document.writeln(fruits[i], "<br>")
}
for (let i = 0; i < fruits.length; i++) {
    document.writeln("Element at Index " + i + " is " + fruits[i], "<br>")
}



document.writeln("<br><br>")


// Question No. 06
document.writeln("Question No. 06", "<br><br>")

var counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

document.writeln("Counting:", "<br><br>")
for (let i = 0; i < counting.length; i++) {
    document.writeln(counting[i])
}

document.writeln("<br><br>")

document.writeln("Reverrse Counting:", "<br><br>")
for (let i = counting.length - 1; i > 0; i--) {
    document.writeln(counting[i])
}

document.writeln("<br><br>")

document.writeln("Even:", "<br><br>")
for (let i = 0; i < counting.length; i++) {
    if (counting[i] % 2 == 0) {
        document.writeln(counting[i])
    }
}

document.writeln("<br><br>")

document.writeln("Odd:", "<br><br>")
for (let i = 0; i < counting.length; i++) {
    if (counting[i] % 2 == 1) {
        document.writeln(counting[i])
    }
}

document.writeln("<br><br>")

document.writeln("Series:", "<br><br>")
for (let i = 0; i < counting.length; i++) {
    if (counting[i] % 2 == 0) {
        document.writeln(counting[i] + "k")
    }
}

document.writeln("<br><br>")

// Question No. 07
document.writeln("Question No. 07", "<br><br>");

var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];

var bakeryUser = prompt("Welcome to ABC Bakery,What do you want to order sir/ma'am? ", " ")
var match = false;
for (let i = 0; i < bakery.length; i++) {
    if (bakeryUser == bakery[i]) {
        match = true;
        alert(bakery[i] + " is available at index " + i + " in our bakery")
        break;
    }
}

if (match == false) {
    alert("We are sorry. " + bakeryUser + " is not available in our bakery")
}

// document.writeln("<br><br>")

// Question No. 08
document.writeln("Question No. 08", "<br><br>");

var num = [24, 53, 78, 91,100, 12];

var largestNum = num[0];

for (let i = 0; i < num.length; i++) {
    if (largestNum < num[i]) {
        largestNum = num[i]
    }
}
document.writeln(largestNum + "<br><br>")


// document.writeln("<br><br>")

// Question No. 09
document.writeln("Question No. 09", "<br><br>");

var smallestNum = num[0];

for (let i = 0; i < num.length; i++) {
    if (smallestNum > num[i]) {
        smallestNum = num[i]
    }
}
document.writeln(smallestNum + "<br><br>")



// document.writeln("<br><br>")

// Question No. 10
document.writeln("Question No. 10", "<br><br>");


var num01 = 5;

for (let i = 1; i <= 20; i++) {
    document.writeln(num01 * i)
}
