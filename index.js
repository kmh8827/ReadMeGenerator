// Things that you need to be included
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
        message: 'Instructions for users to test program?'
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
        type: 'list',
        name: 'license',
        message: 'What licensing are you using for your program?',
        choices: [
            {name: 'Apache', short: '1', value: 'assets/apache.png' },
            {name: 'GPL', short: '2', value: 'assets/gpl.png'  },
            {name: 'Mozilla', short: '3', value: 'assets/mozilla.png' },
            {name: 'BSD', short: '4', value: 'assets/bsd.png' },
            {name: 'None', short: 5, value: ' '}
        ]
    }
]).then(response => {
    // Creates a readme with the entered information
    fs.writeFileSync('README.md', 
`# ${response.title} <img align="right" src="${response.license}">
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
${response.license}
    \n`, (error) => error ? console.log(error) : console.log('README generator'));
});



