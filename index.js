const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern.js');

const roleQues = require('./lib/roleQues.js');
const managerQues = require('./lib/ManagerQues.js');
const engineerQues = require('./lib/EngineerQues');
const internQues = require('./lib/InternQues');

const employee = []

// // function to initialize program
function init() {
    inquirer.prompt(managerQues)
    .then((data) => {
        data.employeeId = new Manager(data);
        employee.push(data.employeeId);
        console.log(data.employeeId);
        console.log("-------------")
        console.log(employee)

        if (data.confirm){
            role()
            console.log(employee)
        }
    });
}

function engineer() {
    inquirer.prompt(engineerQues)
    .then((data) => {
        data.employeeId = new Engineer(data);
        employee.push(data.employeeId);
        console.log(data.employeeId)
        console.log("-------------")
        console.log(employee)

        if (data.confirm){
            role()
            console.log(employee)
        }
    });
}

function intern() {
    inquirer.prompt(internQues)
    .then((data) => {
        data.employeeId = new Intern(data);
        employee.push(data.employeeId);
        console.log(data.employeeId)
        console.log("-------------")
        console.log(employee)

        if (data.confirm){
            role()
            console.log(employee)
        }
    });
}

function role(){
    inquirer.prompt(roleQues)
    .then((response) => {
        switch (response.employeeRole) {
            case 'Manager' :
            init();
            break;
            case 'Engineer' :
            engineer();
            break;
            case 'Intern' :
            intern();
            break;
            }
    })
}


init()