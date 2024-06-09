// function transformUsername({ firstName, lastName, ...props }) {
//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...props,
//   };
// }

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: "Jacob",
//     lastName: "Marcob",
//     email: "j.marcob@mail.com",
//     friendCount: 40,
//   })
// );

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: "Adrian",
//     lastName: "Cross",
//     email: "a.cross@hotmail.com",
//     friendCount: 20,
//   })
// );

<<<<<<< HEAD
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);

// const temps = [14, -4, 25, 8, 11];

// const copyOfTemps = [...temps];

// console.log(copyOfTemps);

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(bestScore);
// console.log(worstScore);

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };

// console.log(finalSettings);

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line

//   return { completed, category, priority, ...data };
//   // Change code above this line
// }
// console.log(
//   makeTask({
//     category: "Homemade",
//     priority: "Low",
//     text: "Take out the trash",
//   })
// );

// Паттерн обэктного строя----------
//

// const showProfileInfo = function ({ name, tag, location, ...restProps }) {
//   // console.log(name, tag, location, avatar, followers, views, likes);
//   console.log(restProps);
// };

// const profile = {
//   name: "Jacobs Gluke",
//   tag: "Jgluke",
//   location: "Ocj Rios , Jamaica",
//   avatar: "https://s3.amazonaws.com/uifaces/",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// showProfileInfo(profile);

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     this.items.push(product);
//   },
//   remove(productName) {
//     for (let i = 0; i < this.items.length; i += 1) {
//       const item = this.items[i];

//       if (productName === item.name) {
//         console.log("нашли такой продукт", productName);
//       }
//     }
//   },
//   clear() {},
//   countTotalProce() {},
//   increaseQuantity(productName) {},
//   decreaseQuantity(productName) {},
// };

// console.log(cart.getItems());

// cart.add({ name: "🍎", price: 50 });
// cart.add({ name: "🍋", price: 60 });
// cart.add({ name: "🫐", price: 60 });
// cart.add({ name: "🍑", price: 110 });

// console.table(cart.getItems());

// cart.remove("🍎");

// // Change code below this line
// function add(...args) {
//   let sum = 0;
//   for (const item of args) {
//     sum += item;
//   }
//   return sum;
//   // Change code above this line
// }

// console.log(add(15, 17));

// Change code below this line
// function addOverNum(number, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > number) {
//       total += arg;
//     }
//   }

//   return total;
//   // Change code above this line
// }

// // Change code below this line
// function findMatches(array, ...args) {
//   const matches = []; // Don't change this line

//   for (const item of array) {
//     if (args.includes(item)) {
//       matches.push(item);
//     }
//   }
//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },

//   // Change code above this line
// };

// console.log(bookShelf.removeBook("Red sunset"));

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const idx = this.books.indexOf(oldName);
//     this.books.splice(idx, 1, newName);
//     return this.books;
//     // Change code above this line
//   },
// };
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));

// const atTheOldToad = {
//   // Change code below this line

//   potions: [],

//   // Change code above this line
// };

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line

//   getPotions() {
//     return this.potions;
//   },
//   // Change code above this line
// };
// console.log(atTheOldToad.getPotions());

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line

//     this.potions.push(potionName);
//     return this.potions;
//     // Change code above this line
//   },
// };
// console.log(atTheOldToad.addPotion("Invisibility"));

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     const idx = this.potions.indexOf(potionName);
//     this.potions.splice(idx, 1);
//     return this.potions;
//     // Change code above this line
//   },
// };

// console.log(atTheOldToad.removePotion("Dragon breath"));

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     const idx = this.potions.indexOf(oldName);
//     this.potions.splice(idx, 1, newName);

//     return this.potions;

//     // Change code above this line
//   },
// };

// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     let potionIndex = -1;

//     for (const potion of this.potions) {
//       if (potion.name === potionIndex) {
//         potionIndex = this.potions.indexOf(potion);
//       }
//     }

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       let potionIndex = 0;
//       if (potion.name === oldName) {
//         potionIndex = this.potions.indexOf(potion);
//         potion.name = newName;
//       }
//     }

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }
//   },
//   // Change code above this line
// };

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }
//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };

//     this.items.push(newProduct);
//   },
//   remove(productName) {
//     const { items } = this;

//     for (let i = 0; i < items.length; i += 1) {
//       const { name } = items[i];

//       if (productName === name) {
//         console.log("нашли такой продукт", productName);
//         console.log("индекс:", i);

//         items.splice(i, 1);
//       }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     const { items } = this;
//     let total = 0;

//     for (const { price, quantity } of items) {
//       total += price * quantity;
//     }
//     return total;
//   },
//   increaseQuantity(productName) {},
//   decreaseQuantity(productName) {},
//   getProductTotalPrice(product) {},
// };

// console.log(cart.getItems());

// cart.add({ name: "🍎", price: 50 });
// cart.add({ name: "🍋", price: 60 });
// cart.add({ name: "🍋", price: 60 });
// cart.add({ name: "🫐", price: 60 });
// cart.add({ name: "🍑", price: 110 });
// cart.add({ name: "🍒", price: 110 });
// cart.add({ name: "🍒", price: 110 });

// console.table(cart.getItems());

// console.log("Total: ", cart.countTotalPrice());

// cart.remove("🍋");
// console.table(cart.getItems());

// // cart.clear();
// // console.log(cart.getItems());

// const getProductTotalPrice = function ({ price, quantity }) {
//   return price * quantity;
// };

// console.log(getProductTotalPrice(cart.items[1]));

// const arr = [1, 2, 3];

// const [, , three] = arr;

// // console.log(two);
// console.log(three);

// const name = "value";
// const { age, name: newName } = user;

// console.log(age, name);
// console.log(newName);
// // const age = user.age;
// const user = {
//   name: "Test",
//   age: 11,
//   skills: {
//     html: true,
//     css: true,
//     js: false,
//     cars: {
//       audi: {
//         a: 6,
//       },
//       bmw: "x5",
//     },
//   },
//   languages: [{ html: true }, { css: false }],
// };

// for (const language of user.languages) {
//   console.log(language);
// }

// const users = [
//   {
//     name: "User1",
//     language: "html",
//     car: {
//       bmw: "x6",
//     },
//   },
//   {
//     name: "User2",
//     language: "css",
//     car: {
//       audi: "a8",
//       bmw: "x5",
//     },
//   },
//   {
//     name: "User3",
//     language: "js",
//     car: {
//       audi: "a7",
//     },
//   },
// ];

// // for (const {
// //   name,
// //   cars: { audi: car },
// // } of users) {
// //   console.log(name, car);
// // }
// for (const {
//   name,
//   car: { audi: car },
// } of users) {
//   console.log(car);
// }

// function foo({ name, car: { bmw = "None" } = {} } = {}) {
//   console.log(name, bmw);
// }

// foo({
//   name: "User1",
//   language: "html",
//   car: {
//     audi: "x4",
//     bmw: "x5",
//   },
// });

// foo({
//   name: "User2",
//   language: "html",
// });

// foo();

// const arr1 = [12, 22, 3, 14, 45, 16, 57];
// // // const min = Math.min(...arr);
// // // console.log(min);

// // const arr2 = [...arr1];
// // // arr2.splice(0, 1);
// // console.log(arr1 === arr2);

// const [first, ...props] = arr1;
// console.log(props);
// console.log(first);
// for (let i = 0; i < props.length; i += 1) {
//   props[i] *= first;
// }
// console.log(props);

// function foo(first, second, ...args) {
//   console.log(args);
// }

// foo(1, 2, 3, 4, 5);

// const arr1 = [12, 22, 3, 14, 45, 16, 57];

// function foo(first, second, ...rest) {
//   console.log(arguments);
//   console.log(first, second, rest);
// }
// foo(...arr1);

// /**
//  * Розраховуємо індекс маси тіла людини
//  * @param {Object} obj
//  * @returns {Number} BMI
//  */
// function calcBMI({ weigth, heigth }) {
//   const numericWeigth = Number(weigth.replace(",", "."));
//   const numericHeigth = Number(heigth.replace(",", "."));
//   return Number((numericWeigth / numericHeigth ** 2).toFixed(1));
// }

// // console.log(calcBMI("88.3", "1.75"));
// console.log(calcBMI({ weigth: "88.3", heigth: "1.75" }));
// console.log(calcBMI({ weigth: "68.3", heigth: "1.65" }));
// console.log(calcBMI({ weigth: "188.3", heigth: "1.95" }));

// /**
//  *
//  * @param {Object} obj
//  */
// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }
// printContactsInfo({
//   names: "Jacobe, William, Solomon, Artemis",
//   phones: "234525525,225555525,57547574577,4689356222290",
// });

// function getBotReporter({ companyName, repairBoats, defenceBots }) {
//   return `${companyName} has ${repairBoats + defenceBots} bots in stock`;
// }

// console.log(
//   getBotReporter({
//     companyName: "Cyberdyne System",
//     repairBoats: 150,
//     defenceBots: 50,
//   })
// );

// function getStockReport({ companyName, stock }) {
//   // let total = repairBots + defenceBots;
//   let total = 0;
//   for (const value of Object.values(stock)) {
//     total += value;
//   }
//   return `${companyName} has ${total} items in stock`;
// }

// console.log(
//   getStockReport({
//     companyName: "Cyberdyne System",
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   })
// );

// console.log(
//   getStockReport({
//     companyName: "Belacci",
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   })
// );

function createContact(partialContact) {
  return {
    ...partialContact,
  };
}

console.log(
  createContact({
    name: "Mango",
    email: "mango@mail.com",
    list: "friend",
  })
);

console.log(
  createContact({
    name: "Poly",
    email: "poly@hotmail.com",
  })
);
=======
const products = [
  {
    name: "apple",
    qty: 4,
    key: "Test",
  },
];

function getAllPropValues(propName) {
  let valuesPropName = [];

  for (const product of products) {
    for (const key in product) {
      // console.log(key);
      if (key === propName) {
        console.log(product[key]);
        console.log(product.key);
        // valuesPropName.push(product[key]);
        // valuesPropName.push(product.key);
      }
    }
  }
  return valuesPropName;
}

getAllPropValues("name");
>>>>>>> d2a4a634b9e50f2b38b660c77aa03da982db9201
