#! /usr/bin/env node

import inquirer from "inquirer";

console.log("Welcom to my todo list generator\n");

let loop = true;
let todoArry: string[] = [];
while (loop) {
  const inputUser = await inquirer.prompt([
    {
      type: "input",
      name: "todoitems",
      message: "Enter items in you todo list",
    },
    {
      type: "confirm",
      name: "addMore",
      message: "Do you want more items",
      default: false,
    },
    {
      type: "confirm",
      name: "seeList",
      message: "Do you want to see your list ?",
      default: false,
      when(inputUser) {
        return inputUser.addMore === false;
      },
    },
  ]);
  const { todoitems, addMore, seeList } = inputUser;
  if (todoitems) {
    todoArry.push(todoitems);
  }
  if (seeList) {
    console.log(`\nhere is you todo list:`);
    todoArry.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
    });
  }
  loop = addMore;
}
