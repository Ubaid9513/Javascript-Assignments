// Que No. 01
// let arr = [];

// Que No. 02
// ?

// Que No. 03
// let arr1 = ["Ubaid","Uzaima","Saqib"];
// Que No. 04
// let arr2 = [1,2,3];
// Que No. 05
// let arr3 = [true];
// Que No. 06
// let arr6 = ["Ubaid","Uzaima","Saqib",1,2,3,true];
// Que No. 07

// let arr7 = ["SSC","HSC","BCS","BS","BCOM","MS","M.PHIL.","PHD"];
// // let num7 = [1,2,3,4,5,6,7,8,9,10];
// document.write("<h1>Qualification :</h1>")
// for(var i=0;i<=arr7.length;i++){
//         document.write(arr7[i] + "<br>");
// }

// Que No. 08
// let arrName = ["Ubaid","Uzaima","Saqib"];
// let userScore = [320,230,480];
// for(var i =0;i<arrName.length;i++){
//     for(var j =0;j<userScore.length;j++){
//         console.log(arrName[i],userScore[j]);
//     }
// }

// ------ X -------

// let student = ["Ubaid", "Saqib", "Uzaima"];
// let studentScore = [320, 230, 480];
// let totalMarks = 500;
// let per = [];
// for (var i = 0; i < student.length; i++) {
//   per[i] = (studentScore[i] / totalMarks) * 100;
//   console.log(per + "%");
// }
// for (var i = 0; i, student.length; i++) {
//   document.write(`Score of ${student[i]}`)
// }

// Que No. 09

// let arrColor = [];
// arrColor.unshift(prompt("Enter a number"));
// arrColor.push(prompt("Enter a number"));
// arrColor.unshift(prompt("Enter a number"));
// arrColor.unshift(prompt("Enter a number"));
// console.log(arrColor);
// arrColor.shift();
// console.log(arrColor);
// arrColor.pop();
// console.log(arrColor);
// arrColor.splice(prompt("Enter index Num"),prompt("Enter index Color"));
// console.log(arrColor);

// Que No. 10
let studentScore = [320,480,210,120];
document.write("Scores of Students : " + studentScore + "<br>")
studentScore.sort()
document.write("Ordered Scores of Students : " + studentScore + "<br>"  + "<br>")

// Que No. 11
let cities = ["karachi","lahore","islamabad","peshawar","Quetta"];
document.write("Cities list :" + "<br>");
document.write(cities + "<br>");
document.write("Selected Cities List:" + "<br>");
let SelectedCities = cities.slice(1,3);
document.write(SelectedCities + "<br>" + "<br>");

// Que No. 12

document.write("Array :" + "<br>")
let joinArr = ["This","is","a","book"];
document.write(joinArr + "<br>" + "<br>");
document.write("String :" + "<br>");
let joinedArr = joinArr.join(" ");
document.write(joinedArr + "<br>");

// Que No. 13

let computerParts = ["keyboard", "mouse", "monitor", "printer"];
document.write("Devices: " + "<br>");
document.write(computerParts + "<br>" + "<br>");
let out = "out :";
for (var i = 0; i < computerParts.length; i++) {
  document.write(out + "<br>");
  document.write(computerParts[i] + "<br>" + "<br>");
}


// Que No. 14
let computerPartsReverse = ["keyboard", "mouse", "monitor", "printer"].reverse();
document.write("Devices: " + "<br>");
document.write(computerPartsReverse + "<br>");
let out1 = "out :";
for (var j = 0; j < computerPartsReverse.length; j++) {
  document.write(out1 + "<br>");
  document.write(computerPartsReverse[j] + "<br>");
}


// Que No. 15

