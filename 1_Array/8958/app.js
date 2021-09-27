const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let arr = [];
for (let i = 1; i < input.length; i++) {
  arr.push(input[i]);
}

for (let i = 0; i < input[0]; i++) {
  let cnt = 0;
  let sum = 0;
  let OXlist = arr[i];
  let total = [];
  for (let j = 0; j < OXlist.length; j++) {
    total = OXlist[j].split("").map((num) => {
      if (num === "O") {
        cnt++;
        sum = sum + cnt;
      } else {
        cnt = 0;
      }
      return sum;
    });
  }
  console.log(total[total.length - 1]);
}
