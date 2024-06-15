const x = 2;
try {
  x = 5;
  console.log("HIT");
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Send Email");//j sukai hos yo block run hunu paryo
}
console.log("Hi");
