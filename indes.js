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
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
console.log(day);
