const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");
const nums = input[0].split(" ");
const data = input[1].split(" "); //1 10 4 9 2 3 8 5 7 6

const N = nums[0]; //10
const X = nums[1]; //5

//filter
const result = data.filter((a) => Number(a) < X);
console.log(result.join(" "));

//for 문
let res = "";
for (let i = 0; i < N; i++) {
  if (Number(data[i]) < X) {
    res += data[i] + " ";
  }
}
console.log(res);
