#! /usr/bin/env node

import inquirer from "inquirer";

console.log("Welcom to word Counter App");

let loop = true;

while (loop) {
  const inputUser = await inquirer.prompt([
    {
      type: "input",
      name: "para",
      message: "Enter your lines/paragraphs for word counter!",
    },
    {
      type: "list",
      name: "ask",
      message: "what do you want to count in you paragraph?",
      choices: ["1. Letters", "2.words", "3.Both Letters and Words"],
    },
  ]);
  let { para, ask } = inputUser;
  if (para.length === 0) emptyInput();
  if (ask === "1. Letters") letterFun();
  if (ask === "2.words") wordsFun();
  if (ask === "3.Both Letters and Words") bothFun();

  function emptyInput() {
    console.log(`your input is empty! please try again `);
  }
  function letterFun() {
    const lettrsWithoutSpace = para.replace(/\s/g, "");
    const letterCount = lettrsWithoutSpace.length;
    console.log(`Total letters are in your paragraph "${letterCount}"`);
  }
  function wordsFun() {
    const wordsArry = para.split(" ");
    const wordCount=wordsArry.length;
    console.log(`Total words in your paragraph are "${wordCount}"`)
  }
  function bothFun() {
    letterFun();
    wordsFun();
  }
let CountAgain=await inquirer.prompt({
    type: 'confirm',
    name: 'more',
    message: "Do you want to count more words?",
    default:false
})
if(!CountAgain.more){
    loop=false;
    console.groupCollapsed(`Thank you for using this App`);
}
}
