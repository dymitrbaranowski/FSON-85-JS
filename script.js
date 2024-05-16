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

// const arr = [1, 2, 3, 4];
// const arr1 = [5, 6, 7, 8];
// const arr2 = [8, 9, 10, 11];

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

// function createString(name, year) {
//   const result = add(year);
//   return `${name} years ${result}`;
// }

// console.log(createString("Mango", [1, 2, 3]));

// function add(arr) {
//   let sum = 0;
//   for (const num of arr) {
//     sum += num;
//   }
//   return sum;
// }

// function calcBMI(weigth, heigth) {
//   weigth = Number(weigth.replace(",", "."));
//   heigth = Number(heigth.replace(",", "."));

//   return Number(weigth / Math.pow(heigth, 2)).toFixed(1);
//   // return Number((weigth / heigth ** 2).toFixed(1));
// }

// const bmi = calcBMI("88,3", "1.75");
// console.log(bmi);

// function min(a, b) {
//   // if (a > b) {
//   //   return b;
//   // }
//   // return a;

//   return a > b ? b : a;
// }

// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));

// function getReactArea(dimentions) {
//   dimentions = dimentions.split(" ");

//   // const first = Number(dimentions[0]);
//   // const second = Number(dimentions[1]);

//   // return first * second;

//   return Number(dimentions[0] * Number(dimentions[1]));
//   // console.log(dimentions);
// }

// console.log(getReactArea("8 11"));
// console.log(getReactArea("46 11"));
// console.log(getReactArea("8 112"));

// function logItems(items) {
//   for (let i = 0, num = 1; i < items.length; i += 1, num += 1) {
//     console.log(`${num} - ${items[i]}`);
//   }
// }

// logItems(["Mango", "POly", "Ajax"]);
// logItems(["🍎", "🍒", "🍑", "🍌", "🍋"]);

// function printsContactsInfo(names, phones) {
//   names = names.split(",");
//   phones = phones.split(",");
//   console.log(phones);
//   for (let i = 0; i < names.length, i < phones.length; i += 1) {
//     console.log(`${names[i]} - ${phones[i]}`);
//   }
// }

// printsContactsInfo(
//   "Jacob, William, Solomon, Artemiy",
//   "3423848238,3572573232,32834848448,47547743974754"
// );

// function findLargestNumber() {
//   //   const arr = Array.from(arguments);
//   const arr = [...arguments];
//   let max = arr[0];
//   for (const num of arr) {
//     if (num > max) {
//       max = num;
//     }
//   }
//   return max;
// }

// console.log(findLargestNumber(2, 17, 94, 1, 23, 37));
// console.log(findLargestNumber(49, 4, 7, 83, 12));
// console.log(findLargestNumber([1, 3, 5, 7], 6, 7, 8));

// function findLargestNumber() {
//   let max;
//   for (const num of arguments) {
//     if (typeof num === "number") {
//       max = num;
//       break;
//     }
//   }

//   for (const num of arguments) {
//     if (typeof num === "number") {
//       if (num > max) {
//         max = num;
//       }
//     } else {
//       findLargestNumber(...num);
//       findLargestNumber(...num);
//       findLargestNumber(...num);
//     }
//   }

//   return max;
// }

// console.log(findLargestNumber([[1, 433], 5, 7], 6, 7, 8, 88, 123));

// function calAvarage() {
//   console.log(arguments);
//   let total = 0;
//   for (const num of arguments) {
//     total += num;
//   }
//   return total / arguments.length;
// }

// console.log(calAvarage(1, 2, 3, 4));
// console.log(calAvarage(14, 8, 2));
// console.log(calAvarage(27, 43, 2, 8, 36));

// function formatTime(minutes) {
//   const hours = Math.floor(minutes / 60);
//   minutes = minutes % 60;

//   return `${hours.toString().padStart(2, "0")} : ${minutes
//     .toString()
//     .padStart(2, "0")}`;
// }

// console.log(formatTime(70));
// console.log(formatTime(450));
// console.log(formatTime(1441));

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// function addCourse(course) {
//   if (courses.includes(course)) {
//     return "Ви вже маєте такий курс";
//   }
//   courses.push(course);
// }

// addCourse("Express");
// console.log(courses);

// console.log(addCourse("CSS"));

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// function removeCourse(course) {
//   if (course.includes(course)) {
//     const idx = courses.indexOf(course);
//     courses.splice(idx, 1);

//     return;
//   }

//   return "Кур із таким імям не знайдено";
// }
// console.log(!!~0);
// function removeCourse(course) {
//   const idx = courses.indexOf(course);
//   if (!!~idx) {
//     courses.splice(idx, 1);
//     return;
//   }
//   return "Курc із таким імям не знайдено";
// }

// removeCourse("React");
// console.log(courses);

// console.log(removeCourse("Vue"));

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// function updateCourse(oldCourse, newCourse) {
//   const idx = courses.indexOf(oldCourse);
//   if (!!~idx) {
//     courses.splice(idx, 1, newCourse);
//     return;
//   }
//   return "Курc із таким імям не знайдено";
// }

// updateCourse("Expres", "Next.JS");
// console.log(courses);
// console.log(updateCourse("Express", "Next.JS"));

// const arr11 = ["a", "b", "c"];
// const idx = arr11.indexOf("a");
// // if (idx) {
// //   console.log("Yes");
// // } else {
// //   console.log("No");
// // }
// // console.log(idx);
// // -(x + 1);
// console.log(!!-(idx + 1));
// console.log(!!~idx);
// console.log(Boolean(~idx));

// var data = [5, 1, 4, 2, 8];
// function sortBublle(data) {
//   for (var i = data.length - 1; i > 0; i--) {
//     var counter = 0;
//     for (var j = 0; j < i; j++) {
//       if (data[j] > data[j + 1]) {
//         var tmp = data[j];
//         data[j] = data[j + 1];
//         data[j + 1] = tmp;
//         counter++;
//       }
//     }
//     if (counter == 0) {
//       break;
//     }
//   }
//   return document.write(data);
// }
// sortBublle(data);
// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       console.log(arr[j + 1]);
//       if (arr[j] > arr[j + 1]) {
//         const tmp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = tmp;
//       }
//     }
//   }
//   console.log(arr);
// }

// const test = [33, 245, 1, 15, 122, 5, 65, 90];
// bubbleSort(test);

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
// }

// console.log(filterArray([2, 3, 4, 5, 7, 8, 9, 10], 4));

// function getEvenNumbers(start, end) {
//   let evenNumbers = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }

//   return evenNumbers;
// }
// console.log(getEvenNumbers(3, 11));

// function getEvenNumber(start, end) {
//   let evenNumbers = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }
//   return evenNumbers;
// }

// console.log(getEvenNumber(2, 5));

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Знайшли число 3, перериваємо виконання циклу");
//     break;
//   }
// }

// const start = 6;
// const end = 27;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;

//     break;
//   }
// }
// console.log(number);

// function fn() {
//   for (let i = 0; i <= 5; i += 1) {
//     console.log(i);
//     if (i === 3) {
//       console.log(
//         "Знайшли число 3, робимо повернення, перериваючи цикл і функцію"
//       );
//       return i;
//     }
//   }
//   //   Цей console.log(object) не виконається
//   console.log("Лог після циклу в тілі функції");
// }

// const result = fn();
// console.log("Лог після виходу з функції");
// console.log(`Результат виконання функції - ${result}`);

// function findeNumber(start, end, divisor) {
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return i;
//     }
//   }
//   return number;
// }

// console.log(findeNumber(2, 6, 5));

// function includes(array, value) {
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(
//   includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")
// );
// console.log(includes(["apple", "plum", "pear", "orange"], "plum"));

// function calcSum(numOne, numTwo, more, less) {
//   let numSum = numOne + numTwo;

//   if (numSum > 3) {
//     more();
//   } else {
//     less();
//   }
// }

// function showMoreMessage() {
//   console.log("Больше чем 3");
// }

// function showLessMessage() {
//   console.log("Меньше чем 3");
// }

// calcSum(1, 5, showMoreMessage, showLessMessage);

// let getMessage = (text, name) => text + ", " + name + "! ";

// console.log(getMessage("Привет", "Вася"));

//

// Многострочная стрелочная фуннкция
// let getMessage = (text, name) => {
//   let message = text + ", " + name + "!";
//   return message;
// };
// console.log(getMessage("Привет", "Вася"));

// function unixTime() {
//   let time = Math.floor(new Date().getTime());
//   console.log(time);
// }

// unixTime();
// unixTime();

// function randomInt() {
//   const min = 100;
//   const max = 200;
//   let rand = Math.floor(min + Math.random() * (max + 1 - min));
//   console.log(rand);
// }

// randomInt();

// function randomInt() {
//   console.log("random int 555");
// }

// randomInt();
// randomInt();

// let min = 100;
// let max = 200;
// function rand() {
//   let rand = Math.floor(min + Math.random() * (max + 1 - min));
//   console.log(rand);
// }

// rand();

// function createRandomArray(len) {
//   const arr = [];
//   for (let i = 0; i < len; i += 1) {
//     arr.push(Math.floor(Math.random() * 1000));
//   }
//   console.log("random array is: ", arr);
//   return arr;
// }

// function bubbleSort(arr = []) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 1; j < arr.length; j++) {
//       const temp = arr[j];
//       if (arr[j - 1] > arr[j]) {
//         arr[j] = arr[j - 1];
//         arr[j - 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// console.log("sorted arr:", bubbleSort(createRandomArray(10)));

// Обэкты-----------
// const playlist = {
//   name: "Мой супер плейлист",
//   rating: 5,
//   tracks: ["Трек-1", "трек-2", "трек-3"],
//   trackCount: 3,
// };

// console.log(playlist);

// const propertyName = "tracks";

// console.log(playlist.propertyName);
// console.log(playlist[propertyName]);

// const username = "Mango";
// const email = "mango@mail.com";

// const signupData = {
//   username,
//   email,
// };

// console.log(signupData);

// Вычисляемые свойства ---

// <input name="color" value="tomato" >
// const inputName = "color";
// const inputValue = "tomato";

// const colorPickerData = {
//   [inputName]: inputValue,
// };

// console.log(colorPickerData);
/*
   Сcылочный тип
*/

// const a = { x: 1, y: 2 };
// const b = a;

// const a = [1, 2, 3];

// a.hello = ":)";

// console.log(a);

// const fn = function () {
//   console.log("hello");
// };

// fn.hello = ":)";
// console.dir(fn.hello);
// const bookShelf = {
//   books: ["The last Kingdom"],
//   getBooks() {
//     console.log(this);
//   },
// };

// bookShelf.getBooks();

// const bookShelf = {
//   books: ["The last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);

//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks());
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks());
// bookShelf.removeBook("The Mist");
// console.log(bookShelf.getBooks());

// const playlist = {
//   name: "Мой супер плейлист",
//   rating: 5,
//   tracks: ["Трек-1", "трек-2", "трек-3"],

//   chamgeName(newName) {
//     console.log("this внутри changeName: ", this);

//     this.name = newName;
//   },
//   addTrack(track) {
//     this.tracks.push(track);
//   },
//   updateRating(newRating) {
//     this.rating = newRating;
//   },
//   getTrackCount() {
//     return this.tracks.length;
//   },
// };

// console.log(playlist.getTrackCount());

// playlist.chamgeName("Новое имя");
// console.log(playlist);

// playlist.addTrack("Новый трек 1");
// console.log(playlist.getTrackCount());
// playlist.addTrack("Новый трек 2");
// playlist.addTrack("Новый трек 3");
// console.log(playlist.getTrackCount());

// playlist.updateRating(4);

// console.log(playlist);

// Перебираючі методи обєкта--------------

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedback = 0;
// const keys = Object.keys(feedback);

// console.log(keys);

// for (const key of keys) {
//   console.log(key);
//   console.log(feedback[key]);

//   totalFeedback += feedback[key];
// }

// console.log("totalFeedback:", totalFeedback);

// const values = Object.values(feedback);

// console.log(values);

// for (const value of values) {
//   console.log(value);

//   totalFeedback += value;
// }

// console.log("totalFeedback:", totalFeedback);

// const friends = [
//   { name: "Msngo", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: false },
// ];

// console.log(friends);

// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
// };

// const values = Object.values(goods);

// let total = 0;

// for (const value of values) {
//   total += value;
// }

// console.log(total);

// const book = {
//   title: "the Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys);

// const values = Object.values(book);
// console.log(values);

// const entries = Object.entries(book);
// console.log(entries);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смішної людини",
//     author: "Федір Достоєвський",
//     rating: 7.75,
//   },
// ];

// for (const book of books) {
//   // Об'єкт книги
//   console.log(book);
//   // Назва
//   console.log(book.title);
//   // Автор
//   console.log(book.author);
//   // Рейтинг
//   console.log(book.rating);
// }

// const bookNames = [];

// for (const book of books) {
//   bookNames.push(book.title);
// }

// console.log(bookNames);

// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// const avaregRating = (totalRating / books.length).toFixed(1);
// console.log(avaregRating);

const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: true },
  { name: "Ajax", online: false },
];

console.table(friends);

// for (const friend of friends) {
//   console.log(friend);

//   friend.newprop = 555;
// }

// console.table(friends);

const findeFriendByName = function (allFriends, friendName) {
  for (const friend of allFriends) {
    //  console.log(friend);
    //  console.log(friend.name);

    if (friend.name === friendName) {
      return "Нашли!!!";
    }
  }
  return "Не нашли";
};

// console.log(findeFriendByName(friends, "Poly"));
// console.log(findeFriendByName(friends, "Chelsy"));

//  Получить все имена друзей

const getAllFriends = function (allFriends) {
  const names = [];
  for (const friend of allFriends) {
    console.log(friend.name);
    names.push(friend.name);
  }
  console.log(names);
};

console.log(getAllFriends(friends));
