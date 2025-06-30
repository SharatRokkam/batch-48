// Numbers

// first way of creating numbers
// let a = 10;

//second way of creating numbers
// let x = new Number(20);

// Methods in Number
// toFixed

// let price = 40;
// console.log(price.toFixed(2));

// let num = 355;
// console.log(num.toString());
// console.log(num)

// let value = 3.12384;
// console.log(value.toPrecision(4));

// console.log(Number.isInteger(10));
// console.log(Number.isInteger("10"));

// console.log(NaN === NaN);
// console.log(typeof NaN);

// console.log(Number.parseInt("123px"));
// console.log(Number.parseFloat("12.32kg"));

// console.log(+"123");

// let value = parseInt(prompt("enter any number"));

// Math Method

// console.log(Math.abs(-10));
// console.log(Math.round(1.44));
// console.log(Math.floor(1.8));
// console.log(Math.ceil(1.2));

// console.log(Math.min(1, 4, 5, 2));
// console.log(Math.max(1, 4, 5, 2));

// console.log(Math.pow(2, 3));

// console.log(Math.round(Math.random() + 10)); //0 to 1

// Dice - 1 to 6

// console.log(Math.floor(Math.random() * 6) + 1);

// console.log(-1 / 0);
// console.log(1 / 0);

// ********************************************************************
// Date - Object

// const now = new Date();
// console.log(now);
// console.log(now.toDateString());
// console.log(now.toISOString());
// console.log(now.toLocaleString());
// console.log(now.toLocaleTimeString());

// const now = new Date("2022-03-20");
// console.log(now);

// const month = new Date(0);
// const month = new Date(2023, 3, 30, 20, 0);

// console.log(month.toLocaleString());

const now = new Date();
// console.log(typeof now);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());

console.log(now.getDay());
