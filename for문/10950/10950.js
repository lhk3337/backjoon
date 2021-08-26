const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");
const counter = input[0];

for (let i = 1; i <= counter; i++) {
  nums = input[i].split(" ");

  console.log(Number(nums[0]) + Number(nums[1]));
}
