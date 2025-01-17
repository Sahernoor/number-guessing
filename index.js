#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Wellcome to CodeWithSaher - CLI Number Guessing Game");
const randomNumber = Math.floor(Math.random() * 3 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your guess number(Number Limit from 1 to 5):",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulation ! You guess a correct number.");
}
else {
    console.log("Sorry, You guess a wrong number");
}
