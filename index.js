const fs = require('fs');
const path = require("path");
const inquirer = require('inquirer');

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

// create the array container for HTML render
let employee = [] ;

// function to initialize program as manager
function ques(question, method)  {
    inquirer.prompt(question)
    .then((data) => {

        // access the data of ( [0]name [1]id  [2]email [3]number / github / school )
        employee.push(new method(Object.values(data)[0], Object.values(data)[1], Object.values(data)[2], Object.values(data)[3]));

        // let the user review the data
        console.log(employee);
        console.log("-------------")

        // confirm the user continues to build the team.
        if (data.confirm){

        // if yes, call the role switcher
            role()
        } else {

        // if no, review all the data and generate it as a HTML
            console.log(employee)
            console.log("Team list will be generate")
            fs.writeFile(outputPath, render(employee),(err) => 
            err ? console.log("err") : console.log("Success to generate, please checkout the output file."))
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