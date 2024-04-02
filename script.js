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

// console.log(fullName);

const room = 716;
const type = "VIP";

// const wellcomeMsg =
//   "Гость " +
//   firstName +
//   " " +
//   lastName +
//   " поселяется в " +
//   type +
//   " номер " +
//   room;

const welcomeMsg = ` Гость ${firstName}  ${lastName}  поселяется в ${type} номер ${room}`;

// console.log(welcomeMsg);
// console.log(wellcomeMsg);

/*----Tamplate strings----*/

const quantity = 5;

const orderMsg = `Вы заказываете ${quantity} холодильников`;

// console.log(orderMsg);

/*-----Нормализация с методом toLowerCase()-----------*/

// const brand = "Samsung";
// const normalisedBrand = brand.toLowerCase();
// let brand = prompt("Давай бренд");
// brand = brand.toLocaleLowerCase();
// console.log(brand);

let brand = "samSUnG";
// console.log(brand[4]);
// console.log(brand.slice(1).toLowerCase());

// brand = brand[0] + brand.slice(1).toLowerCase();
// console.log(brand);
/*------Поиск в строку с методом includes()*/

// const blacklistedWord1 = "спам";
// const blacklistedWord2 = "распродажа";

// const string1 = "Привет, я принц Абдул, это не спам, предлагаю тебе миллион!";
// const string2 = "Самая большая РАСПРОДАЖА этой недели, не пропустите!";
// const string3 = "Рекламная кампания #fatlivesmatter";

// console.log(string1.includes(blacklistedWord1));
// console.log(string1.includes(blacklistedWord2));

// console.log(string2.includes(blacklistedWord1));

// const normalizedString2 = string2.toLowerCase();

// console.log(normalizedString2.includes(blacklistedWord2));

// console.log(string3.includes(blacklistedWord1));
// console.log(string3.includes(blacklistedWord2));

// Операторы сравнения ----------------//

const isEqual = false == 0;
// console.log(isEqual);

/* Switch-----*/

// const stars = 8;
// let price;

// if (stars === 1) {
//   price = 20;
// } else if (stars === 2) {
//   price = 30;
// } else if (stars === 3) {
//   price = 50;
// } else if (stars === 4) {
//   price = 70;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log("Такого количества звезд нет");
// }

// const stars = 1;
// let price;

// switch (stars) {
//   case 1:
//     price = 20;
//     break;

//   case 2:
//     price = 30;
//     break;
//   case 3:
//     price = 50;
//     break;
//   case 4:
//     price = 70;
//     break;
//   case 5:
//     price = 120;
//     break;
//   default:
//     console.log("Такого количества звезд нет");
// }
// console.log(price);

// const stars = 1;
// let price;

// if (stars === 1 || stars === 2) {
//   price = 20;
// } else if (stars === 2 || stars === 4) {
//   price = 30;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log("Такого количества звезд нет");
// }

// console.log(price);

// switch (stars) {
//   case 1:
//   case 2:
//     price = 20;
//     break;

//   case 3:
//   case 4:
//     price = 30;
//     break;

//   case 5:
//     price = 120;
//     break;
//   default:
//     console.log("Такого количества звезд нет");
// }
// console.log(price);

// 1.Сделать переменную

// сделать switch 123

// 3.в каждом кейсе запись
