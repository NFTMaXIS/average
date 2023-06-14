const numbers = [10, 20, 30, 40];
let sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
const avr = sum / numbers.length;
console.log("average is : ", avr);
