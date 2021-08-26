const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString();
let star = [];
for (let i = 1; i <= input; i++) {
  star.push("*");
  console.log(star.join(""));
}
