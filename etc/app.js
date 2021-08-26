const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
let input = fs.readFileSync(filePath).toString();
input = input.split("\n");
console.log(input);

const testCaseNum = Number(input[0]);
console.log("TestCaseNum : ", testCaseNum);

for (let i = 1; i <= testCaseNum; ++i) {
  // const arr = input[i].split(" "); //.map(item=>+item)
  // let newArr = [];
  // for (let i = 0; i < arr.length; ++i) {
  //   newArr.push(+arr[i]);
  // }
  // console.log("newArr :", newArr);
  const arr = input[i].split(" ").map((item) => +item);
  console.log("arr :", arr);
  let totalSum = 0;
  const arrLength = arr[0];
  for (let i = 1; i <= arrLength; ++i) {
    totalSum += arr[i];
  }
  console.log(totalSum);
}
