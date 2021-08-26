let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split(" ");
let ours = Number(input[0]);
let mins = Number(input[1]);
let minsCals = mins + 60 - 45;

if (mins > 44) {
  mins -= 45;
} else if (ours === 0) {
  ours = 23;
  mins = minsCals;
} else {
  ours -= 1;
  mins = minsCals;
}

console.log(ours, mins);
