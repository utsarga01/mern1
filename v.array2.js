//methods in array

// push pop,shift,unshift,reverse
// ? push => to add elements to end of array
// ?pop=> to remove element form end of the array

const numList = [10, 11, 12];
// numList.push(13);
// console.log(numList);

// ?pop
// numList.pop();
// console.log(numList);

//  ?shift => to remove first  item from array
// ? unshift => to add items at starting of array
// let studentList = ["Saugat", "Smriti", "Subham", "Samundra"];

// studentList.shift();
// console.log(studentList);
// studentList.unshift("Suyasha", "Utsarga", "Unik");
// console.log(studentList);

// ?reverse => reverses order of items in array
// ?toReversed => returns the new array after reversing old array
// const priceList = [15, 25, 35, 45];
// priceList.reverse();
// console.log(priceList);

// ? includes
// ? checks whether array contains specific value or not
// ? results in boolean (true or false)

// const laptops = ["MAC", "ASPIRE", "ASUS"];
// const result = laptops.includes("MAC");
// console.log(result);

// const currentRoute = "/user/edit/1";
// const result = currentRoute.includes("edit");
// console.log(result);

// ? slice => it doesnot change original array
// ? to get a portion of array from original array
const animals = ["ant", "Bison", "camel", "duck", "elephant"];
// const newList = animals.slice();
// const newList = animals.slice(2);
const newList = animals.slice(1, 4);
console.log(newList);

// ? splice
// ?remove or replace existing items
const months = ["jan", "mar", "apr", "may", "jun"];
// months.splice(1);
//removes items from this(1) index
//months.splice(2, 1);//first parameter:Start index, second parameter:Delete count
// months.splice(1, 0, "FEB");
// months.splice(5, 0, "Jul", "Aug", "Sept");
// console.log(months);

// ?sort
let studentList = [
  "Saugat",
  "Abhishek",
  "Yadav",
  "Smriti",
  "Utsarga",
  "Yamuna",
];
object;
studentList.sort(); //In ascending alphabetical order
//studentList.sort().reverse();//desc
console.log(studentList);
let numListt = [1, 100, 11, 111, 2, 23, 20, 50, 51, 505];
numListt.sort((a, b) => a - b); //ascending numeric sort
numListt.sort((a, b) => b - a); //descending numeric sort
console.log(numListt);
