// ? object
// ?key-value pair

// const studentDetails = {};
// console.log(studentDetails, typeof studentDetails);

// const obj1 = {};
// const obj2 = {};
// console.log(obj1 === obj2); //returns false;

let Student1 = {
  firstName: "Rohan",
  lastName: "Bhandari",
  isGraduated: true,
  address: {
    permanent: "Baneswor",
    temporary: "Sydney",
  },
};
//Read

// ? CRUD
// ? c =>create/add
// ? R =>Read/Retrieve
// ? U => Update/Edit
// ? D => Delete/Remove
console.log(Student1.address.permanent);
//also can be written as
console.log(Student1["address"]["permanent"]);
// mix combo
console.log(Student1.address["temporary"]);
// console.log(`My name is ${Student1.firstName}`);

// dot operator
// square bracket operator
// console.log(Student1.firstName);

// also can be written as
// console.log(Student1["isGraduated"]);
// ? Upsert or Insert
// Student1.firstName = "Roshna";
// Student1.age = 27;
// console.log(Student1);
// Student1["address"]["permanent"]="Birgunj";
// console.log(Student1)


// let nationDetail={
//     name:"Nepal",
//     population:"3 crore",
//     perCapita:1400,
// };
// // ?delete
// delete nationDetail["name"];
// console.log(nationDetail);

const cupDetails = {
    name : "Water cup",
    brand : "Serve well",
    color : "Pink",
    color : "Green",//highest priority

};
console.log(cupDetails);
