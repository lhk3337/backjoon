const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let allCases = Number(input[0]);
for (let i = 1; i <= allCases; i++) {
  let cases = input[i].split(" ");
  let scoreCaseCount = Number(cases[0]);
  let sum = 0;
  for (let j = 1; j <= scoreCaseCount; j++) {
    sum += Number(cases[j]);
  }
  let highScoreStudent = 0;

  let reverage = sum / scoreCaseCount;
  for (let k = 1; k <= scoreCaseCount; k++) {
    if (reverage < cases[k]) {
      highScoreStudent++;
    }
  }
  result = ((highScoreStudent / scoreCaseCount) * 100).toFixed(3);
  console.log(`${result} %`);
}
