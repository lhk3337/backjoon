const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString();
let star = [];
for (let i = 0; i < input; i++) {
  star.push(" ");
}
for (let i = input - 1; 0 <= i; i--) {
  star[i] = "*";
  console.log(star.join(""));
}
