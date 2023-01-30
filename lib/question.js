const roleQues = [
    {
        type: 'list',
        choices: ['Engineer', 'Intern', 'Manager'],
        message: "Which role you like to add?",
        name: 'employeeRole',
    }
]

const engineerQues = [
    {
      type: 'input',
      message: "What is the your engineer's name?",
      name: 'engineerName',
    },
    {
        type: 'input',
        message: "What is the your engineer's id?",
        name: 'engineerId',
    },
    {
        type: 'input',
        message: "What is the your engineer's email?",
        name: 'engineerEmail',
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
        type: 'input',
        message: "What is the your engineer's GitHub username?",
        name: 'engineerGitHub',
    },
    {
        type: 'confirm',
        message: "Would you like to add more member?",
        name: 'confirm',
    }
]

const internQues = [
    {
      type: 'input',
      message: "What is the your intern's name?",
      name: 'internName',
    },
    {
        type: 'input',
        message: "What is the your intern's id?",
        name: 'internId',
    },
    {
        type: 'input',
        message: "What is the your intern's email?",
        name: 'internEmail',
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
        type: 'input',
        message: "What is the your intern's school?",
        name: 'internSchool',
    },
    {
        type: 'confirm',
        message: "Would you like to add more member?",
        name: 'confirm',
    }
]

  module.exports = 
  roleQues,
  engineerQues,
  internQues;
  