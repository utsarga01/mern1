// ?........... Function factory............. 
// ?A function factory is a function that creates and returns other functions. It's a powerful concept in JavaScript (and other programming languages) that allows for the creation of customized functions on-the-fly.
// function createGreetingFunction(greeting) {
//     return function(name) {
//       console.log(`${greeting}, ${name}!`);
//     };
//   }
  
//   const sayHello = createGreetingFunction("Hello");
//   const sayHi = createGreetingFunction("Hi");

//   const sayGreetings = createGreetingFunction("Greetings");


// function createDiscountFunction(discount) {
//   return function(price) {
//     return price - (price * discount);
//   };
// }

// const tenPercentOff = createDiscountFunction(0.1);
// const twentyPercentOff = createDiscountFunction(0.2);

// console.log(tenPercentOff(100));  // Output: 90
// console.log(twentyPercentOff(100)); // Output: 80