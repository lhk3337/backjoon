const fs = require("fs");
let input = fs.readFileSync("./1129.txt").toString().split(" ");
let min = Number(input[0]);
let max = Number(input[1]);

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

for (min; min <= max; min++) {
  if (isPrime(min)) {
  }
}

console.log(min);
