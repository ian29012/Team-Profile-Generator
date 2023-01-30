const managerQues = [
    {
      type: 'input',
      message: "What is the team manager's name?",
      name: 'managerName',
    },
    {
        type: 'input',
        message: "What is the team manager's id?",
        name: 'managerId',
    },
    {
        type: 'input',
        message: "What is the team manager's email?",
        name: 'managerEmail',
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
        message: "What is the team manager's office number?",
        name: 'managerNumber',
    },
    {
        type: 'confirm',
        message: "Would you like to add more member?",
        name: 'confirm',
    }
]
module.exports = managerQues;