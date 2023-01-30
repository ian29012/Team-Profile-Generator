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

module.exports = internQues;