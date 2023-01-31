const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(response){
        super(response)
        this.name = response.internName;
        this.id = response.internId;
        this.email = response.internEmail;
        this.school = response.internSchool;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return "Intern";
    }
}
module.exports = Intern;