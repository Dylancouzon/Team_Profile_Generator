// Call on Modules & classes
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');


class Team {
    constructor() {


    }

    addManager() {

        console.log("Please enter the infos of the Team Leader");
        // Get the questions from the Manager Class
        let questions = new Manager().getQuestions();
        return inquirer
            .prompt(questions)
            .then((answers) => {
                console.log(answers.name);
            })
            .then(() => {
                this.nextEmployee(true)
            })
            .catch((err) => console.error(err));

    }

    addEngineer(){
        console.log("Please enter the infos of the Team Leader");
        // Get the questions from the Manager Class
        let questions = new Engineer().getQuestions();
        return inquirer
            .prompt(questions)
            .then((answers) => {
                console.log(answers.name);
            })
            .then(() => {
                this.nextEmployee()
            })
            .catch((err) => console.error(err));
    }

    addIntern(){
        console.log("Please enter the infos of the Team Leader");
        // Get the questions from the Manager Class
        let questions = new Intern().getQuestions();
        return inquirer
            .prompt(questions)
            .then((answers) => {
                console.log(answers.name);
            })
            .then(() => {
                this.nextEmployee()
            })
            .catch((err) => console.error(err));
    }

    nextEmployee(boolean) {
        // If the boolean is true, generate a new employee. 
        // If it is false, ask the user if they want to add another employee
        if (boolean === true) {
            return inquirer
                .prompt({
                    type: "list",
                    name: "choice",
                    message: "Add another Employee",
                    choices: ['Engineer', 'Intern']
                })
                .then((answers) => {
                    if (answers.choice == "Engineer") {
                        return this.addEngineer();
                    } else {
                        return this.addIntern();
                    }
                });
        } else {
            return inquirer
                .prompt({
                    type: "list",
                    name: "choice",
                    message: "Add another employee?",
                    choices: ['yes', 'no']
                })
                .then((answers) => {
                    if (answers.choice == "yes") {
                        return this.nextEmployee(true);
                    } else {
                        return generatePage();
                    }
                })
        }
    }
}

module.exports = Team;