// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let sum = 0;

// const values = Object.values(salaries);
// for (const value of values) {
//   sum += value;
// }
// console.log(sum);
// console.log(values);

// for (const key in salaries) {
//   if (salaries.hasOwnProperty(key)) {
//     sum += salaries[key];
//   }
// }
// console.log(sum);

//
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
//   test: {
//     num: 32,
//   },
// };

// Object.freeze(Transaction);
// console.log(Transaction);
// Transaction.test.num = 44;
// console.log(Transaction);

// const account = {
//   balance: 0,
//   transactions: [],
//   createTransaction(amount, type) {
//     const obj = {
//       id: Date.now(),
//       amount,
//       type,
//     };
//     this.transactions.push(obj);
//   },
//   deposit(amount) {},

//   getTransactionTotal(type) {},

//   deposit(amount) {
//     this.balance += amount;
//     this.createTransaction(amount, Transaction.DEPOSIT);
//   },
// };

// account.createTrasaction(1000, Transaction.DEPOSIT);
// account.createTrasaction(2000, Transaction.DEPOSIT);
// account.deposit(1500);
// console.log(account);

// const arr = [1, 2, 3, 45, 65];
// const arr1 = [1, 2, [1, 2, 44], 65];
// const arr2 = [1, 2, 3, 45, [1, 2, 44, [55, [22, 44, 12, [26, 27]]]], 65];

// function addItems(arr) {
//   let sum = 0;
//   for (const item of arr) {
//     if (Array.isArray(item)) {
//       sum += addItems(item);
//     } else {
//       sum += item;
//     }
//   }
//   return sum;
// }

// console.log(addItems(arr2));

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgresSQL"];

// function addCourse(name) {
//   if (!courses.includes(name)) {
//     courses.push(name);
//     return;
//   }
//   return "Ви вже маєте такий курс";
// }
// addCourse("Express");
// console.log(courses);

// addCourse("CSS");

// function removeCourse(name) {
//   const idx = courses.indexOf(name);
//   if (idx === -1) {
//     return "Курс із таким імям не знайдено";
//   }
//   courses.splice(idx, 1);
// }

// removeCourse("React");
// console.log(courses);

// removeCourse("Vue");
// console.log(courses);

// function updateCourse(oldName, newName) {
//   const idx = courses.indexOf(oldName);
//   if (idx === -1) {
//     // !!~idx
//     return "Курс із таким імям не знайдено";
//   }
//   courses.splice(idx, 1, newName);
//   // courses[idx] = newName;
// }

// updateCourse("Express", "NestJS");
// console.log(courses);

// Spread -----------Передача аргументів----------

// const temps = [14, -4, 25, 8, 11];

// console.log(...temps);

// console.log(Math.max(...temps));

// Створення нового масиву
// const temps = [14, -4, 25, 8, 11];

// // Це точна, але незалежна копія масиву temps
// const copyOfTemps = [...temps];
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// spread: Створення нового об'єкта-----------
// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const first = {
//   propA: 5,
//   propB: 10,
//   propC: 50,
// };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third);

// const fourth = { ...second, ...first };
// console.log(fourth);

// rest: Збирання всіх аргументів функції

// function multiply(...args) {
//   console.log(args);
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// concat---------------

// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);

// console.log(numbers);

// const numbers = [0, 5, 10, ...[1, 2, 3], 4, 5];

// console.log(numbers);

// const temps = [18, 14, 12, 21, 17, 29, 24];

// console.log(Math.max(1, 4, 17, 5, 6));
// console.log(Math.max(...temps));

// const a = [{ a: 1 }, { b: 2 }, { c: 3 }];

// const b = [...a];

// console.log("a: ", a);
// console.log("b:", b);

// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = Object.assign({}, a, b);
// console.log(c);
// console.log(..."qwe");

// const c = {
//   ...a,
//   x: 10,
//   ...b,
//   y: 20,
// };

// console.log(c);

// const defaultSettings = {
//   theme: "ligth",
//   showNotifications: true,
//   hideSidebar: false,
// };

// const userSettings = {
//   showNotifications: false,
//   hideSidebar: true,
// };

// const finalSettings = {
//   ...defaultSettings,
//   ...userSettings,
// };

// console.log(finalSettings);

const playlist = {
  name: "Мой супер плейлист",
  rating: 5,
  tracks: ["трек-1", "трек-2", "трек-3"],
  trackCount: 3,
  author: "Mango",
};

const { rating, tracks, name, trackCount, author = 555 } = playlist;
console.log(author);
console.log(rating);
console.log(tracks);
console.log(name);
console.log(trackCount);

// console.log(
//   playlist.name,
//   playlist.rating,
//   playlist.tracks,
//   playlist.trackCount
// );
