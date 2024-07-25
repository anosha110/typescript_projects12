#! /usr/bin/env node
import inquirer from "inquirer";
console.log("welcom to count Down timer");
let inputUser = await inquirer.prompt({
    type: "number",
    name: "seconds",
    message: "Enter count down duration in seconds",
});
let { seconds } = inputUser;
if (seconds != 0) {
    console.log(`starting count down for ${seconds} seconds....`);
    startCountdownfun(seconds);
}
else {
    console.log(`please enter a number grater than 0`);
}
function startCountdownfun(seconds) {
    const currentTime = Date.now();
    let userEnterTime = seconds * 1000;
    let totalTime = currentTime + userEnterTime;
    const timer = setInterval(() => {
        let currentTime = Date.now();
        const remaningTime = totalTime - currentTime;
        if (remaningTime >= 0) {
            process.stdout.write(` \rtime remaning ${Math.floor(remaningTime / 1000)}seconds`);
        }
        else {
            clearInterval(timer);
            console.log(`\nTime up!`);
            console.log(`thankyou for using countdown timer App`);
        }
    }, 1000);
}
