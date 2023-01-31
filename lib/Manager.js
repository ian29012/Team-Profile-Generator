const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(response){
        super(response)
        this.name = response.managerName;
        this.id = response.managerId;
        this.email = response.managerEmail;
        this.number = response.managerNumber;
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
    getOfficeNumber(){
        return this.number;
    }
    getRole(){
        return "Manager";
    }
}

module.exports = Manager;