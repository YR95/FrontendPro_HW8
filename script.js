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

console.log('Вивести на сторінку в один рядок через кому числа від 10 до 20');
let res = '';
let inc = 10;
while (inc <= 20) {
  res = res + inc + ',';
  inc++;
}
console.info(`i = ${res}`);

console.log('Вивести квадрати чисел від 10 до 20');
res = '';
inc = 10;
while (inc <= 20) {
  res = res + Math.pow(inc,
    2) + ',';
  inc++;
}
console.info(`i = ${res}`);

console.log('Вивести таблицю множення на 7');
res = '';
inc = 1;
while (inc <= 10) {
  res = res + inc * 7 + ' ';
  inc++;
}
console.info(`i = ${res}`);

console.log('Знайти суму всіх цілих чисел від 1 до 15');
res = 0;
inc = 1;
while (inc <= 15) {
  res += inc;
  inc++;
}
console.info(`i = ${res}`);

console.log('Знайти добуток усіх цілих чисел від 15 до 35.');
res = 15;
inc = 16;
while (inc <= 35) {
  res = res * inc;
  inc++;
}
console.info(`i = ${res}`);

console.log('Знайти середнє арифметичне всіх цілих чисел від 1 до 500.');
res = 0;
inc = 1;
while (inc <= 500) {
  res += inc;
  inc++;
}
console.info(`i = ${res / 500}`);

console.log('Вивести суму лише парних чисел в діапазоні від 30 до 80.');
res = 0;
inc = 30;
while (inc <= 80) {
  if (inc % 2 === 0) {
    res += inc;
  }
  inc++;
}
console.log(`i = ${res}`);

console.log('Вивести всі числа в діапазоні від 100 до 200 кратні 3');
res = '';
inc = 100;
while (inc <= 200) {
  if (inc % 3 === 0) {
    res += inc + ' ';
  }
  inc++;
}
console.log(`i = ${res}`);

console.log('Дано натуральне число. Знайти та вивести на сторінку всі його дільники.');
res = parseInt(prompt('Дано натуральне число',
  '26'));
let result1 = '';
inc = 1;
while (inc !== res + 1) {
  if (res % inc === 0) {
    result1 += inc + ' ';
  }
  inc++;
}
console.log(`${result1}`);

console.log('Визначити кількість його парних дільників.');
let count = 0;
let sumOfOddDiv = 0;
let test = 0;
inc = 1;
while (inc !== res + 1) {
  test = res % inc;
  if (test === 0) {
    if (inc % 2 === 0) {
      count++;
      sumOfOddDiv = sumOfOddDiv + inc;
    }
  }
  inc++;
}
console.info(`${count}`);

console.log('Знайти суму його парних дільників.');
console.log(`${sumOfOddDiv}`);

console.log('Надрукувати повну таблицю множення від 1 до 10.');
let i = 1, j = 1;
let result = '';
while (i <= 10) {
  while (j <= 10) {
    result = result + (i * j) + ` `;
    j++;

  }
  result += ',\n';
  j = 1;
  i++;
}
console.log(`${result}`);


