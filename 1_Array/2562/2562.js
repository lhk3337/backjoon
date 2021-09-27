const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");

let arr = [];
for (let i = 0; i < input.length; i++) {
  arr.push(parseInt(input[i]));
}

let index = 0;
let max = arr[0];

for (let i = 0; i < input.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
    index = i;
  }
}
console.log(max);
console.log(index + 1);
