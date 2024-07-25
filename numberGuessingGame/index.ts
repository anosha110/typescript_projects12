#! /usr/bin/env node

import inquirer from "inquirer";

console.log("welcom to my number guessing gam!\n");

const num = Math.floor(Math.random() * 10 + 1);

let loop = true;
let attemp = 1;

while (loop) {
  const input = await inquirer.prompt({
    type: "number",
    name: "usernum",
    message: "Enter you number",
  });
  let { usernum } = input;
  console.log(`your attempt No.${attemp}`)

  if (usernum === num) WonMatch();
  if (usernum > num) greaterNum();
  if (usernum < num) lessNum();

  function WonMatch() {
    console.log(`Congratulation ! your gussed number ${usernum} is correct!`);
    console.log(`\n you have attempt ${attemp} time to guess the right number`);
    loop=false
  }
  function greaterNum() {
    console.log(`your gussed number is greater than actual number`);
    attemp++
  }
  function lessNum() {
    console.log(`your gussed number is less than actual number`);
    attemp++
  }

}
