// iteration
// loop
// to execute same code multiple times
// ?1.for
// ?2.while
// ?3.do.. while
//

//? syntax
// for (initial_value; Condition; increment / decrement) {
//   some code here
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// ?print numbers from 100 to 50
for (let i = 100; i >= 50; i--) {
  console.log(i);
}

//  ? find if the number is prime or not
// ?taking number greater than 1
let n = 20;
let isPrime = true;

for (i = 1; i < n; i++) {
  let rem = n % i;
  if (rem === 0) {
    isPrime = false;
    break;
  }
}
console.log(isPrime ? "prime number" : "composite number");

// ?while loop
// ?syntax
//initial value
//while(condition)object
// {
//     //some code here
//     //increment/decrement
// }
// let i =1;
// while(i<=10)
//     {
//         console.log(i);
//         i++;
//     }
do {
  //some code here
  //increment/decrement
} while (condition);

let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);
