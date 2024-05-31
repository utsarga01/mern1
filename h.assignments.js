// ?Check if the number is odd or even
let a = 33;

if (a % 2 === 0) {
  console.log("The number is even");
} else {
  console.log("The number is odd");
}

// ? check if the input variable is a number or not

let b = 20;

if (typeof b === "number") {
  console.log("It is number");
} else {
  console.log("It is not a number");
}

// ?Find the largest of the two numbers

let x = 20;

let y = 30;

if (y > x) {
  console.log("y is greater");
} else {
  console.log("x is greater");
}

// ?performing arithmetic operation based on the option provided

let u = 20;
let v = 30;
let option = 6;
switch (option) {
  case 1:
    console.log("addition");
    console.log(u + v);
    break;
  case 2:
    console.log("subtraction");
    console.log(u - v);
    break;
  case 3:
    console.log("multiplication");
    console.log(u * v);
    break;
  case 4:
    console.log("division");
    console.log(u / v);
    break;
  case 5:
    console.log("power");
    console.log(u ** v);
    break;

  default:
    console.log("Invalid Option");
}

// ? Find grades for student marks.

let marks = 60;
if (marks >= 90) {
  console.log("The grade is A+");
} else if (marks >= 80) {
  console.log("The grade is A");
} else if (marks >= 70) {
  console.log("The grade is B");
} else if (marks >= 60) {
  console.log("The grade is C");
} else {
  console.log("The grade is F");
}




