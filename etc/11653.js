"use strict";
let fs = require("fs");
let input = fs.readFileSync("./11653.txt").toString().split("\n");
let num = Number(input[0]); //72

for (let i = 2; i <= num; i++) {
  while (num % i === 0) {
    console.log(i);
    num /= i;
  }
}
if (num != 1) {
  console.log(num);
}
