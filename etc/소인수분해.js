let N = 72;

for (let i = 2; i <= parseInt(Math.sqrt(N)); i++) {
  //   console.log(parseInt(Math.sqrt(N)));
  while (N % i === 0) {
    console.log(i);
    N /= i;
  }
  if (N != 1) {
    console.log(N);
  }
}
