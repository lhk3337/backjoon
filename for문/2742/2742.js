const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString();
let result = "";
for (let i = Number(input); 1 <= i; i--) {
  result += i + "\n";
}
console.log(result);
