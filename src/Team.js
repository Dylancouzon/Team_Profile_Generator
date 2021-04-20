// Call on Modules & classes
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');


class Team {
    constructor() {
        this.team = [];
        this.fileName = "default.html";

    }

    addManager() {

        console.log("Please enter the infos of the Team Leader");
        // Get the questions from the Manager Class
        let questions = new Manager().getQuestions();
        return inquirer
            .prompt(questions)
            .then((answers) => {

                const addManager = new Manager(answers.id, answers.name, answers.email, answers.officeNumber)
                this.team.push(addManager.generateHTML());
                this.fileName = answers.name;
            })
            .then(() => {
                this.nextEmployee()
            })
            .catch((err) => console.error(err));

    }

    addEngineer() {
        console.log("Please enter the infos of the Engineer");
        // Get the questions from the Manager Class
        let questions = new Engineer().getQuestions();
        return inquirer
            .prompt(questions)
            .then((answers) => {
                const addEngineer = new Engineer(answers.id, answers.name, answers.email, answers.gitHub)
                this.team.push(addEngineer.generateHTML());
            })
            .then(() => {
                this.nextEmployee()
            })
            .catch((err) => console.error(err));
    }

    addIntern() {
        console.log("Please enter the infos of the Intern");
        // Get the questions from the Manager Class
        let questions = new Intern().getQuestions();
        return inquirer
            .prompt(questions)
            .then((answers) => {
                const addIntern = new Intern(answers.id, answers.name, answers.email, answers.school)
                this.team.push(addIntern.generateHTML());
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
                        return this.generatePage();
                    }
                })
        }
    }

    generatePage() {
        let beginHTML = `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
                        integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
                        crossorigin="anonymous">
                <title>Team Profile</title>
        </head>
        
        <body>
                <nav class="navbar navbar-light bg-dark mb-4">
                        <div class="container-fluid ">
                                <span class="fs-1 navbar-brand mb-0 h1 py-4 text-white">Team Profile</span>
                        </div>
                </nav>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                `
        let body = this.team.join("");

        let endHTML = `
        </div>
        </body>
        </html>`;

        return fs.writeFile(`./dist/${this.fileName}.html`, beginHTML + body + endHTML, (err) =>
            err ? console.error(err) : console.log('Success!')
        );
    }

}

module.exports = Team;