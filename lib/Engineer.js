class Engineer{
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
                name: 'GitHub',
                message: 'GitHub username:',
            },
        ];
     return questions;

    }
}

module.exports = Engineer;