// ?Why do we use spread and rest operator?
//The rest operator is used to gather elements into an array, while the spread operator is used to spread the content of an array.
//The spread operator allows an iterable such as an array or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or where key-value pairs (for object literals) are expected.
//The rest operator collects all remaining elements into an array. It is useful for functions with variable numbers of arguments or for array destructuring.

// ?Give an example of a spread operator to copy objects and arrays.
// const originalObject = { a: 1, b: 2, c: 3 };
// const copiedObject = { ...originalObject };

// console.log(copiedObject);
// const originalArray = [1, 2, 3, 4];
// const copiedArray = [...originalArray];

// console.log(copiedArray);

// ? Give an example of the rest operator
// The rest operator (`...`) is used to collect multiple elements into an array. It is particularly useful in function parameters and array destructuring.

// ? Create an object named LaptopDetails.Add fields like brand,processor,ram,core,gpu,storage,screenSize. Do object destructure and print ut laptop details.....
// const LaptopDetails = {
//     brand:"Dell",
//     processor:"intel",
//     ram:"16GB",
//     core:"i5",
//     gpu:"MX230",
//     storage:"1TB",
//     screenSize:"27*21",
// };
// const{  brand,
//     processor,
//     ram,
//     core,
//     gpu,
//     storage,
//     screenSize}=LaptopDetails; 
//     console.log(LaptopDetails);

// ? Create an array called countryList. Add some countries like Nepal, India, China... Use array

const countryList = ["Nepal", "India", "China"];
const [first,second,third] = countryList;
console.log(countryList);