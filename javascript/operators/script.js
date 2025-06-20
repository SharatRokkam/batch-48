// Arithematic operator

// console.log(2 + 2); //addition
// console.log(2 - 1); //substraction
// console.log(2 * 2); //multiplication
// console.log(10 / 2); //divide
// console.log(10 % 3); //modulo
// console.log(2 ** 2); // exponentiation

// ++increment, --decrement;
//postfix increment a++, prefix ++a, postfix decrement a--, prefix --a

// let a = 10;

// console.log(a--)
// console.log(a)

// let z = x++ + --y + x + --x;
// console.log(z)

// let x = 5;
// let y = 10;

// let c = x++ + --y + ++x - y + y-- + ++x + y;
// 5 + 9 + 7 - 9 + 9 + 8 + 8;
// console.log(c);

// let a = 20;
// let b = 25;
// let d = ((a++ + 10 + --b) / 2) * ++a + --b;

// console.log(d);

// BODMAS - Bracket of Divide Multiply Addition Substraction

// Assignment Operator
// = (equal to), += , -=, *=, /=, %=

// let a = 10;
// a += 2; //a = a + 2
// a -= 2; //a = a - 2 = 8
// a *= 2; //a = a * 2 = 20
// a /= 2; //a = a / 2 = 5
// a %= 2; //a = a % 2 = 0
// console.log(a);

// comparison operator

// console.log(5 == "5"); //checks the value
// console.log(5 === "5"); //checks the data type and value
// console.log(5 != 5); //false
// console.log(5 !== "5"); //true
// console.log(5 > 3); //true
// console.log(4 < 3); //false
// console.log(5 >= 5); //true
// console.log(5 <= 5); //true

// Logical Operator
// AND(&&) - Ampersand, OR (||) and NOT(!)

// console.log(4 > 3 && 6 > 10);
// console.log(4 > 3 || 6 > 10);
// console.log(!false);

// string operator
// let msg = "hello ";
// let msg2 = "world";
// console.log(msg + msg2);

// console.log(typeof msg);
// console.log(typeof undefined);

// undefined vs not defined

// console.log(a);

// rest(...) and spread(...) operator (es6) ---> (...)
// let arr = [1, 2, 3]
// console.log([...arr, 4, 5])

// function add(...nums) {
//   return nums.reduce((prev, curr) => prev + curr, 0);
// }
// console.log(add(1, 2, 3, 4));

//Nullish Coalescing
// let value = null ?? "default";
// console.log(value);
