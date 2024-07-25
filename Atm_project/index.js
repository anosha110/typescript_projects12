#! /usr/bin/env node
import inquirer from 'inquirer';
console.log("Welcome to my ATM machine!\n");
let balance = Math.floor(Math.random() * 10000);
let loop = true;
while (loop) {
    const input = await inquirer.prompt([
        {
            type: 'input',
            name: 'userPin',
            message: 'Please Enter your Password!'
        },
        {
            type: 'list',
            name: 'accountType',
            message: 'Select your Account type',
            choices: ['Current Account', 'Saving Account']
        },
        {
            type: 'list',
            name: 'transactionType',
            message: 'Select your transaction',
            choices: ['Fast Cash', 'Cash Withdraw', 'Balance inquiry']
        },
        {
            type: 'list',
            name: 'amount',
            message: 'Please select your amount for withdrawal',
            choices: [500, 1000, 2000, 4000, 5000, 10000, 20000],
            when(input) {
                return input.transactionType === "Fast Cash";
            }
        },
        {
            type: 'number',
            name: 'amount',
            message: "Enter your amount for withdrawal",
            when(input) {
                return input.transactionType === "Cash Withdraw";
            }
        }
    ]);
    const { userPin, transactionType, amount } = input;
    if (userPin && transactionType === 'Balance inquiry') {
        console.log(`Your current balance is Rs.${balance}`);
    }
    else if (balance > amount) {
        console.log(`Your account has been debited with Rs.${amount} and remaning balance is ${balance -= amount}`);
    }
    else {
        console.log(`\nUnsufficient Balance`);
    }
    let moreTransaction = await inquirer.prompt({
        type: 'confirm',
        name: 'more',
        message: "do you want more transaction?",
        default: false
    });
    if (!moreTransaction.more) {
        loop = false;
        console.log("\n Thank you for using an ATM");
    }
}
