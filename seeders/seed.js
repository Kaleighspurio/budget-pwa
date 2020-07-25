const mongoose = require("mongoose");
const transaction = require("../models/transaction");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true
});

const seed = [
  {
    name: "Deposit",
    value: 200,
    date: new Date(Date.now())
  },
  {
    name: "groceries",
    value: -160,
    date: new Date(Date.now())
  },
  {
    name: "Deposit Paycheck",
    value: 2000,
    date: new Date(Date.now())
  }
];

transaction.deleteMany({})
  .then(() => transaction.collection.insertMany(seed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });