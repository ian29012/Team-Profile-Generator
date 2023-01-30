const fs = require('fs');
const engineerQues = require('./engineer.js');
const internQues = require('./intern.js');
const managerQues = require('./manager.js');

const employeeQues = [
    {
      type: 'input',
      message: `What is the your employee's name?`,
      name: 'employeeName',
    },
    {
        type: 'input',
        message: `What is the your employee's id?`,
        name: 'employeeId',
    },
    {
        type: 'input',
        message: `What is the your employee's email?`,
        name: 'employeeEmail',
    },
    {
        type: 'input',
        message: `What is the your employee's office number?`,
        name: 'employeeNumber',
    },
    {
        type: 'list',
        choices: ['Engineer', 'Intern', 'Manager'],
        message: `What role are you?`,
        name: 'type',
    }
  ]

  module.exports = employeeQues;
  