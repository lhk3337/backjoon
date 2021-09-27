const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");
const N = parseInt(input[0]);
const num = input[1].split(" ");

let arr = [];
for (let i = 0; i < num.length; i++) {
  arr.push(parseInt(num[i]));
}

let min = arr[0];
let max = arr[0];

for (let i = 0; i < N; i++) {
  if (arr[i] > max) {
    max = arr[i];
  } else if (arr[i] < min) {
    min = arr[i];
  }
}
console.log(min, max);
