// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let sum = 0;

// const values = Object.values(salaries);
// for (const value of values) {
//   sum += value;
// }
// console.log(sum);
// console.log(values);

// for (const key in salaries) {
//   if (salaries.hasOwnProperty(key)) {
//     sum += salaries[key];
//   }
// }
// console.log(sum);

//
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
//   test: {
//     num: 32,
//   },
// };

// Object.freeze(Transaction);
// console.log(Transaction);
// Transaction.test.num = 44;
// console.log(Transaction);

// const account = {
//   balance: 0,
//   transactions: [],
//   createTransaction(amount, type) {
//     const obj = {
//       id: Date.now(),
//       amount,
//       type,
//     };
//     this.transactions.push(obj);
//   },
//   deposit(amount) {},

//   getTransactionTotal(type) {},

//   deposit(amount) {
//     this.balance += amount;
//     this.createTransaction(amount, Transaction.DEPOSIT);
//   },
// };

// account.createTrasaction(1000, Transaction.DEPOSIT);
// account.createTrasaction(2000, Transaction.DEPOSIT);
// account.deposit(1500);
// console.log(account);

// const arr = [1, 2, 3, 45, 65];
// const arr1 = [1, 2, [1, 2, 44], 65];
// const arr2 = [1, 2, 3, 45, [1, 2, 44, [55, [22, 44, 12, [26, 27]]]], 65];

// function addItems(arr) {
//   let sum = 0;
//   for (const item of arr) {
//     if (Array.isArray(item)) {
//       sum += addItems(item);
//     } else {
//       sum += item;
//     }
//   }
//   return sum;
// }

// console.log(addItems(arr2));

const courses = ["HTML", "CSS", "JavaScript", "React", "PostgresSQL"];

function addCourse(name) {
  if (!courses.includes(name)) {
    courses.push(name);
    return;
  }
  return "Ви вже маєте такий курс";
}
addCourse("Express");
console.log(courses);

addCourse("CSS");

function removeCourse(name) {
  const idx = courses.indexOf(name);
  if (idx === -1) {
    return "Курс із таким імям не знайдено";
  }
  courses.splice(idx, 1);
}

removeCourse("React");
console.log(courses);

removeCourse("Vue");
console.log(courses);

function updateCourse(oldName, newName) {
  const idx = courses.indexOf(oldName);
  if (idx === -1) {
    // !!~idx
    return "Курс із таким імям не знайдено";
  }
  courses.splice(idx, 1, newName);
  // courses[idx] = newName;
}

updateCourse("Express", "NestJS");
console.log(courses);
