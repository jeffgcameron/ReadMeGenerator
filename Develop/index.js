// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input

const questions = () =>
inquirer.prompt([
{
    type: 'input',
    name: 'project',
    message: 'What is the name of your project?',
},
{
    type: 'input',
    name: 'description',
    message: 'Describe your project.',
},
{
    type: 'list',
    name: 'table',
    message: 'Do you want a Table of Contents?',
    choices: ["Yes", "No"]
    
},
{
    type: 'input',
    name: 'installation',
    message: 'List any installation requirements.',
},
{
    type: 'input',
    name: 'usage',
    message: 'Describe the projects usage.',
},
{
    type: 'input',
    name: 'license',
    message: 'Pick a License',
},
{
    type: 'input',
    name: 'contributing',
    message: 'List any contributors',
},
{
    type: 'input',
    name: 'tests',
    message: 'List any tests you performed.',
},

]);

questions();

// TODO: Create a function to write README file
const writeToFile = (data) =>

`# ${data.project}

## Description
    ${data.description}
    
## Table of Contents
    ${data.table}

## Installation
    ${data.installation}
    
## Usage
    ${data.usage}
    
## License
    ${data.license}
    
## Contributing
    ${data.contributing}
    
## Tests
    ${data.tests}`;

// TODO: Create a function to initialize app
function init() {
    questions().then((data) => {
        try {
            const readMe = writeToFile(data);
            fs.writeFileSync("NewREADME.md", readMe);
            console.log("Successfully wrote a Readme.md");
        } catch (error){
            console.log(error);
        }
        
    });
};

// Function call to initialize app
init();
