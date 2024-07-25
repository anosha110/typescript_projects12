#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

class player {
  name: string;
  fuel: number = 100;
  constructor(myplayerName: string) {
    this.name = myplayerName;
  }
  fuelDecrease() {
    this.fuel = this.fuel - 25;
  }
  fuelIncrease() {
    this.fuel = this.fuel + 25;
  }
}
class opposite {
  name: string;
  fuel: number = 100;
  constructor(oppositName: string) {
    this.name = oppositName;
  }
  fuelDecrease() {
    this.fuel = this.fuel - 25;
  }
}

let inputUser = await inquirer.prompt([
  {
    type: "input",
    name: "myName",
    message: "Enter your name:",
  },
  {
    type: "list",
    name: "oppositeName",
    message: "Select Player opposite",
    choices: ["nitta", "messam", "masoom"],
  },
]);
let { myName, oppositeName } = inputUser;
console.log(`${chalk.bold.green(myName)} Vs ${chalk.bold.red(oppositeName)}`);

let myPlayer = new player(myName);
let myopposite = new opposite(oppositeName);

while (true) {
  let startMatch = await inquirer.prompt({
    type: "list",
    name: "options",
    message: "Select your option",
    choices: ["Attack", "Increase your health", "Run for life.."],
  });
  let {options} = startMatch;
  if (options === "Attack") attackFun();
  if (options === "Increase your health") increaseFun();
  if (options === "Run for life..") runFun();

  function attackFun() {
    let number = Math.floor(Math.random() * 2);

    if (number === 0) {
      myPlayer.fuelDecrease();
      console.log(`${myPlayer.name}'s fuel is ${chalk.bold.red(myPlayer.fuel)}`);

      console.log(
        `${myopposite.name}'s fuel is ${chalk.bold.green(myopposite.fuel)}\n`
      );
      if (myPlayer.fuel === 0) {
          console.log(`${chalk.bold.red(myPlayer.name)} lost ! better luck next time`);
        }
      }
    if(number===1){
        myopposite.fuelDecrease();
        console.log(`${myPlayer.name}'s fuel is ${chalk.bold.green(myPlayer.fuel)}`);

        console.log(`${myopposite.name}'s fuel is ${chalk.bold.red(myopposite.fuel)}\n`);

        if(myopposite.fuel===0){
            console.log(`${chalk.bold.green(myPlayer.name)}!Congratulation you won the game.`)
            process.exit();
        }
        }
  }

  function increaseFun() {
myPlayer.fuelIncrease();
console.log(`${myPlayer.name}'s fuel is increase to ${chalk.bold.green(myPlayer.fuel)}`);
  }
  function runFun() {
    console.log(`${chalk.bold.red(myPlayer.name)} lost! better luck next time`)
    process.exit();
  }
}
