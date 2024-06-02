//function
// ? DRY=> Do not repeat yourself
// ?objective:code reusability,to reduce code redundancy,single point of the failure
// syntax

// function function_name()
//{
//some code
//}
// userName = "Utsarga";
// function sayHello() {
//   console.log(`HEllo $(userName)`);
// }
// sayHello();

// function getSum(x,y)
// {
//     let sum=x+y
// }

// ?arrow function
// const sayHi = () =>{
//     console.log("Hi");
// };
// sayHi();
// const sayHi = (Name) => {
//   console.log(`Hi ${Name}`);
// };
// sayHi("Utsarga");

// const doSum = (x, y) => {
//   x = +x;
//   y = +y;
//   console.log(x + y);
// };
// doSum("2", "3");

// const doProduct = (num1, num2) => {
//   const product = num1 * num2;       // also can be written as const doProduct = (num1,num2) => num1*num also known as one liner function
//   return product;
// };
// const productResult = doProduct(5, 6);
// console.log(productResult);

//Waf that checks whether a number is odd or even
// const oddEven = (a) => {
//   if (a % 2 == 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// };
// const result = oddEven(20);
// console.log(result);

// another way
// const isoddEven = () => (num % 2 === 0 ? "even" : "odd");
// const result = isoddEven(30);
// console.log(result);

// ?WAF to check the polarity of a number

// const checkPolarity = (a) => {
//     let result;
//   if (a < 0) {

//     result= "-ve";

//   } else if (a > 0) {

//     result= "+ve";

//   } else {

//     result= "zero";
//   }
// };
// const result = checkPolarity(20);
// console.log(result);

//arrow function
let a = -1;
const checkPolarity = () => (a < 0 ? "Negative" : a > 0 ? "Positive" : "zero");
const result = checkPolarity();
console.log(result);
