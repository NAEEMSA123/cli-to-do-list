#! /usr/bin/env node
import inquirer from "inquirer";

let todoList = [];
let condition = true;

console.log("\n \tWelcome to Naeem Ahmed - Todo-List Application\n");

while(condition){
    let addTask = await inquirer.prompt([
        {
            name:"task",
            type:"input",
            message:"Enter your new task :",

        }
    ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task} Task added in todoList Successfully`);

    let addMoreTask = await inquirer.prompt([
        {
            name:"addmore",
            type:"confirm",
            message:"To do want to add more task :",
            default:"false"
        }
    ]);
    condition = addMoreTask.addmore

}
console.log(`your updated Todo-List : ${todoList}`);