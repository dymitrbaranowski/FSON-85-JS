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

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const totalSalary = Object.values(salary).reduce(
//   (total, value) => total + value,
//   0
// );

// console.log(totalSalary);

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 54, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 54, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 54, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 80, points: 54, online: true },
// ];

// const totalTimePlayed = players.reduce(
//   (totalTime, { timePlayed }) => totalTime + timePlayed,
//   0
// );
// console.log(totalTimePlayed);

// const cart = [
//   { lable: "Apples", price: 100, quantity: 2 },
//   { lable: "Bananas", price: 120, quantity: 3 },
//   { lable: "Lemons", price: 70, quantity: 4 },
// ];
// const totalAmount = cart.reduce(
//   (total, { price, quantity }) => total + price * quantity,
//   0
// );
// console.log(totalAmount);

// const getInactiveUsers = (array) => array.filter(({ isActive }) => !isActive);

// const byName = [...players].sort((a, b) => {
//   console.log(a.name.charCodeAt(0));
//   const result = a.name[0] > b.name[0];

//   if (result) {
//     return 1;
//   }

//   if (!result) {
//     return -1;
//   }
// });
// console.table(byName);

// console.log("abc".charCodeAt(2));

// const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
// console.log(array);

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];
// console.log(array.flat(3));
// // const tags = tweets.map((t) => t.tags).flat();
// const tags = tweets.flatMap((t) => t.tags);
// console.log(tags);

// const tags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
// console.log(tags);
// const stats = tags.reduce((acc, tag) => {
//   return {
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   };
// }, {});

// const tags = tweets.map((t) => t.tags).flat();

// const tags = tweets.flatMap((t) => t.tags);
// console.log(tags);

// const numbers = [1, 5, 2, 4, 3];

// const greaterThenTwo = numbers.filter(function (num) {
//   return num > 2;
// });
// console.log(greaterThenTwo);

// const multByThree = greaterThenTwo.map(function (num) {
//   return num * 3;
// });
// console.log(multByThree);

// const sorted = multByThree.sort((a, b) => a - b);
// console.log(sorted);

// const sorted = numbers
//   .filter((num) => num > 2)
//   .map((num) => num * 3)
//   .sort((a, b) => a - b);
// console.log(sorted);

// const players = [
//   {
//     id: "player-1",
//     name: "Mango",
//     timePlayed: 310,
//     points: 54,
//     online: false,
//     rank: 800,
//   },
//   {
//     id: "player-2",
//     name: "Poly",
//     timePlayed: 410,
//     points: 54,
//     online: true,
//     rank: 500,
//   },
//   {
//     id: "player-3",
//     name: "Kiwi",
//     timePlayed: 230,
//     points: 54,
//     online: true,
//     rank: 100,
//   },
//   {
//     id: "player-4",
//     name: "Ajax",
//     timePlayed: 150,
//     points: 54,
//     online: false,
//     rank: 80,
//   },
//   {
//     id: "player-5",
//     name: "Chelsy",
//     timePlayed: 80,
//     points: 54,
//     online: true,
//     rank: 400,
//   },
// ];

// const onlineAndSorted = players
//   .filter((player) => player.online)
//   .sort((a, b) => a.rank - b.rank);
// console.table(onlineAndSorted);

// const element = {
//   class: "",
//   hovered: false,
//   changeClass(cls) {
//     this.class = cls;

//     return this;
//   },
//   toggleHovered() {
//     this.hovered = !this.hovered;

//     return this;
//   },
// };

// element.toggleHovered().changeClass("open");
// console.log(element);

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];
// console.log(array.flat(3));
// const tags = tweets.map((t) => t.tags).flat();
// const tags = tweets.flatMap((t) => t.tags);
// console.log(tags);

// const stats = tags.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
// console.log(tags);
// const stats = tags.reduce((acc, tag) => {
//   return {
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   };
// }, {});

// const tags = tweets.map((t) => t.tags).flat();

// const tags = tweets
//   .flatMap((t) => t.tags)
//   .reduce(
//     (acc, tag) => ({
//       ...acc,
//       [tag]: acc[tag] ? acc[tag] + 1 : 1,
//     }),
//     {}
//   );
// console.log(tags);

// console.log(_.isEmpty({}));
// console.log(_.isEmpty({ a: 1 }));

// const user = {
//   name: "mango",
// };

// console.log(_.get(user, "location.city"));
// console.log(user.location.city);

// if (user && user.location && user.location.city) {
//   console.log(user.location.city);
// }

// console.log(user?.location?.city);

// Union()-----------

// console.log(_.union([1, 2, 3], [3, 4, 5]));
//range()-----------------

// console.log(_.range(10, 51));

//sortBy()--------

// const users = [
//   { user: "fred", age: 48 },
//   { user: "barney", age: 36 },
//   { user: "fred", age: 40 },
//   { user: "barney", age: 34 },
// ];
// console.log(_.sortBy(users, ["user", "age"]));

// sumBu()------------

// console.log(_.sum([1, 2, 3, 4, 5]));

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 410, points: 54, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 54, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 54, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 80, points: 54, online: true },
// ];

// console.log(_.sumBy(players, (player) => player.timePlayed));

// console.log(Math.min(...[1, 2, 3, 4, 5]));

// console.log(_.minBy(players, (player) => player.timePlayed).name);

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];
// const getUserWithEyeColor = (users, color) =>
//   users.filter((user) => user.eyeColor === color);

// console.log(getUserWithEyeColor(users, "gre"));

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39,
  },
];

// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter((user) => minAge <= user.age && user.age <= maxAge);
// };

// console.table(getUsersWithAge(users, 20, 30));

// const getUsersWithFriend = (users, friendName) => {
//   return users.filter((user) => user.friends.includes(friendName));
// };

// console.log(getUsersWithFriend(users, "Goldie Gentry"));

// const getFriends = (users) => {
//   const allFriend = users.flatMap((user) => user.friends);
//   const uniqueFriend = allFriend.filter(
//     (friend, index, array) => array.indexOf(friend) === index
//   );
//   return uniqueFriend;
// };

// const getFriends = (users) => {
//   const allFriend = users.flatMap((user) => user.friends);
//   const uniqueFriend = allFriend.filter(
//     (friend, index, array) => array.indexOf(friend) === index
//   );
//   return uniqueFriend;
// };

// console.log(getFriends(users));

// const getActiveUsers = (users) => {
//   return users.filter((user) => user.isActive);
// };

// console.log(getActiveUsers(users));

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];

// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";

// const bookWithTitle = books.find((tit) => tit.title === BOOK_TITLE);
// const bookByAuthor = books.find((tit) => tit.author === AUTHOR);

// console.log(bookByAuthor);
// console.log(bookWithTitle);

// const getUserWithEmail = (users, email) => {
//   return users.find((user) => user.email === email);
// };
// console.log(getUserWithEmail(users, "elmahead@omatom.com"));

// console.log([1, 2, 3, 4, 5].every((value) => value >= 0));

// Every()-----------------

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
// console.log(eachElementInFirstIsEven);

// const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 !== 0);
// console.log(eachElementInFirstIsOdd);

// const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
// console.log(eachElementInSecondIsEven);

// const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 !== 0);
// console.log(eachElementInSecondIsOdd);

// const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
// console.log(eachElementInThirdIsEven);

// const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 !== 0);
// console.log(eachElementInThirdIsOdd);

// const isEveryUserActive = (users) => {
//   return users.every((value) => value.isActive);
// };

// console.log(isEveryUserActive(users));

// Some()---------------------
// console.log([1, 2, 3, 4, 5].some((value) => value >= 0));

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// const anyElementInFirstIsEven = firstArray.some((value) => value % 2 === 0);
// console.log(anyElementInFirstIsEven);

// const anyElementInFirstIsOdd = firstArray.some((value) => value % 2 !== 0);
// console.log(anyElementInFirstIsOdd);

// const anyElementInSecondIsEven = secondArray.some((value) => value % 2 === 0);
// console.log(anyElementInSecondIsEven);

// const anyElementInSecondIsOdd = secondArray.some((value) => value % 2 !== 0);
// console.log(anyElementInSecondIsOdd);

// const anyElementInThirdIsEven = thirdArray.some((value) => value % 2 === 0);
// console.log(anyElementInThirdIsEven);

// const anyElementInThirdIsOdd = thirdArray.some((value) => value % 2 !== 0);
// console.log(anyElementInThirdIsOdd);

// const isAnyUserActive = (users) => {
//   return users.some((active) => active.isActive);
// };
// console.log(isAnyUserActive(users));

// const total = [2, 7, 3, 14, 6].reduce((previosValue, number) => {
//   return previosValue + number;
// }, 0);

// console.log(total);

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playTimes = Object.values(players);

// const totalPlayTime = playTimes.reduce((previosValue, number) => {
//   return previosValue + number;
// });

// const averagePlayTime = totalPlayTime / playTimes.length;

// console.log(averagePlayTime);

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;
// console.log(averageScore);

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((spendTime, player) => {
//   return spendTime + player.playtime / player.gamesPlayed;
// }, 0);

// console.log(totalAveragePlaytimePerGame);

// const calculateTotalBalance = (users) => {
//   return users.reduce((totalBalance, bal) => totalBalance + bal.balance, 0);
// };
// console.log(calculateTotalBalance(users));

// const getTotalFriendCount = (users) => {
//   return users.reduce((totalFriends, user) => {
//     return totalFriends + user.friends.length;
//   }, 0);
// };

// console.log(getTotalFriendCount(users));

//Sort()--------------

// const scores = [61, 19, 74, 92, 56];
// scores.sort();
// console.log(scores);

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort();
// console.log(scores);
// console.log(ascendingScores);

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];

// const ascendingReleaseDates = [...releaseDates].sort();
// console.log(ascendingReleaseDates);

// const alphabeticalAuthors = [...authors].sort();
// console.log(alphabeticalAuthors);

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
// console.log(ascendingReleaseDates);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
// console.log(descendingReleaseDates);

// const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder);

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
// console.log(authorsInAlphabetOrder);

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
// console.log(authorsInReversedOrder);

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
// ];

// const inAscendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// const inDescendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
// ];

// const inAscendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );
// console.log(inAscendingScoreOrder);

// const inDescendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );
// // console.log(inDescendingScoreOrder);
// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );
// console.log(inAlphabeticalOrder);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const sortedByAuthorName = [...books].sort(
//   (firstAuthorName, secondAuthorName) =>
//     firstAuthorName.author.localeCompare(secondAuthorName.author)
// );
// console.table(sortedByAuthorName);

// const sortedByReversAuthorName = [...books].sort(
//   (firstAuthorName, secondAuthorName) =>
//     secondAuthorName.author.localeCompare(firstAuthorName.author)
// );
// console.table(sortedByReversAuthorName);

// const sortedByAscendingRating = [...books].sort(
//   (firstAuthorName, secondAuthorName) =>
//     firstAuthorName.rating - secondAuthorName.rating
// );
// console.table(sortedByAscendingRating);

// const sortedByDescentingRating = [...books].sort(
//   (firstAuthorName, secondAuthorName) =>
//     secondAuthorName.rating - firstAuthorName.rating
// );
// console.table(sortedByDescentingRating);

// const sortByAscendingBalance = (users) => {
//   return users.sort((a, b) => a.balance - b.balance);
// };
// console.table(sortByAscendingBalance(users));

// const sortByAscendingBalance = (users) => {
//   return [...users].sort((a, b) => b.friends.length - a.friends.length);
// };
// console.table(sortByAscendingBalance(users));

// const sortByName = (users) => {
//   return [...users].sort((a, b) => a.name.localeCompare(b.name));
// };

// console.log(sortByName(users));

// const students = [
//   { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
//   { name: "Poly", score: 59, courses: ["science", "mathematics"] },
//   { name: "Ajax", score: 37, courses: ["physics", "biology"] },
//   { name: "Kiwi", score: 94, courses: ["literature", "science"] },
// ];

// const sortedByAxcendingScore = [...students].sort((a, b) => a.score - b.score);
// console.log(sortedByAxcendingScore);

// const names = sortedByAxcendingScore.map((student) => student.name);
// console.log(names);

// const names = [...students]
//   .sort((a, b) => a.score - b.score)
//   .map((student) => student.name);

// console.log(names);

// const uniqueSortedCourses = students
//   .flatMap((student) => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .sort((a, b) => a.localeCompare(b));
// console.log(uniqueSortedCourses);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];

// const MIN_BOOK_RATING = 8;

// const names = [...books]
//   .filter((book) => book.rating > MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .sort((a, b) => a.localeCompare(b));
// console.log(names);

// const getNamesSortedByFriendCount = (users) =>
//   [...users]
//     .sort((a, b) => a.friends.length - b.friends.length)

//     .map((user) => user.name);
// console.log(getNamesSortedByFriendCount(users));

// const getSortedFriends = (users) =>
//   [...users]
//     .flatMap((user) => user.friends)
//     .filter((friends, index, array) => array.indexOf(friends) === index)
//     .sort((a, b) => a.localeCompare(b));
// console.log(getSortedFriends(users));

// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: [
//       "Jacklyn Lucas",
//       "Linda Chapman",
//       "Adrian Cross",
//       "Solomon Fokes",
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// const getTotalBalanceByGender = (users, gender) =>
//   users
//     .filter((user) => user.gender === gender)
//     .reduce((totalBalance, { balance }) => totalBalance + balance, 0);

// console.log(getTotalBalanceByGender(users));

// const showTag = function () {
//   console.log("sgowTag -> this", this);
//   console.log("sgowTag -> this.tag", this.tag);
// };
// showTag();

// const user = {
//   tag: "Mango",
//   showTag() {
//     console.log("showTag -> this", this);
//     console.log("showTag -> this.tag", this.tag);
//   },
// };

// const invokeAction = function (action) {
//   console.log(action);

//   action();
// };

// invokeAction(user.showTag);

// const fn = function () {
//   console.log("fn -> this", this);
// };

// fn();

// const book = {
//   title: "React for beginners",
//   showThis() {
//     console.log("showThis -> this", this);
//   },
//   showTitle() {
//     console.log("showTitle -> this.title", this.title);
//   },
// };

// book.showThis();

// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log("changeColor -> this", this);
//     this.color = color;
//   };

//   const sweater = {
//     color: "teal",
//   };

//   sweater.updater = changeColor;

//   // sweater.updateColor("red");

//   return sweater.updateColor;
// };

// const swapColor = makeChangeColor();

// swapColor("blue");

// const book = {
//   title: "React for beginers",
//   showThis() {
//     console.log("showThis -> this", this);
//   },
//   showTitle() {
//     console.log("ShowTitle -> this.title", this.title);
//   },
// };

// // book.showThis();

// // const outerShowThis = book.showThis;
// // outerShowThis();
// const outerShowTitle = book.showTitle;
// outerShowTitle();

// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log("changeColor -> this", this);
//   };
//   return changeColor;
// };

// const updateColor = makeChangeColor();
// // updateColor("yellow");

// const hat = {
//   color: "blue",
//   updateColor,
// };

// // console.log(hat.updateColor);
// hat.updateColor("orange");

//

// const showThis = function (...args) {
//   console.log(args);
//   console.log("showThis -> this", this);
// };

// showThis();

// const objA = {
//   a: 5,
//   b: 10,
// };

// showThis.call(objA, 10, 20, 30, 40, 50);
// showThis.apply(objA, [1, 3, 6, 3]);

// const changeColor = function (color) {
//   console.log("changeColor -> this", this);
//   this.color = color;
// };

// const hat = {
//   color: "black",
// };

// // changeColor.call(hat, "orange");
// // console.log(hat);

// const sweater = {
//   color: "green",
// };

// // changeColor.call(sweater, "blue");
// // console.log(sweater);

// const changeHatColor = changeColor.bind(hat);
// const changeSweaterColor = changeColor.bind(sweater);
// changeHatColor("yellow");
// console.log(hat);
// changeSweaterColor("red");
// console.log(sweater);

// const counter = {
//   value: 0,
//   increment() {
//     console.log("increment -> this", this);
//     this.value += 1;
//   },
//   decrement() {
//     console.log("decrement -> this", this);
//     this.value -= 1;
//   },
// };

// const decrementBtn = document.querySelector(".js-decrement");
// const incrementBtn = document.querySelector(".js-increment");
// const valueEl = document.querySelector(".js-value");

// decrementBtn.addEventListener("click", function () {
//   console.log("Кликнули на декремент");

//   counter.decrement();
//   console.log(counter);

//   valueEl.textContent = counter.value;
// });
// incrementBtn.addEventListener("click", function () {
//   console.log("Кликнули на инкремент");

//   counter.increment();
//   console.log(counter);

//   valueEl.textContent = counter.value;
// });

// ("use strict");

// //  console.log(this);

// function foo() {
//   console.log(this);
// }
// foo();

// const arrow = () => {
//   console.log(this);
// };

// arrow();
// const user = {
//   name: "Test User",
//   getName() {
//     console.log(this.name);
//   },
// };

// const admin = {
//   name: "Test Admin",
//   getName: user.getName,
// };
// user.getName();
// admin.getName();

// console.log(this);

// function getName() {
//   console.log(this);
// }

// getName();

// const user = {
//   name: "user",
//   city: "Lviv",
//   getName,
// };
// user.getName();

// const admin = {
//   name: "Admin",
//   city: "Odessa",
//   getName,
// };
// admin.getName();

// const user = {
//   name: "user",
//   city: "Lviv",
//   thisUser: this,
//   skills: {
//     js: true,
//     html: true,
//     thisSkils: this,
//     getSkills() {
//       console.log(this);
//     },
//   },
// };
// user.skills.getSkills();

// getThis - function declaration
// const user = {
//   name: "user",
//   city: "Lviv",
//   getThis() {
//     console.log(this);
//   },
// };

// user.getThis();

// // geyThis - Arrow function
// const admin = {
//   name: "Admin",
//   city: "Odessa",
//   getThis: () => {
//     console.log(this);
//   },
// };

// Правила визначення this
// Визначити з яким типом функції працюемо
// 2 Маємо умовне поділення на два табори
// 2.1 Перший це Function & Function Expretion
// 2.2 Другий це Arrow Function
// 3 Function Declaration & Function Expration визначають this тим, хто їх викликав, перший ліворуч
// admin.getThis();
// 4  Arrow Function в рамках чого вона була створена

// const user = {
//   name: "user",
//   city: "Lviv",
//   getThis() {
//     const deepThis = () => {
//       console.log(this);
//     };
//     deepThis();
//   },
// };

// user.getThis();

//------------------------------------

// Arrow function бере тыльки батькывський this з місця, де вона була оголошена>

// console.log(this);
// const deepThis = () => {
//   console.log(this);
// };

// const admin = {
//   name: "Admin",
//   city: "Odessa",
//   getThis() {
//     console.log(this);
//     deepThis();
//   },
// };
// admin.getThis();

// const user = {
//   name: "User",
//   skills: ["html", "css"],
//   addSkill(skill) {
//     console.log("Skill has been added", skill);
//     this.skills.push(skill);
//   },
//   removeSkill(skill) {
//     if (this.skills.includes(skill)) {
//       const idx = this.skills.indexOf(skill);
//       this.skills.splice(idx, 1);
//       console.log("Skill has been removed", skill);
//     } else {
//       console.log("Not found");
//     }
//   },
// };

// user.addSkill("js");
// console.log(user.skills);

// user.removeSkill("js");
// console.log(user.skills);
// function process(skill, callback) {
//   console.log("Зачекайте декілька хвилин");
//   callback(skill);
// }

// console.log(user.addSkill);
// console.log(user.addSkill.bind(user));
// process("js", user.addSkill.bind(user));
// console.log(user.skills);
// process("js", user.removeSkill.bind(user));
// console.log(user.skills);
// const arr = [1, 2];
// const objA = {
//   name: "objA",
// };
// function foo(a, b) {
//   console.log(this);
//   // console.log(arguments);
//   console.log("a", a);
//   console.log("a", b);
// }

// foo.apply(objA, [1, 2]);

// foo.apply(objA);

// bind----------------

// const objA = {
//   name: "objA",
// };

// function foo(a, b) {
//   console.log(arguments);
//   // console.log(arguments);
//   console.log("a", a);
//   console.log("a", b);
// }

// const copy = foo.bind(objA);
// // console.log(copy);
// copy(1, 4);
// copy(2, 5);
// copy(3, 6);
// copy(4, 7);
// copy(5, 7);
// copy(6, 7);

// const objA = {
//   name: "objA",
// };
// const objB = {
//   name: "objB",
// };

// function foo(a, b) {
//   console.log(this);
//   // console.log(arguments);
//   console.log("a", a);
//   console.log("b", b);
// }

// const copy = foo.bind(objA);
// copy(1, 3);
// copy.call(objB, 2, 4);
//Practice---------------------------------------------------------
//1 -Майстерня коштовностей----------------------
//Напишіть метод calcTotlaPrice(stoneName),
// який приймає назву каменю і розраховує та повертає
// загальну вартість каменів з таким ім'ям, ціною
//та кількістю із властивості stones.

// const chopShop = {
//   stones: [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Diamond", price: 2700, quantity: 3 },
//     { name: "Sapphire", price: 1400, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     // const stone = this.stones.find(({ name }) => name === stoneName);

//     // if (stone) {
//     //   return stone.price * stone.quantity;
//     // }
//     // return "Not Fount";

//     const { price, quantity } = this.stones.find(
//       ({ name }) => name === stoneName
//     );
//     return price * quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice("Emerald")); //5200
// console.log(chopShop.calcTotalPrice("Diamond")); //8100
// console.log(chopShop.calcTotalPrice("Sapphire")); //9800
// console.log(chopShop.calcTotalPrice("Ruby")); //1600

//Example 2 - Телефонна книга
// Виконайте рефакторинг методів об'єкта phonebook щоб код запрацював.
// function getDate() {
//   return Date.now();
// }
// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: "default",
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//   },
//   generateId() {
//     return "_" + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// console.log(
//   phonebook.add({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   })
// );

// phonebook.add({
//   name: "Poly",
//   email: "poly@hotmail.com",
// });
// console.log(phonebook.contacts);

// Example 3 -Калькулятор
// Створіть об'єкт calkulator з трьома методами:

// read(a,b)- приймає два значення та зберігає їх як властивості об'єкта.
// add()- повертає суму збережених значень.
// mult()- перемножує збережені значення та повертає результат.

// const calculator = {
//   a: 2,
//   read(a = 0, b = 0) {
//     this.a = a;
//     this.b = b;
//   },

//   add() {
//     //   || ?? null undefined
//     return (this.a ?? 0) + (this.b ?? 0);

//     // if (this.a === undefined) {
//     //   this.a = 0;
//     // }
//     // if (this.b === undefined) {
//     //   this.b = 0;
//     // }
//     // return this.a + this.b;
//   },

//   mult() {
//     return !this.a && !this.b ? 0 : (this.a ?? 1) * (this.b ?? 1);
//   },
// };
// console.log(calculator);
// calculator.read(0, 2);
// console.log(calculator.mult());
// // console.log(calculator.add());
// console.log(calculator);

// console.log("" || 1);
// console.log(0 || 1);
// console.log(undefined || 1);
// console.log(null || 1);
// console.log(NaN || 1);
// console.log(false || 1);

// console.log("" ?? 1);
// console.log(0 ?? 1);
// console.log(NaN ?? 1);
// console.log(false ?? 1);

// console.log(undefined ?? 1); //1
// console.log(null ?? 1); //1

// const baseSalary = 30000;
// const overTime = 10;
// const rate = 20;

// const getWage = (baseSalary, overTime, rate) => {
//   return baseSalary + overTime * rate;
// };

// console.log(getWage(baseSalary, overTime, rate));

// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;

// for (const key in dog) {
//   console.log(key);
// }

// for (const key in dog) {
//   if (!dog.hasOwnProperty(key)) continue;
//   console.log(key);
// }

// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;

// const dogKeys = Object.keys(dog);

// console.log(dogKeys);

// Класи _---------------------------------

// class User {
//   // ------ body of class
// }

// const mango = new User();
// console.log(mango);

// const poly = new User();
// console.log(poly);

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User("Mango", "mango@mail.com");
// console.log(mango);

// const poly = new User("Poly", "poly@mail.com");
// console.log(poly);

// const objA = {
//   name: "objA",
//   sayHello() {
//     console.log(this.name);
//   },
// };

// const objB = Object.create(objA);
// objB.name = "objB";
// console.log(objB);
// console.log(objB.name);
// objB.sayHello();
// // objA.go();

// const user = {
//   name: "user",
//   email: "test@mail.com",
// };

// const admin = Object.create(user);
// admin.root = true;

// const superAdmin = Object.create(admin);
// superAdmin.secretKey = "qwerty";
// console.log(superAdmin);
// console.log(superAdmin.name);

// const castomer = Object.create(user);
// castomer.limit = 10000;

// class User {
//   #email;
//   constructor(userName, age, email) {
//     this.name = userName;
//     this.age = age;
//     this.#email = email;
//   }

//   get email() {
//     const pass = "querty111";
//     const message = prompt(` ${this.name} Enter secret key`);
//     if (pass === message) {
//       return this.#email;
//     }
//     alert("GO HOME");
//   }
//   set email(newEmail) {
//     if (newEmail.includes("@gmail.com")) {
//       this.#email = newEmail;
//       return;
//     }
//     alert("Must include @gmail.com");
//   }
// }

//const artem = new User("Artem", 28, "test@mail.com");
// const alex = new User("Alex", 28);
// artem.name = "Leo";
// console.log(artem.name);
// console.log(artem.email);
// artem.email = "artem@gmail.com";

// console.log(artem);
// console.log(alex);

// //Get
// console.log(artem.name);
// //Set
// artem.email = "artem@gmail.com";

// class User {
//   static counter = 0;
//   static addUser() {
//     this.counter += 1;
//   }
//   #email;
//   constructor(userName, age, email) {
//     this.name = userName;
//     this.age = age;
//     this.#email = email;
//     User.addUser();
//   }

//   #checkAge() {
//     if (this.age >= 18) {
//       return true;
//     }

//     return false;
//   }

//   buy(product) {
//     if (!this.#checkAge()) {
//       alert("😊");
//     }
//   }
//   get email() {
//     const pass = "querty111";
//     const message = prompt(` ${this.name} Enter secret key`);
//     if (pass === message) {
//       return this.#email;
//     }
//     alert("GO HOME");
//   }
//   set email(newEmail) {
//     if (newEmail.includes("@gmail.com")) {
//       this.#email = newEmail;
//       return;
//     }
//     alert("Must include @gmail.com");
//   }
// }

// const artem = new User("Artem", 14, "test@mail.com");
// const artem1 = new User("Artem", 14, "test@mail.com");
// const artem2 = new User("Artem", 14, "test@mail.com");
// const artem3 = new User("Artem", 14, "test@mail.com");
// const artem4 = new User("Artem", 14, "test@mail.com");
// const artem5 = new User("Artem", 14, "test@mail.com");
// const artem6 = new User("Artem", 14, "test@mail.com");
// const artem7 = new User("Artem", 14, "test@mail.com");
// // artem.buy();
// // artem.#checkAge()
// // console.log(artem);
// console.log(User.counter);

// class Human extends User {
//   constructor(name, age, email, hp, damage) {
//     super(name, age, email);
//     this.hp = hp;
//     this.damage = damage;
//   }
// }

// const artem = new Human("Artem", 14, "test@mail.com", 200, 20);

// console.log(artem);

// class User {
//   constructor({ name, age, numberOfPosts, topics }) {
//     this.name = name;
//     this.age = age;

//     this.numberOfPosts = numberOfPosts;
//   }

//   getInfo() {
//     return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts`;
//   }
//   updatePostCount(value) {
//     if (typeof value === "number" && !isNaN(value)) {
//       this.numberOfPosts += value;
//       return;
//     }
//     alert("Error");
//   }
// }
// const mango = new User({
//   name: "mango@mail.com",
//   age: 24,
//   numberOfPosts: 20,
//   topics: ["tech", "cooking"],
// });
// console.log(mango.getInfo());
// mango.updatePostCount(5 + null);
// console.log(mango.getInfo());

// class Storage {
//   constructor(products) {
//     this.items = products;
//   }
//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     if (!this.items.includes(item)) {
//       this.items.push(item);
//     }
//   }

//   removeItem(item) {
//     const idx = this.items.indexOf(item);
//     // !! -> Boolean()
//     // ~ (idx + 1) -1 => 0 - > - (0 + 1)=> -1
//     if (!!~idx) {
//       this.items.splice(idx, 1);
//     }
//   }
// }

// const storage = new Storage(["🍎", "🍏", "🍋", "🫐", "🍑"]);

// const items = storage.getItems();
// console.table(items);

// storage.addItem("💐");
// storage.addItem("🌸");
// storage.addItem("🏫");
// storage.addItem("🕚");
// console.table(items);

// storage.removeItem("🍋");
// console.table(items);
// storage.removeItem("🍋");
// console.table(items);

// class User {
//   #email;
//   #login;
//   constructor({ login, email }) {
//     this.#email = email;
//     this.#login = login;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     // condition
//     this.#email = newEmail;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     // condition
//     this.login = ne;
//   }
// }

// const mango = new User({
//   login: "Mango",
//   email: "mango@dog.woof",
// });

// class Notes {
//   static Priority = {
//     LOW: "low",
//     NORMAL: "normal",
//     HIGTH: "higth",
//   };
//   constructor(arr) {
//     this.items = arr;
//   }
//   addNote(obj) {
//     const inNotes = this.items.some(({ text }) => text === obj.text);
//     if (!inNotes) {
//       this.items.push(obj);
//     }
//     console.log(inNotes);
//   }
//   removeNotes(text) {
//     const idx = this.items.findIndex(({ text: noteText }) => text === noteText);

//     if (!!~idx) {
//       this.items.splice(idx, 1);
//     }
//   }
//   updateNote(text, newPriority) {
//     const idx = this.items.findIndex(({ text: noteText }) => text === noteText);
//     if (!!~idx) {
//       this.items[idx].priority = newPriority;
//     }
//   }
// }

// const myNotes = new Notes([]);

// myNotes.addNote({ text: "Моя перша замітка", priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addNote({
//   text: "Моя друга замітка",
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNotes("Моя перша замітка");
// console.log(myNotes.items);

// myNotes.updateNote("Моя друга замітка", Notes.Priority.HIGTH);
// console.log(myNotes.items);

// Example 5 = Toggle
//Напишіть клас Toggle  який приймає об'єкт налаштувань {isOpen: boolean} і
// оголошує одну властивість on - стан вкл/викл (true/false). За замовчуванням
// значення властивості on має бути false.

// class Toggle {
//   constructor({ isOpen = false } = {}) {
//     this.on = isOpen;
//   }
//   toggle() {
//     this.on = !this.on;
//   }
// }

// const firstToggle = new Toggle({ isOpen: true });
// console.log(firstToggle);
// console.group("firstToggle");
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd("firstToggle");

// const secondToggle = new Toggle();
// console.log(secondToggle);

//

// const Car = function ({ brand, model, price } = {}) {
//   // const { brand, model, price } = config;
//   this.brand = brand;
//   this.model = model;
//   this.price = price;

//   // this.changePrice = function (newPrice) {
//   //   this.price = newPrice;
//   // };
// };

// Car.prototype.sayHi = function () {
//   console.log("Car.prototype.sayHi -> this", this);
//   console.log("Hello :) ");
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// // console.log(Car.prototype);

// // const myCar = new Car({ brand: "Audi", model: "03", price: 35000 });
// // console.log(myCar);

// // myCar.sayHi();
// // myCar.changePrice(10000);

// // const myCar2 = new Car({ brand: "BMW", model: "x2", price: 50000 });
// // console.log(myCar2);

// // myCar.sayHi();

// // const myCar3 = new Car({ brand: "Audi", model: "a6", price: 65000 });
// // console.log(myCar3);
// // myCar.sayHi();

// // console.log(myCar);

// const User = function ({ email, password } = {}) {
//   this.email = email;
//   this.password = password;
// };

// User.prototype.changeEmail = function (newMail) {
//   this.email = newMail;
// };

// const mango = new User({ email: "mango@mail.com", password: 111111 });

// mango.changeEmail("my-new-mail@mail.com");
// console.log(mango);

// User.message = "Я статическое свойство, меня нет на экземпляре и в прототипе";
// User.logInfo = function (obj) {
//   console.log("User.logInfo -> obj", obj);
// };

// User.logInfo(mango);

class Car1 {
  static description = "AAA";

  static logInfo(carObj) {
    console.log("Car.logInfo -> carObj", carObj);
  }

  constructor({ brand, model, price } = {}) {
    // console.log("Выполняется constructor");
    // console.log(this);

    this.brand = brand;
    this._model = model;
    this._price = price;
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  changePrice(newPrice) {
    this.price = newPrice;

    // console.log(this.#test);
  }

  // setModel(newModel) {
  //   this.model = newModel;
  // }

  set model(newModel) {
    this._model = newModel;
  }

  get model() {
    return this._model;
  }
  // getModel() {
  //   return this.model;
  // }
}

// Car1.AAA = "AAA";

// console.dir(Car1);

// console.log(Car1.description);

const carInstance = new Car1({
  brand: "Audi",
  model: "Q3",
  price: 35000,
});

// console.log(carInstance.getModel());

// carInstance.setModel("Q4");
// console.log(carInstance.getModel());

// console.log(carInstance);
// console.log(carInstance.model);

// carInstance.model = "Q4";
// console.log(carInstance.model);

// console.log(carInstance.price);
// carInstance.price = 50000;
// console.log(carInstance.price);
// console.log(carInstance);

class Hero {
  constructor(name = "hero", xp = 0) {
    this.name = name;
    this.xp = xp;
  }
  gainXp(amount) {
    console.log(`${this.name} получает ${amount} опыта`);
    this.xp += amount;
  }
}

// const mango = new Hero({ name: "mango", xp: 1000 });

class Warrior extends Hero {
  constructor(name, xp, weapon) {
    super(name, xp);

    this.weapon = weapon;
  }
}

const mango = new Warrior("mango", 1000, "алебарда");
console.log(mango);

console.log("Warrior.prototype", Warrior.prototype);
console.log("Hero.prototype", Hero.prototype);
