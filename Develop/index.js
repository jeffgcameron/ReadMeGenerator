// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input

const questions = [
{
    type: 'input',
    name: 'project',
    message: 'What is the name of your project?',
},
{
    type: 'input',
    name: 'name',
    message: 'What is your name?',
},
{
    type: 'input',
    name: 'description',
    message: 'Describe your project.',
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
    type: 'list',
    name: 'license',
    message: 'Pick a License',
    choices: ["Apache", "GNU", "MIT", "BSD 2", "BSD 3", "Boost", "Creative Commons", "Eclipse", "Mozilla", "The Unlicense", "None"]
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
{
    type: 'input',
    name: 'github',
    message: 'What is you github Username?',
},
{
    type: 'input',
    name: 'email',
    message: 'What is your Email',
},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
return fs.writeFileSync(path.join(fileName), data)
};



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("NewReadMe.md", generateMarkdown(data))
    });
};

// Function call to initialize app
init();
