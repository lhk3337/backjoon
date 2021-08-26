const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString();
let result = "";
for (let i = 1; i <= Number(input); i++) {
  result += i + "\n";
}
console.log(result);
