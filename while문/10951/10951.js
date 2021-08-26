const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");

let i = 0;
while (i < input.length - 1) {
  let nums = input[i].split(" ");
  let num1 = Number(nums[0]);
  let num2 = Number(nums[1]);
  i++;

  console.log(num1 + num2);
}
