// Call on Modules & classes
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');


class Team {
    constructor() {


    }

    askManager() {

        console.log("Please enter the infos of the Team Leader");
        // Get the questions from the Manager Class
        let questions = new Manager().getQuestions();
        inquirer
            .prompt(questions)
            .then((answers) =>{
                console.log(answers.name);
            })
            .then(askNewMember())
            .catch((err) => console.error(err));

    }
}

module.exports = Team;