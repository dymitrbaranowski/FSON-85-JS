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

const cart = [54, 28, 105, 70, 92, 17, 120];

let total = 0;

// 1 перебрать масив

for (let i = 0; i < cart.length; i += 1) {
  console.log(cart[i]);

  total += cart[i];
}

console.log("Total:", total);
// 2 сделать переменную total до цикла

// 2 каждый елемент приплюсовать к total
