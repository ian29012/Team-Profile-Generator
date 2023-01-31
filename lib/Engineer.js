const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(response){
        super(response)
        this.name = response.engineerName;
        this.id = response.engineerId;
        this.email = response.engineerEmail;
        this.gitHub = response.engineerGitHub;
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
    getGithub(){
        return this.gitHub;
    }
    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;