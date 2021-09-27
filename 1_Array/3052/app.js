const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let remainder = [];
for (let i = 0; i < 10; i++) {
  console.log(remainder.indexOf(parseInt(input[i] % 42)));
  if (remainder.indexOf(parseInt(input[i]) % 42) === -1) {
    remainder.push(parseInt(input[i]) % 42);
  }
}
console.log(remainder);
