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
        name: 'description',
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
    {
        type: 'checkbox',
        name: 'license',
        message: 'What licensing are you using for your program?',
        choices: [
            {name: 'apache', short: '1', value: 'apache', checked: false },
            {name: 'gpl', short: '2', value: 'gpl', checked: false },
            {name: 'mpl', short: '3', value: 'mpl', checked: false },
            {name: 'expat', short: '4', value: 'expat', checked: false },
        ]
    }
]).then(response => {
    fs.writeFileSync('README.md', 
    `#<center>${response.title}</center>
    Description ${response.description}
    ${response.installation}
    ${response.usage}
    ${response.contribution}
    ${response.instructions}
    ${response.email}
    ${response.github}
    This is checkbox ${response.license}
    </html>`, (error) => error ? console.log(error) : console.log('README generator'));
});