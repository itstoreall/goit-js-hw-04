/*

Callback функция для получения одного вычисляемого 
значения массива

Функции add, sub и mult принимают два параметра - 
accum и element , возвращает число - сумму, разность 
или произведение параметров.

Дополни тело функции reduceArray строкой присвоения 
accum вызова функции cb. Функция reduceArray должна 
будет подсчитать сумму или разность или произведение 
всех элементов массива в зависимости от того какая 
именно из трех функция (add, mult, sub) будет 
передана в качестве cb.

*/
// /*

// Autocheck

const add = (accum, element) => accum + element;
const mult = (accum, element) => accum * element;
const sub = (accum, element) => accum - element;

function reduceArray(array, cb, initial) {
  "use strict";
  let i;
  let accum;
  if (arguments.length >= 3) {
    accum = initial;
    i = 0;
  }
  if (arguments.length === 2) {
    accum = array[0];
    i = 1;
  }
  for (i; i < array.length; i += 1) {
    const element = array[i];
    // Write code under this line
    accum = cb(accum, element);
  }
  return accum;
}

const arr = [1, 2, 3, 4, 5];

console.log(reduceArray(arr, add)); // 15
console.log(reduceArray(arr, add, 10)); // 25

console.log(reduceArray(arr, mult)); // 120
console.log(reduceArray(arr, mult, 10)); // 1200

console.log(reduceArray(arr, sub)); // -13
console.log(reduceArray(arr, sub, 10)); // -5

// */
/*

// IDE

const add = (accum, element) => accum + element;
const mult = (accum, element) => accum * element;
const sub = (accum, element) => accum - element;

function reduceArray(array, cb, initial) {
  //   console.log(array);
  //   console.log(cb);
  //   console.log(initial);

  let i;
  let accum;
  if (arguments.length >= 3) {
    accum = initial;
    i = 0;
  }

  //   console.log(arguments.length);

  if (arguments.length === 2) {
    accum = array[0];
    i = 1;
  }
  console.log("accum:", accum);
  //   console.log("array[0]:", array[0]);
  //   console.log("accum:", accum);

  for (i; i < array.length; i += 1) {
    const element = array[i];
    // Write code under this line
    console.log("element:", element);

    accum = cb(accum, element);
  }

  return accum;
}

const arr = [1, 2, 3, 4, 5];

console.log(reduceArray(arr, add)); // 15
console.log(reduceArray(arr, add, 10)); // 25

console.log(reduceArray(arr, mult)); // 120
console.log(reduceArray(arr, mult, 10)); // 1200

console.log(reduceArray(arr, sub)); // -13
console.log(reduceArray(arr, sub, 10)); // -5

*/
