const Employee = require('./generator.js');

class Manager extends Employee {
    constructor(response){
        super(response)
        this.name = response.managerName;
        this.id = response.managerId;
        this.email = response.managerEmail;
        this.number = response.managerNumber;
    }
    getRole(){
        return "Manager";
    }
}

module.exports = Manager;