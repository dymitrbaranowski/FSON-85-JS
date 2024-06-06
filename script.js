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

const products = [
  {
    name: "apple",
    qty: 4,
  },
];

function getAllPropValues(propName) {
  let valuesPropName = [];

  for (const product of products) {
    for (const key in product) {
      console.log(key);
      if (key === propName) {
        valuesPropName.push(product[key]);
      }
    }
  }
  return valuesPropName;
}

getAllPropValues("name");
