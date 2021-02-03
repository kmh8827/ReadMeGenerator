const fs = require('fs');
const inquirer = require('inquirer');

//Inputs: title, description, installation, usage, contribution, test instructions, github username, e-mail
//Checkbox: license
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your program?'
    },
    {
        type: 'input',
        name: 'descript',
        message: 'Please enter a brief descript of your program?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Any instructions for using your program?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What should people do if they want to contribute?'
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Instructions for users?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the E-Mail address to contact you at?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    },
]).then()