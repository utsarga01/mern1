// data types
// string
// number
// boolean
// undefined
// null
//object
// bigInt
//symbol

// ? string
// ? "",'',``(back tick)

let userName = "T@utsarga";

console.log(userName);
console.log(typeof userName);

// ?  number
//let x = 1;
//console.log(x, typeof x);
let x = "abc" / 2; // NaN(not a number);
console.log(x);

// ? boolean => true/false

let isSunnyDay = false;
console.log(isSunnyDay, typeof isSunnyDay);

// ?undefined
let y;
console.log(y, typeof y);

//? null
let z = null;
console.log(z, typeof z); // historical bug as it gives type as object but it should be null

// ? object
const studentDetail = {
  fName: "Utsarga",
  lName: "Regmi",
  address: "A",
};
console.log(studentDetail, typeof studentDetail);
const numList = [25, 55, 65, 11, 23];
console.log(numList, typeof numList);

//
