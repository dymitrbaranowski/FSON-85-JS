// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];

// console.table(friends);

// friends[1] = "qweqwe";
// friends[3] = 123123;

// console.table(friends);

// const lastIndex = friends.length - 1;
// console.log(lastIndex);

// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// console.table(friends);
// const lastIndex = friends.length - 1;

// for (let i = 0; i <= lastIndex; i += 1) {
//   friends[i] += "-1";
// }

// for (const friend of friends) {
//   console.log(friend);
// }
// console.table(friends);

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

// let total = 0;

// 1 перебрать масив

// for (let i = 0; i < cart.length; i += 1) {
//   console.log(cart[i]);

//   total += cart[i];
// }

// for (const value of cart) {
//   total += value;
// }

// console.log("Total:", total);
// 2 сделать переменную total до цикла

// 2 каждый елемент приплюсовать к total

// for (let i = 0; i < cart.length; i += 1) {
//   cart[i] = Math.round(cart[i] * 1.1);
// }

// console.log(cart);

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

// let total = 0;

// 1 переменнная total
// 2 перебрать масив
// for (let i = 0; i < numbers.length; i += 1) {
//   const number = numbers[i];
//   console.log(number);
//   // 3 на каждой итерации проверить елемент на четность

//   if (number % 2 === 0) {
//     console.log("Четное!!!");
//     // 4 если четный, плюсуем к тотал
//     total += number;
//   }
// }

// for (const number of numbers) {
//   console.log(number);

//   if (number % 2 === 0) {
//     console.log(`${number} - Четное!!!`);

//     total += number;
//   }
// }

// for (const number of numbers) {
//   if (number % 2 !== 0) {
//     console.log("Эту итерацию нужно пропустить", number);
//     continue;
//   }

//   console.log(`${number} - Четное!!!`);

//   total += number;
// }

// console.log("Total:", total);

// const logins = ["fwefweufehi", "weuW83473748", "poly1scute", "wDkdowdw2034"];
// const loginToFind = "poly1scute";

// let message = ` Пользователь ${loginToFind} не найден.`;

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];

//   console.log("Login:", login);
//   console.log(`${login} === ${loginToFind}:`, login === loginToFind);

//   if (login === loginToFind) {
//     console.log("Ура, равны!!!");
//     message = `Пользователь ${loginToFind} найден`;
//     break;
//   }
// }

// for (const login of logins) {
//   console.log("Login:", login);
//   console.log(`${login} === ${loginToFind}:`, login === loginToFind);

//   if (login === loginToFind) {
//     console.log("Ура, равны!!!");
//     message = `Пользователь ${loginToFind} найден`;
//     break;
//   }
// }

// console.log(message);

// const a = 5 > 10 ? "ага" : "нет";

// const message = logins.includes(loginToFind)
//   ? `Пользователь ${loginToFind} найден.`
//   : `Пользователь ${loginToFind} не найден.`;
// console.log(message);

// const numbers = [51, 18, 13, 24, 7, 85, 19];

// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }

// console.log("smallestNumber:", smallestNumber);

// let bigestNumber = numbers[0];

// for (const number of numbers) {
//   if (number > bigestNumber) {
//     bigestNumber = number;
//   }
// }

// console.log("bigestNumber:", bigestNumber);

// const friends = ["Mango", "Poly", "Kiwi", "Ajax"];

// let string = "";

// for (const friend of friends) {
//   string += friend + ",";
// }
// string = string.slice(0, string.length - 1);

// console.log(string);

// const string = friends.join(",");
// console.log(string);

// const string = "YJguwWdURYDFHllcd";
// const letters = string.split("");
// let invertedString = "";

// console.log(letters);

// for (const letter of letters) {
//   console.log(letter);

// if (letter === letter.toLowerCase()) {
//   console.log("Эта буква в нижнем регистре!!! - ", letter);

//   invertedString += letter.toUpperCase();
// } else {
//   console.log("Эта буква в верхнем регистре!!! - ", letter);
//   invertedString += letter.toLowerCase();
// }

//   const isEqual = letter === letter.toLowerCase();
//   invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
// }

// console.log("invertedString: ", invertedString);

// Должно получиться top-10-benefits-of-react-framework
// const title = "Top 10 benefits of React framework";

// const normalizedTitle = title.toLocaleLowerCase();
// console.log(normalizedTitle);

// const words = normalizedTitle.split(" ");
// console.log(words);

// const slug = words.join("-");
// console.log(slug);

// const slug1 = title.toLocaleLowerCase().split(" ").join("-");
// console.log(slug1);
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];

// let total = 0;

// const numbers = array1.concat(array2);

// for (const number of numbers){
//   total += number
// }

// console.log(total);

// const clients = ["Mango", "Ajax", "Poly", "Kiws"];
// console.log(clients.slice(1,3));

// console.log(clients.slice(1));
// console.log(clients.slice(-1));

// splice ------------------------------

// const colors = ["red", "green", "blue"]

// colors.splice(2,0,"purple")
// console.log(colors);

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

const fn = function (value) {
  console.log(1);

  console.log(2);

  if (value < 50) {
    return "Меньше чем 50";
  }
  return "Больше чем 50";
};

console.log("Результат функции", fn(10));
console.log("Результат функции", fn(1000));
