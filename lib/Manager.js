const Employee = require('./Employee');

class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;

    }

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

    }

    getRole() {
        return "Manager";
    }

    generateHTML() {
        return `<p>${this.name}</p>`
    }
}

module.exports = Manager;