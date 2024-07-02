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
// const doMath = function (a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);
// };

// doMath(2, 3, function (x, y) {
//   return x + y;
// });

// doMath(12, 3, function (x, y) {
//   return x - y;
// });

// const buttonRef = document.querySelector(".js-button");

// console.dir(buttonRef);

// const handleBtnClick = function () {
//   console.log("Клик по кнопке " + Date.now());
// };

// buttonRef.addEventListener("click", handleBtnClick);

// // function addEventListener(eventType, callback) {
// //   if (eventType == event) {
// //     callback();
// //   }
// // }

// const onGetPositionSuccess = function (position) {
//   console.log("Это вызов onGetPositionSuccess");
//   console.log(position);
// };

// const onGetPositionError = function (error) {
//   console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(
//   onGetPositionSuccess,
//   onGetPositionError
// );

// const callback = function () {
//   console.log("Через 2 секунды внутри колбека в таймауте");
// };
// console.log("В коде перед таймаутом");

// setTimeout(callback, 2000);

// console.log("В коде после таймаута");

// const filter = function (array, test) {
//   const filteredArray = [];

//   for (const el of array) {
//     console.log(el);
//     const passed = test(el);

//     if (passed) {
//       filteredArray.push(el);
//     }
//   }

//   return filteredArray;
// };

// 1 нада передать функцию
// 2. функция получает елемент масива
// 3. если елемент массива удовлетворяет условию то функция вернет true
// 4. если елемент массива не удовлетворяет условию то функция вернет false

// const callback1 = function (value) {
//   return value >= 3;
// };

// const callback2 = function (value) {
//   return value <= 4;
// };

// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
// console.log(r2);

// //

// const fruits = [
//   { name: "apples", quantity: 200, isFresh: true },
//   { name: "grapes", quantity: 150, isFresh: false },
//   { name: "bananas", quantity: 100, isFresh: true },
// ];

// const getFruitsWithQuantity = function (fruit) {
//   return fruit.quantity >= 120;
// };

// const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3);

const fnA = function (parameter) {
  const innerVariable = "Значение внутренней переменной функции fnA";
  const innerFunction = function () {
    console.log("Это вызов innerFunction");
  };
  return innerFunction;
};

// const fnB = fnA(555);

// fnB();

// console.log(fnB);

const makeDish = function (shefName, dish) {
  console.log(`${shefName} готовит ${dish}`);
};

// makeDish("Mango", "котлеты");
// makeDish("Mango", "омлет");
// makeDish("Mango", "чай");

// makeDish("Poly", "котлеты");
// makeDish("Poly", "супик");
// makeDish("Poly", "кофе");

// const makeSheff = function (name) {
//   const makeDish = function (dish) {
//     console.log(`${name} готовит ${dish}`);
//   };
//   return makeDish;
// };

// const mango = makeSheff("Mango");
// console.dir(mango);

// mango("котлеты");
// mango("пирожок");

// const poly = makeSheff("Poly");
// console.dir(poly);
// poly("чай");
// poly("омлет");
// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint);
// const withDecimals = Number(floatingPoint.toFixed(2));

// const rounder = function (number, places) {
//   return Number(number.toFixed(places));
// };

// console.log(rounder(3.734348848, 2));
// console.log(rounder(3.734348848, 3));
// console.log(rounder(5.3935, 2));
// console.log(rounder(5.3935, 3));

const rounder = function (places) {
  return function (number) {
    return Number(number.toFixed(places));
  };
};

const rounder2 = rounder(2);
const rounder3 = rounder(3);

console.log(rounder2(3.734348848));
console.log(rounder3(3.734348848));
console.log(rounder2(5.3935));
console.log(rounder3(5.3935));

// const number1 = 3.6675;
// const number2 = 4.3387;
// console.log(Number(number1.toFixed(3)));
// console.log(Number(number2.toFixed(4)));
