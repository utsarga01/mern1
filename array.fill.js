// ? fill method  of array instances changes all elements within a range of indices in  an array to a static value.
//  ? It returns the modified array


// ? syntax fill (value)
// fill(value, start)
// fill (value,start end)


const array1 = [1, 2, 3, 4];

console.log(array1.fill(0, 2, 4)); // It fills with 0 from position 2 until position 4

console.log(array1.fill(5, 1)); // It fills with 5 from position 1

console.log(array1.fill(6)); // gives [6, 6, 6, 6]


console.log([1, 2, 3].fill(4)); // [4, 4, 4]
console.log([1, 2, 3].fill(4, 1)); // [1, 4, 4]
console.log([1, 2, 3].fill(4, 1, 2)); // [1, 4, 3]
console.log([1, 2, 3].fill(4, 1, 1)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 3)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, -3, -2)); // [4, 2, 3]
console.log([1, 2, 3].fill(4, NaN, NaN)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 5)); // [1, 2, 3]
console.log(Array(3).fill(4)); // [4, 4, 4]

// A single object, referenced by each slot of the array:
const arr = Array(3).fill({}); // [{}, {}, {}]
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
