const employeeQues = [
    {
      type: 'input',
      message: "What is the your employee's name?",
      name: 'employeeName',
    },
    {
        type: 'input',
        message: "What is the your employee's id?",
        name: 'employeeId',
    },
    {
        type: 'input',
        message: "What is the your employee's email?",
        name: 'employeeEmail',
        validate: (value) => {
            let pass = value.match(
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
                if(pass){
                    return true;
                }
                return "Please enter a valid email address."
        }
    },
    {
        type: 'number',
        message: "What is the your employee's office number?",
        name: 'employeeNumber',
    },
    {
        type: 'list',
        choices: ['Engineer', 'Intern', 'Manager'],
        message: "What role are you?",
        name: 'employeeRole',
    },
    {
        type: 'input',
        message: "What is the your engineer's GitHub username?",
        name: 'engineerGitHub',
        when: (answers) => answers.employeeRole === 'Engineer',
    },
    {
        type: 'input',
        message: "What is the your intern's school?",
        name: 'internSchool',
        when: (answers) => answers.employeeRole === 'Intern',
    },
    {
        type: 'number',
        message: "What is the your manager's office number?",
        name: 'managerNumber',
        when: (answers) => answers.employeeRole === 'Manager',
    },
    {
        type: 'confirm',
        message: "Which type of team member would you like to add?",
        name: 'confirm',
    }

  ]

  module.exports = employeeQues;
  