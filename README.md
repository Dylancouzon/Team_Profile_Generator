# README Generator
Homework for UC Berkeley Extension Coding Bootcamp

![Site](./src/screenshot.png)

## Technologies Used
- Javascript - Backend coding
- Node - JavaScript runtime environment
- Inquirer - Node module to create a form
- Jest - Node module for testing

## Summary 
This is a command-line application that generates an HTML file containing information about different members of a team.

## How to install
You would need to download the project on your local machine, install node.js run the command :

```
node install
```

## How to use it
run the commande 

```
node index.js
```

## Snippet 
```js
getQuestions() {
        let questions = [
            {
                type: 'input',
                name: 'name',
                message: 'Name:',
            },
            {
                type: 'input',
                name: 'id',
                message: 'Employee ID:',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Email:',
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Office Number:',
            },
        ];
        return questions;
```
In this example, I stored all the questions for each different kind of employee in a Method inside each object for better readability and easier editing.

## Author Links
[LinkedIn](https://www.linkedin.com/in/dcouzon/)
[GitHub](https://github.com/Dylancouzon)

