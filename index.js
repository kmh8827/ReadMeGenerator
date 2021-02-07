const fs = require('fs');
const inquirer = require('inquirer');
const { fileURLToPath } = require('url');

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
`# ${response.title}  
&nbsp;  
&nbsp;  
&nbsp;  
### Description  
&nbsp;  
${response.description}  
&nbsp;  
&nbsp;  
## Table of Contents  
&nbsp;  
[Description](#description)  
[Installation](#installation)  
[Usage](#usage)  
[Contribution](#contributing)  
[Test Instructions](#test-instructions)  
[Questions](#questions)  
[Licensing](#licensing)  
&nbsp;  
&nbsp;  
### Installation  
&nbsp;  
${response.installation}  
&nbsp;  
### Usage  
&nbsp;  
${response.usage}  
&nbsp;  
### Contributing  
&nbsp;  
${response.contribution}  
&nbsp;  
### Test Instructions  
&nbsp;  
${response.instructions}  
&nbsp;  
&nbsp;  
&nbsp;  
## Questions  
&nbsp;  
### Email Address  
&nbsp;  
For further questions contact me at: ${response.email}  
&nbsp;  
### Github Address  
&nbsp;  
github.com/${response.github}  
&nbsp;  
&nbsp;  
&nbsp;  
### Licensing  
&nbsp;  
    \n`, (error) => error ? console.log(error) : console.log('README generator'));

for (const element of response.license) {
    fs.appendFileSync('README.md',`* ${element}\r\n`, (error) => error ? console.log(error) : console.log('Checkbox'));
}

});



