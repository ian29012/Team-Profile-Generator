const fs = require('fs');
const path = require("path");
const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern.js');

const roleQues = require('./lib/roleQues.js');
const managerQues = require('./lib/ManagerQues.js');
const engineerQues = require('./lib/EngineerQues');
const internQues = require('./lib/InternQues');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const employee = []

// function to initialize program
const ques = function(question, method)  {
    inquirer.prompt(question)
    .then((data) => {
        data.employeeId = new method(data);
        employee.push(data.employeeId);
        console.log(data.employeeId);
        console.log("-------------")

        if (data.confirm){
            role()
        } else {
            console.log(employee)
            fs.writeFile(outputPath,render(employee),(err) => 
            err ? console.log("err") : console.log("success"))
        }
    });
}

// switch different question for the role
function role(){
    inquirer.prompt(roleQues)
    .then((response) => {
        switch (response.employeeRole) {
            case 'Manager' :
            ques(managerQues, Manager);
            break;
            case 'Engineer' :
            ques(engineerQues, Engineer);
            break;
            case 'Intern' :
            ques(internQues, Intern);
            break;
            }
    })
}


// init()
ques(managerQues, Manager)