const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(response){
        super(response)
        this.name = response.internName;
        this.id = response.internId;
        this.email = response.internEmail;
        this.school = response.internSchool
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return "Intern";
    }
}
module.exports = Intern;