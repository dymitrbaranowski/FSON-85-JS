// Заміна----------------

// splice(position, num, new_element_1, new_element_2, ...)

// const languages = ["C", "C++", "Java", "JavaScript"];

// languages.splice(2, 1, "C#", "Swift", "Go");
// console.log(languages);

// Function----------------------

// function multiply(){
//   console.log("Це лог, на момент виклику функції multiply");
// }

// multiply()
// multiply()
// multiply()

//
// function multiply(x, y, z ){
//   console.log(`Результат множення дорівнює ${x*y*z}`);
// }

// multiply(2,3,5);
// multiply(2,47,5);

// function multiply(x, y, z ){
//   console.log("Код до return виконується звичайним чином");

//   // Повертаємо результат виразу множення

//   return
// }

// Повернення значення---------

// function multiply(x,y,z){
//   console.log("Код до return виконується звичайним чином");

//   // Повертаэмо результата виразу множення
//   return x * y * z;

//   console.log("Цей лог ніколи не виконається, він стоїть після return");

// }

// Результат роботи функції можна зберегти у змінну

// let result = multiply(2,3,4);
// console.log(result);

// result = multiply(4,8,12)
// console.log(result);

// result = multiply(17, 6, 25)
// console.log(result);

// Параметри за замовчуванням ------------------

// function count(countFrom = 0, countTo = 10, step = 1){
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step){
//     console.log(i);
//   }
// }

// count(1,5);
// count(2);
// count();

// Псевдомасив arguments------------------

// function multiply(){
//   let total = 1;

//   for (const argument of arguments){
//     total *= argument;
//   }

//   return total;
// }

// console.log(multiply(1,2,3));
// console.log(multiply(1,2,3,4));
// console.log((1,2,3,4,5));

// Перетворення псевдомасиву----------------------

// function fn(){
//   // Змінна args буде містити повноцінний масив
//   const args = Array.from(arguments)
// }

// Операція rest-----------------------------------

// function fn(...args){
//   // Зміння args буде містити повноцінний масив
// }

// Патерн "Раннє повернення"---------------------

// function withdraw(amount, balance){
//   if (amount === 0){
//     console.log("Для проведення операції введіть суму більшу за нуль");
//   } else if (amount > balance){
//     console.log("Недостатньо коштів на рахунку");
//   } else {
//     console.log("Операція зняття коштів проведена успішно");
//   }
// }

// withdraw(0, 300);
// withdraw(500, 300);
// withdraw(100, 300);

// function withdraw(amount, balance){
//   if (amount === 0){
//     console.log("Для проведення операції введіть суму більшу за нуль");
//     return
//   }

//   if (amount > balance){
//     console.log("Недостатньо коштів на рахунку");
//     return
//   }

//     console.log("Операція зняття коштів проведена успішно");

// }

// withdraw(0, 300);
// withdraw(500, 300);
// withdraw(100, 300);

// Функціональниц вираз -------------------------------------

//  Function expression  ++++++++++++++++++++++++++++++++++++

// // Оголошення функції (function declaration)
// function multiply(x, y, z){
//   console.log(`Результата множення дорівнює ${x * y * z}`);
// }

// // Функціональний вираз (function expression)
// const multiply = function (x, y, z){
//   console.log( `Результата множення дорівнює ${x * y * z}`);
// }

// const add = function (x, y) {
//   console.log(x);
//   console.log(y);

//   const result = x + y;
//   console.log("x + y:", result);

//   console.log("Выполняется функция add");

//   return result;
// };

// const r1 = add(2, 3);
// console.log("r1: ", r1);
// add(10, 15);
// add(30, 50);

// const fn = function (value) {
//   console.log(1);

//   console.log(2);

//   if (value < 50) {
//     return "Меньше чем 50";
//   }
//   return "Больше чем 50";
// };

// console.log("Результат функции", fn(10));
// console.log("Результат функции", fn(1000));

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (const value of cart) {
//   total += value;
// }

// console.log("Total:", total);

// const calculateTotalPrice = function (items) {
//   console.log(items);
// };

// console.log(calculateTotalPrice([1, 2, 3]));
// console.log(calculateTotalPrice([5, 10, 15, 20]));
// console.log(calculateTotalPrice([1, 2, 3]));

// const add = function (...args) {
//   console.log(args);
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5, 6));

// const filterNumbers = function (array, ...args) {
//   console.log(array);
//   console.log(args);
//   uniqueElements = [];

//   for (const element of array) {
//     if (args.includes(element)) {
//       uniqueElements.push(element);
//       console.log(`${element} есть везде`);
//     }
//   }

//   return uniqueElements;
// };

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15));
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64));

// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     message = "ВИ повнолітня людина";
//   } else {
//     message = "Ви неповнолітня людина";
//   }

//   return message;
// }

// const array = [1, "Hello", null, true, [1, 2, 3]];

// for (let item of array) {
//   if (typeof item === "string") {
//     item = false;
//   }
// }
// console.log("for of", array);

// for (let i = 0; i < array.length; i += 1) {
//   if (typeof array[i] === "string") {
//     array[i] = false;
//   }
// }

// console.log("for", array);

// const array = [1, "Hello", null, true, [1, 2, 3]];

// let i = 0;

// while (i < array.length) {
//   console.log(array[i]);
//   i += 1;
// }

// let value = 1;
// let test = value;
// value = "hello";

// console.log("value", value);
// console.log("test", test);

// const array = [1, 2, 3, 4, 5];
// const copy = array;

// array.push(6, 7);
// copy.push(8, 9);

// console.log(array);
// console.log(copy);

// const array = [1, 2, 3];

// // array.push(4);
// array.pop();
// array.length = 10;
// console.log(array);

// const str = "Hello world I learning JS";
// // const arr = str.split(" ");
// // const result = arr.reverse().join(" ");
// // console.log(arr);

// const result = str.split(" ").reverse().join(" ");
// console.log(str);
// console.log(result);

// // push pop
// arr.push(1, 45, 14);
// arr.pop();
// arr.pop();
// arr.pop();
// console.log(arr);

// 0   1  2
// arr.unshift(1, "a", [1, 2]);

// // arr.shift();
// // arr.shift();
// // arr.shift();
// // console.log(arr);

// // slice

// const result = arr.slice(1, 3);
// console.log(result);
// console.log(arr);

// const arr = ["hello", "world", "JS"];
// // splice

// // arr.splice(1, 1, "from", "react", "node");
// // console.log(arr);
// const idx = arr.indexOf("world");
// const result = arr.splice(idx, 1, "from");
// console.log(arr);
// console.log(result);

// concat

// const arr = [1, 2, 3];
// const arr1 = [4, 5];
// const arr2 = [6, 7];
// const result = arr2.concat(arr, arr1);

// console.log(result);

// const str = "Hello world";

// const result = str.split(" ").reverse().join(" ");
// console.log(str);

// console.log(result);

// const arr = ["Hello", "world"];
// const idx = arr.indexOf("world");

// if (arr.indexOf("world") === -1) {
//   console.log("No");
// } else {
//   console.log("Yes");
// }
// console.log(idx);
// console.log(arr.includes("world"));

// if (arr.includes("world")) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// const arr = ["Hello", "world"];

// arr.push(1, "a", [1, 2]);
// arr.pop();
// arr.pop();
// arr.pop();
// console.log(arr);

// arr.unshift(1, "a", [1, 2]);
// // arr.shift();

// // console.log(arr);

// // slice
// const result = arr.slice(1, 3);
// console.log(result);

// const arr = ["Hello", "world", "Js"];

// // splice

// const idx = arr.indexOf("world");
// const result = arr.splice(idx, 1, "from");
// console.log(arr);

// // arr.splice(1, 0, "from", "ract", "node");
// // console.log(arr);
// console.log(result);

// const genres = ["Jazz", "Blues"];
// // genres.push("Rock-n-roll");
// // console.log(genres.shift());
// // genres.unshift("Country", "Raggae");
// // console.log(genres);
// genres.splice(genres.lengths, 0, "Rock-n-roll");
// console.log(genres.splice(0, 1, "Country", "Raggay"));
// console.log(genres);

// const values = "8 11";
// const arr = values.split(" ");
// const first = Number(arr[0]);
// const last = Number(arr[arr.length - 1]);
// const result = first * last;
// console.log(result);

// const fruits = ["🍎", "🍒", "🍑", "🍌", "🍋"];

// // for (let i = 0; i < fruits.length; i += 1) {
// //   console.log(`${i + 1} - ${fruits[i]}`);
// // }

// for (let i = 0, n = 1; i < fruits.length; i += 1, n += 1) {
//   console.log(`${n} - ${fruits[i]}`);
// }

// let names = "Jacobe, William, Solomon,Artem";
// let phones = "4534975477, 77234543713, 4978573547";
// names = names.split(",");
// console.log(names);
// phones = phones.split(",");
// console.log(phones);
// for (let i = 0; i < names.length, i < phones.length; i += 1) {
//   console.log(`${names[i]} - ${phones[i]}}`);
// }

// const string = "Wellcome to the future";
// const arr = string.split(" ");
// const test = arr.push("1234");
// console.log(test);
// console.log(arr);

// const arr = string.split(" ");
// arr.pop();
// arr.shift();

// const result = arr.join(" ");
// console.log(result);

// const result = string.split(" ").slice(1, -1).join(" ");

// console.log(result);

// const string = "Wellcome to the future";
// const result = string.split("").reverse().join("");
// console.log(result);

// const langs = ["cpython", "bjavascript", "ac++", "haskel", "php", "ruby"];

// // for (const str of langs) {
// //   console.log(str[0]);
// // }
// // const arr = [];
// for (let i = 0; i < langs.length; i += 1) {
//   if (langs[0] > langs[i]) {
//     const result = langs.splice(i, 1)[0];
//     langs.unshift(result);
//   }
// }
// console.log(langs);

// const numbers = [2, 17, 94, 1, -23, 37];
// let min = numbers[0];
// for (const value of numbers) {
//   if (value < min) {
//     min = value;
//   }
// }
// console.log(min);

const arr = [1, 2, 3, 4];
const arr1 = [5, 6, 7, 8];
const arr2 = [8, 9, 10, 11];

// function sum(item) {
//   for (let i = 0; i < arr.length; i += 1) {
//     item[i] = item[i] * 2;
//   }
//   console.log(item);
// }
// sum(arr);
// sum(arr1);
// sum(arr2);

// function declaration---------------
// function name(){

// }

// expression

// const sum = function (item) {
//   for (let i = 0; i < arr.length; i += 1) {
//     item[i] = item[i] * 2;
//   }
//   console.log(item);
// };
// sum(arr);
// sum(arr1);
// sum(arr2);

// function add() {
//   let sum = 0;
//   //   const arr = Array.from(arguments);
//   const arr = [...arguments];
//   console.log(arr);
//   console.log(arguments);
//   //   for (let i = 0; i < arguments.length; i += 1) {
//   //     sum += arguments[i];
//   //   }
//   for (const value of arguments) {
//     sum += value;
//   }
//   console.log(sum);
//   //   console.log(val + val1 + val2 + val3 + val4 + val5);
// }
// add(1, 2, 3, 4, 5, 6);
// add(1, 2, 3, 4);
// add(1, 2, 3, 4, 5);

// function largeNumber() {
//   let sum = 0;

//   for (const value of arguments) {
//     sum += value;
//     if (sum > 10) {
//       return true;
//     }
//   }

//   return false;
// }
// const response = largeNumber(1, 2, 3);
// console.log(response);
// console.log(largeNumber(1, 2, 3, 4));
// console.log(largeNumber(1, 2, 3, 4, 5, 6));

// function add(val, val1 = 0) {
//   return val + val1;
// }

// console.log(add(3, 4));
// console.log(add(5));
// console.log(add(11));

// let a = 10;

// function foo() {
//   let a = 15;
//   a = 45;
// }
// foo();
// console.log(a);

// let a = 10;

// function foo(a) {
//   a = 45;
// }
// foo(a);
// console.log(a);

// const test = [1, 2, 3];

// function foo(arr) {
//   arr.splice(0, 1);
// }

// foo(test);
// console.log(test);
