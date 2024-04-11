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

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];

let total = 0;

// 1 переменнная total
// 2 перебрать масив
for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
  // 3 на каждой итерации проверить елемент на четность

  if (numbers[i] % 2 === 0) {
    console.log("Четное!!!");
    // 4 если четный, плюсуем к тотал
    total += numbers[i];
  }
}

console.log("Total:", total);
