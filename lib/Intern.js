const Employee = require('./Employee');

class Intern extends Employee {
    constructor(id, name, email, school) {
        super(name, id, email);
        this.school = school;

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

    getSchool() {
        return this.school;
    }
    
    getRole() {
        return "Intern";
    }

    generateHTML() {
        return `
        <div class="col">
        <div class="card h-100">
        <img style="height: 47%;" src="https://nypost.com/wp-content/uploads/sites/2/2016/08/intern.jpg?quality=90&strip=all&w=618&h=410&crop=1" class="card-img-top" alt="...">
        <div class="card-body">
                <h5 class="card-title fs-3">Intern -- ${this.name}</h5>
                <p class="card-text fs-4">
                        ID: ${this.id}<br>
                        Email: ${this.email}<br>
                        School: ${this.school}
                </p>
                </div>
        </div>
</div>`;
    }
}

module.exports = Intern;