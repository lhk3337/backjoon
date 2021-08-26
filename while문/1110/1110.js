const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString();

// let result = input
// let cnt =0;
// while(1){
//     let num1 = parseInt(input/10);
//     let num2 = input % 10;
//     let sum = (num1 + num2) % 10;
//     let next = num2 * 10 + sum;
//     input = next
//     cnt++;
//     if(next == result ){
//         break;
//     }
// }
// console.log(cnt);

let result = Number(input);
let count = 0;
let sum = 0;
while (true) {
  sum = Math.floor(result / 10) + (result % 10);
  result = (result % 10) * 10 + (sum % 10);
  count++;
  if (result == input) {
    break;
  }
}
console.log(count);
