// let day = 4;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("invalid day");
// }

// break and continue

// let marks = 67;

// switch (true) {
//   case marks > 90:
//     console.log("A+");
//     break;
//   case marks > 70 && marks <= 90:
//     console.log("B+");
//     break;
//   case marks > 50 && marks <= 70:
//     console.log("C+");
//     break;
//   case marks > 50 && marks <= 70:
//     console.log("D+");
//     break;
//   case marks < 40:
//     console.log("Fail");
//     break;
//   default:
//     console.log("invalid marks");
// }

// Loops

// for
// for (let index = 0; index <= 10; index++) {
//   console.log("Hello World");
// }

// while
// let i = 0;

// while (i < 10) {
//   console.log("hello world");
//   i++;
// }

// do while

// let i = 0;
// do {
//   console.log("Hello world");
//   i++;
// } while (i < 6);

// let fruits = ["apple", "banana", "grapes"];
// let fruits = "pomegranate";

// for (const fruit of fruits) {
//   console.log(fruit);
// }

//for in

// let employee = {
//   name: "Akshay",
//   id: 2929,
//   age: 24,
// };

// for (let key in employee) {
//   console.log(key, ":", employee[key]);
// }

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// Practice Questions

// 1. Print the table of 5
// 5 * 1 = 5
// 5 * 2 = 10
// 5 * 3 = 15

// let num = 5;
// for (let i = 1; i <= 10; i++) {
//   console.log(`${num} x ${i} = ${num * i}`);
// }

// 2.  print the sum of first n numbers
// let n = 100;
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//   sum = sum + i;
// }

// console.log(sum);

let num = [1, 2, 4, 5, 3, 10, 33, 23];
let even = 0;
let odd = 0;
// count of even = 5
// count of odd = 3

for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 == 0) {
    even++;
  } else {
    odd++;
  }
}
console.log("even :", even, "odd :", odd);

// 1. count the number of vowels in a string
// 2. let marks = {math: 80, physics : 30, bio : 65}
// output : math : 80%, physics : 30% and bio : 65%

// 3.let expenses = {rent: 10500, grocery : 3200, electricity : 1300}
//sum all the numeric values in an object : 15000

let people = [
    {firstName : "John" , secondName : "Don"}
    {firstName : "Johnny" , secondName : "Johnny"}
    {firstName : "Janardhan" , secondName : "Mohan"}
];

// print the firstname of the all the objects