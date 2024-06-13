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
