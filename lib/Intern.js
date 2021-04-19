class Intern{
    constructor(){

    }

    getQuestions(){
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
                name: 'school',
                message: 'School Name:',
            },
        ];
     return questions;

    }
}

module.exports = Intern;