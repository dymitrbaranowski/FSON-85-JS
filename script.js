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
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  balance: 0,
  transactions: [],
  createTransaction(amount, type) {
    const obj = {
      id: Date.now(),
      amount,
      type,
    };
    this.transactions.push(obj);
  },
  deposit(amount) {},

  getTransactionTotal(type) {},

  deposit(amount) {
    this.balance += amount;
    this.createTransaction(amount, Transaction.DEPOSIT);
  },
};

// account.createTrasaction(1000, Transaction.DEPOSIT);
// account.createTrasaction(2000, Transaction.DEPOSIT);
account.deposit(1500);
console.log(account);
