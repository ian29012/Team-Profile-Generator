const fs = require('fs');
const inquirer = require('inquirer');
const generator = require('./lib/generator.js')
const employeeQues = require('./lib/employee.js');

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generator(data), (err) =>
    err ? console.error(err) : console.log('Success! employee was generated!'));
  }

// // function to initialize program
function init() {
    inquirer.prompt(employeeQues)
    .then((response) => {
        writeToFile("./Employee_Generate.md" ,response)
    });
}
init()