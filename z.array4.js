// ? filter(there is some condition to satisfy)
// ? returns new array
// ? there is high chance of
// ? original array length!== returned array length
// ? it select/deselect value
// ? it doesnot change array item

// const numList = [1, 10, 33, -6, -99, 97, -100];
// const newNumList = numList.filter((item, index, array) => {
//   return item > 0;
// });
// console.log(newNumList);

// ?find all items whose price is less than 10 dollar
const ProductList = [
  {
    id: 2,
    name: "Gloves",
    price: 457,
  },

  {
    id: 1,
    name: "efhwe",
    price: 4,
  },

  {
    id: 2,
    name: "sdfs",
    price: 457,
  },
];
const newProductList = ProductList.filter((item) => item.price < 10);
console.log(newProductList);
