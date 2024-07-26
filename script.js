// const objA = {
//   x: 5,
//   showX() {
//     console.log("this in objA.showX: ", this);
//     console.log(this.x);

//     const objB = {
//       y: 10,
//       showThis: () => {
//         console.log("this in objB.showThis: ", this);
//       },
//     };

//     objB.showThis();
//   },
// };

// objA.showX();

// const numbers = [1, 5, 2, 4, 3];

// const greaterThenTwo = numbers.filter(function (num) {
//   return num > 2;
// });

// const greaterThenTwo = numbers.filter((num) => num > 2);

// console.log(greaterThenTwo);

// const multyByTwo = greaterThenTwo.map((num) => num * 3);

// console.log(multyByTwo);

// const sorted = multyByTwo.sort((a, b) => a - b);

// console.log(sorted);

// const updatedPlayers = players.map((player) =>
//   player.id === playerIdToUpdate
//     ? { ...player, timePlayed: player.timePlayed + 50 }
//     : player
// );

// console.table(updatedPlayers);

// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function (number) {
//   console.log("number", number);
// });

// console.log(numbers);

// const doubledNums = numbers.map((number) => {
//   console.log(number);
// });
// console.log("numbers", numbers);
// console.log("doubledNums", doubledNums);

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 410, points: 54, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 54, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 54, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 80, points: 54, online: true },
// ];

// const playerNames = players.map((player) => player.name);
// console.log("playerNames", playerNames);

// const playerIds = players.map((player) => player.id);
// console.log("playerIds", playerIds);

// // const res = players.map(({ name, online }) => ({ name, online }));

// // console.log("res", res);
// const updatedPlayers = players.map((player) => {
//   console.log(player);
// });

// const filteredNumbers = numbers.filter((number) => number < 10 || number > 20);

// console.log(filteredNumbers);
// console.log("numbers", numbers);

// const onlinePlayer = players.filter((player) => player.online);
// console.table(onlinePlayer);

// const offlinePlayer = players.filter((player) => !player.online);
// console.table(offlinePlayer);

// const hardcorePlayers = players.filter((player) => player.timePlayed > 2500);

// console.log(hardcorePlayers);

// const playerIdToFind = "player-3";

// const playerWithId = players.find(({ id }) => id === playerIdToFind);
// console.log(playerWithId);

// const playerNameToFind = "Poly";
// const playerWithName = players.find(({ name }) => name === playerNameToFind);

// console.log(playerWithName);

// const number = numbers.find((number) => number === 10);

// console.log(number);

// const isAllOnline = players.every((player) => player.timePlayed > 250);
// // console.log("isAllOnline: ", isAllOnline);

// const isAnyOnline = players.some(({ online }) => online);
// console.log("isAnyOnline: ", isAnyOnline);

// const anyHardcorePlayers = players.some((player) => player.timePlayed > 400);
// console.log("anyHardcorePlayers: ", anyHardcorePlayers);

// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => {
//   console.log("number", number);
//   console.log("acc", acc);

//   return acc + number;
// }, 0);
// console.log(total);

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

const totalSalary = Object.values(salary).reduce(
  (total, value) => total + value,
  0
);

// console.log(totalSalary);

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 54, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 54, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 54, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 54, online: true },
];

const totalTimePlayed = players.reduce(
  (totalTime, { timePlayed }) => totalTime + timePlayed,
  0
);
// console.log(totalTimePlayed);

const cart = [
  { lable: "Apples", price: 100, quantity: 2 },
  { lable: "Bananas", price: 120, quantity: 3 },
  { lable: "Lemons", price: 70, quantity: 4 },
];
const totalAmount = cart.reduce(
  (total, { price, quantity }) => total + price * quantity,
  0
);
// console.log(totalAmount);

// const getInactiveUsers = (array) => array.filter(({ isActive }) => !isActive);

<<<<<<< Updated upstream
const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
console.log(allTags);
=======
// console.log("res", res);
const updatedPlayers = players.map((player) => {
  console.log(player);
});

>>>>>>> Stashed changes
