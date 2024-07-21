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

const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function (number) {
//   console.log("number", number);
// });

// console.log(numbers);

// const doubledNums = numbers.map((number) => {
//   console.log(number);
// });
// console.log("numbers", numbers);
// console.log("doubledNums", doubledNums);

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 410, points: 54, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 54, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 54, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 54, online: true },
];

const playerNames = players.map((player) => player.name);
console.log("playerNames", playerNames);

const playerIds = players.map((player) => player.id);
console.log("playerIds", playerIds);

// const res = players.map(({ name, online }) => ({ name, online }));

// console.log("res", res);
const updatedPlayers = players.map((player) => {
  console.log(player);
});
