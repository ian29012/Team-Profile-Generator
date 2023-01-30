const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern.js');

const roleQues = require('./lib/question.js');
const managerQues = require('./lib/ManagerQues.js');
const engineerQues = require('./lib/EngineerQues');
const internQues = require('./lib/InternQues');

// // function to initialize program
function init() {
    inquirer.prompt(internQues)
    .then((data) => {
        if (!data.confirm){
        data.employeeId = new Intern(data);
        console.log(data.employeeId)
        console.log(data.employeeId.getSchool())
        console.log(data.employeeId.getRole())
        } else {
            return init()
        }
    });
}
init()