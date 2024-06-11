// ?array
// collection of data
// statically typed language => c,java,c++
// => array is collection of data of same type

//dynamic language => js,python
//array => collection of data of any type

// const x = [1,"hello",null,undefined,{name:"Nepal"},[2,3]];
// console.log(x,typeof x);

// ? real-world-use-case:we use array with same data types

const temperatureList = [10, 20, 22, 23];
console.log(temperatureList);

const nations = [
  "Nepal",
  "Srilanka",
  "Netherland",
  "South Africa",
  "Bangladesh",
];
console.log(nations);
// ? values in array can be accessed using index
// ? index always starts from 0
const laptopBrands = ["Asus", "MSI", "Apple", "Acer", "Dell"];
console.log(laptopBrands.length); //gives 5
console.log(laptopBrands[0]); // asus
/*
const bakeryItems = [
  "Black forest",
  "white forest",
  "red-velvet",
  "caramel",
  "blueberry",
];
for (let i = 0; i <= 4; i++) { //(bakery.length - 1)
  console.log(bakeryItems[i]);
}
*/
const obj = ["Apple", "Banana", "orange", "Mango"];
console.log(obj[0]);

