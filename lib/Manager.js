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
        return `
        <div class="col">
        <div class="card h-100">
                <img src="https://cdn.lynda.com/static/landing/images/hero/Manager_1200x630-1503438961060.jpg" class="card-img-top" alt="Manager">
                <div class="card-body">
                        <h5 class="card-title fs-3">Manager -- ${this.name}</h5>
                        <p class="card-text fs-4">
                                ID: ${this.id}<br>
                                Email: ${this.email}<br>
                                Office Number: ${this.officeNumber}
                        </p>
                </div>
        </div>
</div>`;
    }
}

module.exports = Manager;