const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/generator.js');
const Intern = require('./lib/generator.js');
const Employee = require('./lib/generator.js');
const roleQues = require('./lib/question.js');
const managerQues = require('./lib/managerQues.js');
const engineerQues = require('./lib/question.js');
const internQues = require('./lib/question.js');

// // function to initialize program
function init() {
    inquirer.prompt(managerQues)
    .then((data) => {
        if (!data.confirm){
        data.employeeId = new Manager(data);
        console.log(data.employeeId.getRole())
        } else {
            return init()
        }
    });
}
init()