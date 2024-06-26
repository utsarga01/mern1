const laptopList = [
  {
    name: "LOQ",
    brand: "Lenovo",
    price: 1070,
  },
  {
    name: "Aspire 5",
    brand: "Acer",
    price: 730,
  },
  {
    name: "Modern 15",
    brand: "MSI",
    price: 690,
  },
  {
    name: "Macbook Pro M3",
    brand: "Apple",
    price: 2059,
  },
  {
    name: "Inspiron G15",
    brand: "Dell",
    price: 1015,
  },
  {
    name: "Idea Pad",
    brand: "Lenovo",
    price: 1059,
  },
  {
    name: "Zenbook 15",
    brand: "MSI",
    price: 1064,
  },
];
// ? 1.give 6 percent on 6:6 on each laptop
// ?increase price of Dell laptops by 10%
// ? find all the lenovo laptops
// ? update name of "IdeaPad" to "Idea Pad Ultra"
// (1 7 5)
// ? get all laptops whose price is below  $1050
// find "Zenbook 15" laptop details
// ?find sum of prices of all laptops
// const newLaptopList = laptopList.map((item,index,array) => {

//     const discountedPrice = item.price - (6/100) *item.price;

//     return{
//         ...item,
//         price:discountedPrice,
//     };

// });
// console.log(newLaptopList);

// ?5 get all the laptops whose price is below $1050

// const newLaptopList = laptopList.filter(
//   (item, index, array) => item.price < 1050
// );
// console.log(newLaptopList);

// ?7

// const sumOfLaptops = laptopList.reduce((sum, item) => {
//   sum = sum + item.price;
//   return sum;
// }, 0);

// console.log(sumOfLaptops);

// ? increase price of Dell laptops by 10%
// const increasedPrice = laptopList.map((item) => {
//   if (item.brand === "Dell") {
//     const newPrice = item.price + (1 / 10) * item.price;

//     return {
//       ...item,
//       price: newPrice,

//   };
// }

//   return {...item};
// });
// console.log(increasedPrice);

// find all the lenovo laptops
// const searchLaptop = laptopList.filter((item, index, array) => {
//   return item.brand === "Lenovo";
// });
// console.log(searchLaptop);

// ? update name of "IdeaPad" to "Idea Pad Ultra"
const updateName = laptopList.map((item) => {
  if (item.name === "Idea Pad") {
    return {
      ...item,
      name: "Idea Pad Ultra",
    };
  }
  return { ...item };
});

console.log(updateName);
