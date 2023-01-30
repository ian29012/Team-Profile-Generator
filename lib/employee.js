const fs = require('fs');
const inquirer = require('inquirer');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manger');

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
    }
  ]

  