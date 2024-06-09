const users = [
  {
    name: "User1",
    language: "html",
    cars: {
      audi: "a6",
      bmw: "x5",
    },
  },
  {
    name: "User2",
    language: "css",
    cars: {
      audi: "a8",
      bmw: "x6",
    },
  },
  {
    name: "User3",
    language: "js",
    cars: {
      audi: "a7",
    },
  },
];

// for (const {
//   name,
//   cars: { audi: car },
// } of users) {
//   console.log(name, car);
// }

for (const {
  name,
  cars: { audi, bmw },
} of users) {
  console.log(name, bmw);
}
