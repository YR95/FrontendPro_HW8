// Написати цикли, які зможуть:
//
//   Вивести на сторінку в один рядок через кому числа від 10 до 20.
// Вивести квадрати чисел від 10 до 20.
// Вивести таблицю множення на 7.
// Знайти суму всіх цілих чисел від 1 до 15.
// Знайти добуток усіх цілих чисел від 15 до 35.
// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
// Вивести суму лише парних чисел в діапазоні від 30 до 80.
// Вивести всі числа в діапазоні від 100 до 200 кратні 3.
// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
//   Визначити кількість його парних дільників.
//   Знайти суму його парних дільників.
//   Надрукувати повну таблицю множення від 1 до 10.

let res = '';
let i;
for (i = 10; i < 21; i++) {
  res = res + i + ',';
}
console.log('Вивести на сторінку в один рядок через кому числа від 10 до 20');
console.info(`i = ${res}`);

let res2 = '';
for (i = 10; i < 21; i++) {
  res2 = res2 + Math.pow(i,
    2) + ',';
}
console.log('Вивести квадрати чисел від 10 до 20');
console.info(`i = ${res2}`);

let res3 = '';
for (i = 1; i < 10; i++) {
  res3 = res3 + 7 * i + ' ';
}
console.log('Вивести таблицю множення на 7');
console.info(`${res3}`);

let res4 = 0;
for (i = 1; i < 16; i++) {
  res4 = res4 + i;
}
console.log('Знайти суму всіх цілих чисел від 1 до 15');
console.info(`${res4}`);

res4 = 15;
for (i = 16; i < 36; i++) {
  res4 = res4 * i;
}
console.log('Знайти добуток усіх цілих чисел від 15 до 35.');
console.info(`${res4}`);

console.log('Знайти середнє арифметичне всіх цілих чисел від 1 до 500.');
res4 = 0;
for (i = 1; i < 501; i++) {
  res4 = res4 + i;
}
console.info(`${res4 / 500}`);

console.log('Вивести суму лише парних чисел в діапазоні від 30 до 80.');
res4 = 0;
for (i = 30; i < 81; i++) {
  if (i % 2 === 0) {
    res4 = res4 + i;
  }
}
console.info(`${res4}`);

console.log('Вивести всі числа в діапазоні від 100 до 200 кратні 3');
res4 = 0;
for (i = 100; i < 201; i++) {
  if (i % 3 === 0) {
    res4 = res4 + i + ', ';
  }
}
console.info(`${res4}`);

console.log('Дано натуральне число. Знайти та вивести на сторінку всі його дільники.');
res4 = parseInt(prompt('Дано натуральне число',
  '26'));
let result = '';
for (i = 1; i <= res4; i++) {
  if (res4 % i === 0) {
    result = result + i + ', ';
  }
}
console.info(`${result}`);

console.log('Визначити кількість його парних дільників.');
let count = 0;
let sumOfOddDiv = 0;
let test = 0;
for (i = 1; i <= res4; i++) {
  test = res4 % i;
  if (test === 0) {
    if (i % 2 === 0) {
      count++;
      sumOfOddDiv = sumOfOddDiv + i;
    }
  }
}
console.info(`${count}`);

console.log('Знайти суму його парних дільників.');
console.log(`${sumOfOddDiv}`);

console.log('Надрукувати повну таблицю множення від 1 до 10.');
result = '\n';
for (i = 1; i < 10; i++) {
  for (j = 1; j < 10; j++) {
    result = result + (i * j) + ' ';
  }
  result += ',\n';
}
console.log(`${result}`);

