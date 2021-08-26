const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split(" ");
const number1 = Number(input[0]);
const number2 = Number(input[1]);
const result = number1 + number2;
console.log(result);
