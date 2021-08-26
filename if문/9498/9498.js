const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split(" ");
const num = input[0];

if (90 <= num) {
  console.log("A");
} else if (80 <= num) {
  console.log("B");
} else if (70 <= num) {
  console.log("C");
} else if (60 <= num) {
  console.log("D");
} else {
  console.log("F");
}
