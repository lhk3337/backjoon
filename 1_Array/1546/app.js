const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let numbers = input[1].split(" ").map((num) => Number(num));
const max = Math.max.apply(null, numbers);

let arr = [];
for (let i = 0; i < input[0]; i++) {
  arr.push((numbers[i] / max) * 100);
}
const sum = arr.reduce((prev, current) => prev + current);
const result = sum / input[0];
console.log(result);
