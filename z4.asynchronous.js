//closure
// ?function returning function
// ? higher order function
// 1.Callback function (function as an argument to another function)
// 2.Closure(function returning function)
// closure => function + lexical environment (surrounding environment)

// const makeAdder = (x) => (y) => x + y;
// console.log(makeAdder(10)(2));

// ?asynchronous =>not existing or occuring at the same time
// ?synchronous => existing and occurring at the same time

// node => single threaded
// It has non blocking nature
// real world scenario of code blocking =>
// for loop for billion times
// image processing
// Api request
// db operation

// ? example 3
// const multiply = (num1, num2) => {
//   return num1 * num2;
// };
// const square = (n) => {
//   const squaredNumber = multiply(n, n);
//   return squaredNumber;
// };
// const printNumber = () => {
//   const result = square(4);
//   console.log(result);
// };

// printNumber();

// ? recursive function
// ! maximum call stack size exceeded
// const sayHi = () => {
//   sayHi();
// };
// sayHi();