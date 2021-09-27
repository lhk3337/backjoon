const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((el) => parseInt(el));

const mul = input[0] * input[1] * input[2];

const result = mul.toString().split("");

for (let i = 0; i < 10; i++) {
  const count = result.reduce((cnt, element) => cnt + (`${i}` === element), 0);
  console.log(count);
}
