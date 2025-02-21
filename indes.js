for (i = 1; i <= 14; i++) {
  console.log(i);
}
var input = 1;
// /===================/
while (input <= 19) {
  console.log(input);
  input++;
}
// =====================
let b = 24;

do {
  console.log(b);
  b--;
} while (b > 0);
// ======================
let numbers = [4, 5, 6, 7, 8, 9, 23, 24, 25, 26, 29];
let even = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) even.push(numbers[i]);
}
console.log(`Even numbers in an array are: ${even}`);
// ====================
