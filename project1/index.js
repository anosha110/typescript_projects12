#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome\n");
let loop = true;
while (loop) {
    let input = await inquirer.prompt([
        {
            type: "number",
            name: "num1",
            message: "Enter your first number",
        },
        {
            type: "number",
            name: "num2",
            message: "Enter your 2nd number",
        },
        {
            type: "list",
            name: "operator",
            message: "Select the operator",
            choices: ["Addition", "Subtraction", "Multipication", "Division"],
        },
    ]);
    let { num1, num2, operator } = input;
    if (operator === "Addition")
        add();
    if (operator === "Subtraction")
        sub();
    if (operator === "Multipication")
        multiply();
    if (operator === "Division")
        divide();
    function add() {
        console.log(`${num1} + ${num2} =${num1 + num2}\n`);
    }
    function sub() {
        console.log(`${num1} - ${num2} =${num1 - num2}\n`);
    }
    function multiply() {
        console.log(`${num1} x ${num2} =${num1 * num2}\n`);
    }
    function divide() {
        console.log(`${num1} / ${num2} =${num1 / num2}\n`);
    }
    let againCalculate = await inquirer.prompt({
        type: "confirm",
        name: "more",
        message: "do you want to perform another calculation?",
        default: false,
    });
    if (!againCalculate.more) {
        loop = false;
        console.log("Thank you for using Calculator!");
    }
}
