# Team profile generator
Project realized for UC Berkeley Extension Coding Bootcamp

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

![Site](./src/screenshot.png)

## Technology
<img align="left" alt="HTML" width="25x" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"/> &nbsp;
<img align="left" alt="JavaScript" width="25x" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"/> &nbsp;
<img align="left" alt="JavaScript" width="25x" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"/> &nbsp;
<img align="left" alt="JavaScript" width="25x" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"/> &nbsp;

- HTML
- CSS
- JavaScript
- [Node.js](https://nodejs.org/en/)
- npm packages:
    - [inquirer](https://www.npmjs.com/package/inquirer)
    - [Jest](https://www.npmjs.com/package/jest)

<br>
<hr>

## Summary 
This command-line application allows you to enter in details of each member of your team and generate an HTML page where is displayed name, id, email, and other relevant information to their position.

<br>
<hr>

## How to install
Download the project on your local machine.
Make sure you have node installed then at the root of the folder run the command:

```
npm install
```

<br>
<hr>

## How to use it
run the commande 

```
node index.js
```

<br>
<hr>

## Testing 
Run the command 
```
npm run test
```
Jest will run tests and try to generate a team with a member in each department.
Each test will either return PASS or FAIL

<br>
<hr>

## Code 
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

<br>
<hr>

## Video Demo

[Link](https://dylancouzon.github.io/Team_Profile_Generator/dist/Dylan.html)

<br>
<hr>

## Author
- [dylancouzon@gmail.com](mailto:dylancouzon@gmail.com)
- [GitHub](https://github.com/Dylancouzon)
- [LinkedIn](https://www.linkedin.com/in/dcouzon/)


