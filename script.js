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

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
let total = 0;

for (const value of cart) {
  total += value;
}

console.log("Total:", total);

const calculateTotalPrice = function (items) {
  console.log(items);
};

console.log(calculateTotalPrice([1, 2, 3]));
console.log(calculateTotalPrice([5, 10, 15, 20]));
console.log(calculateTotalPrice([1, 2, 3]));
