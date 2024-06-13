// ?reduce
const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum=0;
// numList.forEach((item, index, array) => {
//   sum = sum + item;
// });
// console.log(sum);

const total = numList.reduce((sum, item, index, array) => {
  sum += item;
  return sum;
});
console.log(total);
