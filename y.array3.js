// ? map,filter, find, findIndex, reduce
//  ? loop based
let studentList = ["Saugat", "Shubham", "Suyasha", "Smriti", "Utsarga", "Unik"];

// ? map
// ? it returns new array
// ? to alter values of array
// ? original array length === returned array length

// const newStudentList = studentList.map((item, index, array) => {
//   //console.log(item, index, array);
//   return 0;
// });
// console.log(newStudentList);

// const newStudentList = studentList.map((item, index, array) => {
//   let uppercaseName = item.toUpperCase();
//   return uppercaseName;
// });
// console.log(newStudentList);

// const priceList = [25, 35, 11, 9, 5, 99];
// const newPriceList = priceList.map((item, index, array) => item + 3);
// console.log(newPriceList);

const ProductList = [
  {
    id: 2,
    name: "Gloves",
    price: 457,
  },

  {
    id: 1,
    name: "efhwe",
    price: 45,
  },

  {
    id: 2,
    name: "sdfs",
    price: 457,
  },
];

// increase price of each item by 10%
const newProductList = ProductList.map((item, index, array) => {
  const newPrice = item.price + (1 / 10) * item.price;
  return {
    ...item,
    price: newPrice,
  };
});
console.log(newProductList);
