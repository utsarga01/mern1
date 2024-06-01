// hoisting
//JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.
// in case of arrow function there is no hoisting


// arrowFunction() const arrowFunction = () => { console. log("This is an arrow function.") } Unlike regular functions, attempting to call an arrow function before it's declared will result in a reference error, 
// function printHello() {
//     console.log("hello")
//   }
  
//   printHello()
//   hello
printHello()
// hello

// printDillion()
// ReferenceError: printDillion is not defined

// function printHello() {
//   console.log('hello')

//   function printDillion() {
//     console.log("dillion")
//   }
// }
