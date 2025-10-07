const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const ask = (q) => new Promise(resolve => rl.question(q, resolve));

function add(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
function multiply(numbers) {
  return numbers.reduce((a, b) => a * b, 1);
}
function subtract(numbers) {
  if (numbers.length === 0) throw new Error('No numbers provided for subtraction.');
  return numbers.slice(1).reduce((a, b) => a - b, numbers[0]);
}
function divide(numbers) {
  if (numbers.length === 0) throw new Error('No numbers provided for division.');
  return numbers.slice(1).reduce((a, b) => {
    if (b === 0) throw new Error('Division by zero detected.');
    return a / b;
  }, numbers[0]);
}
function average(numbers) {
  if (numbers.length === 0) return 0;
  return add(numbers) / numbers.length;
}

async function getPositiveInt(promptText) {
  while (true) {
    const ans = (await ask(promptText)).trim();
    const num = Number(ans);
    if (Number.isInteger(num) && num > 0) return num;
    console.log('Please enter a positive integer (e.g., 2).');
  }
}
async function getNumber(promptText) {
  while (true) {
    const ans = (await ask(promptText)).trim();
    const num = Number(ans);
    if (!Number.isNaN(num)) return num;
    console.log('That is not a valid number. Try again (e.g., 3.14 or -2).');
  }
}

//Kulang og async function main

