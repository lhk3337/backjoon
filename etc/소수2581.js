const input = `60
100`;
const abc = input.split("\n");

const primeNumArr = [];
let primeNumSum = 0;
const min = parseInt(abc[0]);
const max = parseInt(abc[1]);
function isPrime(n) {
  if (n < 2) {
    return;
  }
  for (let j = 2; j < n; j++) {
    if (n % j === 0) {
      return;
    }
  }
  primeNumArr.push(n);
  primeNumSum += n;
}

for (let i = min; i <= max; i++) {
  isPrime(i);
}

if (!primeNumArr.length) {
  console.log(-1);
} else {
  console.log(primeNumSum);
  console.log(Math.min.apply(null, primeNumArr));
}
