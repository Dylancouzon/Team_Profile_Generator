class Manager{
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
                name: 'officeNumber',
                message: 'Office Number:',
            },
        ];
     return questions;

    }
}

module.exports = Manager;