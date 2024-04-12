#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.yellow("\n \tWelcome To Muhammad Mehdi Raza - Atm Machine\n"));

let myBalance = 85000; 
let myPin = 6308;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: chalk.blue("Enter your pin number"),
  },
]);


if (pinAnswer.pin === myPin) {
  console.log(chalk.green("\ncorrect pin code!!!\n"));
  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select option",
      type: "list",
      choices: ["withdraw", "fast Cash", "check balance"],
    },
  ]);


  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: "Enter your amount",
      },
    ]);

    if (myBalance < amountAns.amount) {
      console.log(chalk.red("You don't have enough money in your account to cover your transactions."));
    }

    else {
      myBalance -= amountAns.amount;

      console.log(`your remaining balance is ${myBalance}`);
    };

  }

  else if (operationAns.operation === "fast Cash") {
    let fastCashAns = await inquirer.prompt({
      name: "amount",
      type: "list",
      choices: ["5000", "10000", "25000", "50000" , "100000"],},
    );
   
    if(fastCashAns.amount <= myBalance) {
      let balance2 = myBalance - fastCashAns.amount;
      console.log(`The Remaining Balance Is ${balance2}.`);
    }
  
    else {console.log (chalk.red(`You Have Insufficient Balance`));}
    
  }

  else if (operationAns.operation === "check balance") {
    console.log("your balance is :" + myBalance)
  };

}

else {
  console.log(chalk.red("Incorrect pin number"));
}


