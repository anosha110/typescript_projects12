#! /usr/bin/env node

import inquirer from "inquirer";
console.log("Welcom to my quiz project");
let marks = 0;

let inputUser = await inquirer.prompt([
  {
    type: "list",
    name: "q1",
    message: "What does HTML stand for?",
    choices: [
      "A) Hyper Text Markup Language",
      "B) Home Tool Markup Language",
      "C) Hyperlinks and Text Markup Language",
      "D) Hyperlinking Text Mark Language",
    ],
  },
  {
    type: "list",
    name: "q2",
    message: " Which company developed JavaScript?",
    choices: [
      "A) Mozilla",
      "B) Netscape",
      "C) Microsoft",
      "D) Sun Microsystems",
    ],
  },
  {
    type: "list",
    name: "q3",
    message: "Which of the following is a JavaScript data type?",
    choices: ["A) Number", "B) String", "C) Boolean", "D) All of the above"],
  },
  {
    type: "list",
    name: "q4",
    message: "Which CSS property controls the text size? ",
    choices: ["A) font-style", "B) text-size", "C) font-size", "D) text-style"],
  },
  {
    type: "list",
    name: "q5",
    message:
      "Which HTML element is used to specify a footer for a document or section?",
    choices: ["A) <footer>", "B) <bottom>", "C) <section-footer>", "D) <foot>"],
  },
]);
const { q1, q2, q3, q4, q5 } = inputUser;

let correctAnswer = [
  "A) Hyper Text Markup Language",
  "B) Netscape",
  "D) All of the above",
  "C) font-size",
  "A) <footer>",
];
if (q1 === "A) Hyper Text Markup Language") marks += 5;
if (q2 === "B) Netscape") marks += 5;
if (q3 === "D) All of the above") marks += 5;
if (q4 === "C) font-size") marks += 5;
if (q5 === "A) <footer>") marks += 5;

console.log(marks);
function myAnswer() {
  console.log(`\n correct options:`, correctAnswer);
  if (marks == 25) {
    console.log(`\n congratulation ! you got full ${marks} marks out of 25`);
  } else if (marks > 0) {
    console.log(`\n you got ${marks} marks out of 25`);
  } else {
    console.log(
      `\n unfortunately ! you got ${marks} marks out of 25 please focus on your studies`
    );
  }
}
myAnswer();
