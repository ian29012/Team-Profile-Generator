const fs = require('fs');
const inquirer = require("inquirer");
const employeeQues = require('./lib/employee.js');


function init() {
    inquirer.prompt(employeeQues)
    .then((response) => {})
}
init()