#! /usr/bin/env node
import inquirer from "inquirer";
class BankAccount {
    accountNumber;
    userBalance;
    constructor(accountNumber, userBalance) {
        this.accountNumber = accountNumber;
        this.userBalance = userBalance;
    }
    withdraw(amount) {
        if (this.userBalance >= amount) {
            this.userBalance -= amount;
            console.log(`Withdrawal of $${amount} successful. Your remaining balance is $${this.userBalance}`);
        }
        else {
            console.log("Insufficient balance");
        }
    }
    deposit(amount) {
        if (amount > 100) {
            amount -= 1;
        }
        this.userBalance += amount;
        console.log(`Deposit of $${amount} successful. Your new balance is $${this.userBalance}`);
    }
    checkBalance() {
        console.log(`Your current balance is $${this.userBalance}`);
    }
}
class Customer {
    firstName;
    lastName;
    gender;
    age;
    mobileNumber;
    account;
    constructor(firstName, lastName, gender, age, mobileNumber, account) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.mobileNumber = mobileNumber;
        this.account = account;
    }
}
const myAccount = [
    new BankAccount(1001, 500),
    new BankAccount(1002, 1000),
    new BankAccount(1003, 2000),
];
const customers = [
    new Customer('Anosha', 'Syed', 'female', 23, '3246864787', myAccount[0]),
    new Customer('Nitta', 'Syed', 'female', 25, '4246864787', myAccount[1]),
    new Customer('Mesam', 'Syed', 'male', 23, '5246864787', myAccount[2]),
];
async function service() {
    do {
        const accountNumberInput = await inquirer.prompt({
            name: "accountNumber",
            type: "number",
            message: "Enter your account Number",
        });
        const customer = customers.find((customer) => customer.account.accountNumber === accountNumberInput.accountNumber);
        if (customer) {
            console.log(`Welcome, ${customer.firstName} ${customer.lastName}\n`);
            const ans = await inquirer.prompt([
                {
                    name: 'Select',
                    type: 'list',
                    message: "Select an operation",
                    choices: ["Deposit", "Withdraw", "Check Balance", "Exit"]
                }
            ]);
            switch (ans.Select) {
                case "Deposit":
                    const depositAmount = await inquirer.prompt({
                        name: "amount",
                        type: "number",
                        message: "Enter amount you want to deposit",
                    });
                    customer.account.deposit(depositAmount.amount);
                    break;
                case "Withdraw":
                    const withdrawAmount = await inquirer.prompt({
                        name: "amount",
                        type: "number",
                        message: "Enter amount you want to withdraw",
                    });
                    customer.account.withdraw(withdrawAmount.amount);
                    break;
                case "Check Balance":
                    customer.account.checkBalance();
                    break;
                case "Exit":
                    console.log("Thank you for using our service!");
                    return;
            }
        }
        else {
            console.log("Account not found. Please try again.");
        }
    } while (true);
}
service();
