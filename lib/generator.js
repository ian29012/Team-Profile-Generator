class Employee {
    constructor(response){
        this.name = response.employeeName;
        this.id = response.employeeId;
        this.email = response.employeeEmail;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getRole(){
        return "Employee";
    }
}

class Engineer extends Employee {
    constructor(response){
        super(response)
        this.name = response.engineerName;
        this.id = response.engineerId;
        this.email = response.engineerEmail;
        this.gitHub = response.engineerGitHub
    }
    getGithub(){
        return this.gitHub;
    }
    getRole(){
        return "Engineer";
    }
}

class Intern extends Employee {
    constructor(response){
        super(nresponse)
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

  module.exports = Employee, Engineer, Intern;