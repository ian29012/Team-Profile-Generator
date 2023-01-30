class Employee {
    constructor(response){
        this.name = response.employeeName
        this.id = response.employeeId
        this.email = response.employeeEmail
        this.number = response.employeeNumber
        this.role = response.employeeRole
    }
    console(){
        console.log(this.name)
        console.log(this.id)
        console.log(this.email)
        console.log(this.number)
        console.log(this.role)
    }
}
  
  module.exports = Employee;