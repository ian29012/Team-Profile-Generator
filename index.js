const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/generator.js')
const employeeQues = require('./lib/question.js');

// function to write README file
// function writeToFile(fileName, data) {
//     data.employeeId = new Employee();
//         fs.writeFile(fileName, data.employeeId.console(data), (err) =>
//         err ? console.error(err) : console.log('Success! employee was generated!'));
//   }

// // function to initialize program
function init() {
    inquirer.prompt(employeeQues)
    .then((data) => {
        if (!data.confirm){
        data.employeeId = new Employee(data);
        data.employeeId.console();
        } else {
            return init()
        }
    });
}
init()