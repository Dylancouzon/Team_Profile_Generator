const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(id, name, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;

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
                name: 'gitHub',
                message: 'GitHub username:',
            },
        ];
     return questions;

    }

    getRole() {
        return "Engineer";
    }

    generateHTML() {
        return `
        <div class="col">
        <div class="card h-100">
        <img src="https://inteng-storage.s3.amazonaws.com/img/iea/3ROaq3erOv/sizes/computer-engineers-successes_resize_md.jpg" class="card-img-top" alt="Engineer">
        <div class="card-body">
                <h5 class="card-title fs-3">Engineer -- ${this.name}</h5>
                <p class="card-text fs-4">
                        ID: ${this.id}<br>
                        Email: ${this.email}<br>
                        GitHub: <a href="https://github.com/${this.gitHub}">${this.gitHub}</a>
                </p>
                </div>
        </div>
</div>`;
    }
}

module.exports = Engineer;