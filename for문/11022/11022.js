const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");
const counter = input[0];

for (let i = 1; i <= counter; i++) {
  nums = input[i].split(" ");
  const result = Number(nums[0]) + Number(nums[1]);
  // console.log("Case " + "#" + i + ": " + nums[0] + " + " + nums[1] + " = " + result);
  console.log(`Case #${i}: ${nums[0]} + ${nums[1]} = ${result}`);
}
