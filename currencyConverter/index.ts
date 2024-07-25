#! /usr/bin/env node

import inquirer from "inquirer";

console.log("Welcom to my Currency Converter project");

let Currency: any = {
  USD: 1,
  PKR: 278.22,
  Saudi_Riyal: 3.748,
  EUR: 0.922,
  indianRupees: 83.48,
};

let loop = true;

while (loop) {
  let input = await inquirer.prompt([
    {
      type: "list",
      name: "from",
      message: "Select Currency for convert",
      choices: ["USD", "PKR", "Saudi_Riyal", "EUR", "indianRupees"],
    },
    {
      type: "list",
      name: "to",
      message: "Select Currency for convert into",
      choices: ["USD", "PKR", "Saudi_Riyal", "EUR", "indianRupees"],
    },
    {
      type: "number",
      name: "amount",
      message: "Enter amount you want to convert!",
    },
  ]);
  let { from, to, amount } = input;
  let fromAmount = Currency[from];
  let toAmount = Currency[to];

  let baseCurrency = amount / fromAmount;
  let conertedAmount = baseCurrency * toAmount;

  let finalOutput = conertedAmount.toFixed(2);
  console.log(`\n${from} amount ${amount} converted to ${to}=${finalOutput}`);

  let converAgain = await inquirer.prompt({
    type: "confirm",
    name: "more",
    message: "Do you want more conversion?",
    default: false,
  });
  if (!converAgain.more) {
    loop = false,
      console.log("\nThank you for using currency Coverter project");
  }
}
