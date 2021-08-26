const fs = require("fs");
let input = Number(fs.readFileSync("./input.txt").toString().split(" ")[0]);
for (let i = 1; i <= 9; i++) {
  console.log(`${input} * ${i} = ${input * i}`);
}
