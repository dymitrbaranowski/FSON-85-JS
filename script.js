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

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

let total = 0;

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

const logins = ["fwefweufehi", "weuW83473748", "poly1scute", "wDkdowdw2034"];
const loginToFind = "poly1scute";

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

const a = 5 > 10 ? "ага" : "нет";

const message = logins.includes(loginToFind) ? "ага" : "нет";
console.log(message);
