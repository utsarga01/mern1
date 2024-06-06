//creating an array
// const array_name=[item1,item2,...];
//const cars = ["Toyota", "BMW", "Skoda"];
//converting array to string

//javascript method toString() converts an array to a string of (comma separated) array values.

//const fruits = ["Banana", "orange", "Apple", "Mango"];
// console.log(fruits.toString());

//gives Banana,orange,Apple,Mango
//Accessing 1st array element
// let fruit = fruits[0];

// console.log(fruit);

// Accessing the lasst array element

// let fruit = fruits[fruits.length-1];

//looping Array Elements

// let fLen = fruits.length;
// let text = "<ul>";
// for (let i = 0; i < fLen; i++) {
//   text += "<li>" + fruits[i] + "</li>";
// }

// text += "</ul>";
// console.log(text);
// ? Array pop
const fruits = ["Apple", "Banana", "Mango", "Litchi"];
// fruits.pop(); //removes last element Litchi and only Apple, Banana and mango remains
// console.log(fruits);
// fruits.push("Guava");//adds Guava
// console.log(fruits);
fruits.shift(); //removes first elements..
//console.log(fruits);
delete fruits[0];//leaves the hole in the array..
console.log(fruits);
