const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split(" ");
const num = input[0];

if (num % 400 === 0) {
  console.log(1);
} else if (num % 4 === 0 && num % 100 !== 0) {
  console.log(1);
} else {
  console.log(0);
}
