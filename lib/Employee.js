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

  module.exports = Employee;