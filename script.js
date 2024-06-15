// const users = [
//   {
//     name: "User1",
//     language: "html",
//     cars: {
//       audi: "a6",
//       bmw: "x5",
//     },
//   },
//   {
//     name: "User2",
//     language: "css",
//     cars: {
//       audi: "a8",
//       bmw: "x6",
//     },
//   },
//   {
//     name: "User3",
//     language: "js",
//     cars: {
//       audi: "a7",
//       bmw: "None",
//     },
//   },
// ];

// for (const {
//   name,
//   cars: { audi: car },
// } of users) {
//   console.log(name, car);
// }

// for (const {
//   name,
//   cars: { audi, bmw },
// } of users) {
//   console.log(name, bmw);
// }

// const products = [
//   {
//     name: "Radar",
//     price: 1300,
//     quantity: 9,
//   },
//   {
//     name: "Scaner",
//     price: 2700,
//     quantity: 3,
//   },
//   {
//     name: "Droid",
//     price: 1100,
//     quantity: 6,
//   },
//   {
//     name: "Grip",
//     price: 1450,
//     quantity: 10,
//   },
// ];

// function getAllPropValue(propName) {
//   const newArr = [];

//   for (const product of products) {
//     propName in product ? newArr.push(product[propName]) : newArr;
//   }
//   return newArr;
// }
// console.log(getAllPropValue("price"));

// function foo({ name, car: { bmw = "None" } = {} } = {}) {
//   console.log(name, bmw);
//   ///
// }
// foo({
//   name: "User1",
//   language: "html",
//   car: {
//     audi: "a6",
//     bmw: "x5",
//   },
// });
// foo({
//   name: "User2",
//   language: "html",
// });
// foo({});

// const arr1 = [12, 22, 3, 14, 45, 16, 57];
// // //spread 12, 22, 3, 14, 45, 16, 57
// // const min = Math.min(...arr);
// // console.log(min);

// const arr2 = [...arr1];
// arr2.splice(0, 1);
// console.log(arr1);
// 2;

//Rest------------------------

// const [first, second, ...props] = arr1;
// console.log(props);
// console.log(first);

// // for (let prop of props) {
// //   prop *= first;
// // }
// for (let i = 0; i < props.length; i += 1) {
//   props[i] *= first;
// }
// console.log(props);

// const arr1 = [12, 22, 3, 14, 45, 16, 57];

// function foo(first, second, ...rest) {
//   console.log(arguments);
//   console.log(first, second, rest);
// }
// foo(...arr1);
// // foo(1, 2, 3, 4, 5, 6);

// ----Інлайн колбеки-----------------------------------------------

// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Mango", function great(name) {
//   console.log(`Ласкаво просимо, ${name}`);
// });

// registerGuest("Полі", function notify(name) {
//   console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хв.`);
// });

// function processCall(recipient, onAvailable, onNotAvailable) {
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }
//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`З'єдную з ${name}, очікуйте...`);
// }
// function activateAnsweringMachine(name) {
//   console.log(`Абонемент ${name}  недоступний, залиште повідомлення.`);
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонемент ${name} недоступний, записуємо голограму.`);
// }

// processCall("Манго", takeCall, activateAnsweringMachine);
// processCall("Полі", takeCall, leaveHoloMessage);

// function printValue(value) {
//   console.log(value);
// }

// function prettyPrint(value) {
//   console.log("Logging value: ", value);
// }

// function repeat(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// }

// repeat(3, printValue);
// repeat(3, prettyPrint);

// Метод forEach---------------------

// масив.forEach(function callback(element, index, array) {
//   //
// });

// const numbers = [5, 10, 15, 20, 25];

// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// }

// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// Стрілочні функції------------------------

// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// };
// console.log(classicAdd(1, 2, 3));
// console.log(arrowAdd(1, 2, 3));

// const fnA = function (message, callback) {
//   console.log(message);

//   console.log(callback);
//   callback(100);
// };

// const fnB = function (number) {
//   console.log("Это дог при вызове fnB", number);
// };

// fnA("qweqwe", fnB);
const doMath = function (a, b, callback) {
  const result = callback(a, b);

  console.log(result);
};

const add = function (x, y) {
  return x + y;
};

doMath(2, 3, add);
