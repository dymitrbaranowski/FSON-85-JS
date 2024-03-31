// 02-Input

// let quantity = prompt("Введите количество товаров");
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

// Colors Math.round----

// const colors = ["tomato", "teal", "orange", "deeppink", "skyblue", ''];
// const max = colors.length - 1;
// const min = 0;

// const index = Math.round(Math.random() * (max + min) + min);

// const color = colors[index];

// console.log(color);
// document.body.style.backgroundColor = color;

// Длина строки, свойство length

const message = "В этой строке 26 символов.";
// console.log(message.length);

/*
 *Конкатенация строк
 */
const firstName = "Chelsy";
const lastName = "Emerald";
const fullName = firstName + lastName;

console.log(fullName);

const room = 716;
const type = "VIP";

const wellcomeMsg =
  "Гость " +
  firstName +
  " " +
  lastName +
  " поселяется в " +
  type +
  " номер " +
  room;
console.log(wellcomeMsg);
