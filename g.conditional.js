// ?conditionls

// ? sequential flow
// ? if
// ? if.. else
// ? if..else if..else
//? switch
//
//  if(condition)
//     {
//         //some code
//     }
//     else{
//         //some code
//     }
if ("Nepal" === "Nepal") {
  console.log("Hi");
} else {
  console.log("Hello");
}

//?find if anumber is odd or even
// let n = 20;

// if(n%2 === 1){
//     console.log("odd");
// }else{
//     console.log("even");
// }
// ? syntax
// if(cond1)
//     {
//         //some code
//     }
//     else if(cond2)
//         {
//             //some code
//         }
//         else{
//             //some code

//         }
//? find the polarity of the  number
// let h = -23;
// if (h < 0) {
//   console.log("-ve");
// } else if (a > 0) {
//   console.log("+ve");
// } else {
//   console.log("-ve");
// }
let k = 4;
let l = 7;
let m = 11;
if (k < m && l < m) {
  console.log("m is greater");
} else if (l>k) {
  console.log("l is greater");
} else {
  console.log("k is greater");
}


// ?switch => best for multiple choice questions
// syntax

// switch(variable)
// {
//     case value1:
//         //some code
//         //break;

//     case value2:    
// }

let dayNumber = 1;

switch(dayNumber)
{
    case 1:
        console.log("Sunday");
        break;

    case 2:
        console.log("Monday");
        break;
        
    case 3:
        console.log("Tuesday");
        break;
        
    case 4:
        console.log("Wednesday");
        break;
        
    case 5:
        console.log("Thursday");
        break;

    case 6:
        console.log("Friday");
        break;

    case 7:
        console.log("Saturday");
        break;

    default:
        console.log("iinvalid number");

}


//?ternary

let x=50;
let rem= x%2;

// ? expression ?iftrue1st expression:if true end expression

// remainder === 0?console.log("even"):console.log("odd");


let a=55;
a<0?console.log("-ve"):
a>0?console.log("+ve");
clg("zero");
