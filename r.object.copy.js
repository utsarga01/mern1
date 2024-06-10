// // object copy
// const print = (values) => {
//   console.log(values);
// };

// const student1 = {
//   name: "Sandhya",
//   college: "HCOE",
//   isGraduated: false,
//   image: null,
// };
// print(student1);

// Here are the key reasons for using objects in JavaScript, summarized:

//     Structured Data Representation: Objects group related data and functions, representing complex entities clearly.
//     Key-Value Pairs: Objects store data as key-value pairs, making data management straightforward.
//     Dynamic Nature: Objects can be modified at runtime, allowing for flexible and adaptable code.
//     Encapsulation: Objects hide implementation details, exposing only necessary parts and maintaining modularity.
//     Inheritance and Prototypes: Objects can inherit properties and methods from other objects, promoting code reuse.
//     Method Storage: Objects can contain functions (methods), associating behaviors directly with data.
//     Working with JSON: Objects are integral to handling JSON, a common data format for web communication.
//     Event Handling: Objects help organize and manage events and their handlers in event-driven programming.

// ?create a object named myHouseDetails and add following properties.

const myHouseDetails = {
  numberOfRooms: 9,
  numberOfMembers: 10,
  colorOfHouse: "green",
  builtYear: 2011,
  numberOfStorey: 3,
};
delete myHouseDetails.numberOfMembers;

myHouseDetails.numberOfRooms += 2;
myHouseDetails.estimatedPriceOfHouse;
console.log(
  `I have a ${myHouseDetails.colorOfHouse} coloured house with ${myHouseDetails.numberOfRooms} rooms where ${myHouseDetails.numberOfMembers} people are living. The house is ${myHouseDetails.numberOfStorey} storey and was built in ${myHouseDetails.builtYear}.`
);

// ?object
// ? 1.
// structured data => key value pair => group of primary data types
// encapsulation => hide data
const obj = {};
Object.defineProperty(obj, "name", {
  value: "Utsarga",
  enumerable: true,
  writable: true,
  configurable: true,
});

//? 3 dynamic
// ? we can add,edit,update and delete property easily
// const laptopDetails = {
//   name: "F15",
//   brand: "Asus",
//   ram: 16,
//   ssd: 512,
// };
// let key ="ram";
// console.log(laptopDetails[key]);

// ?4.abstraction => hide process

// ?5 modular,better organization of data