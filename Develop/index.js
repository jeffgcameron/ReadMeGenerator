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

]);

questions();

// TODO: Create a function to write README file
const writeToFile = (data) =>

`# ${data.project}
    By ${data.name}

## Description
    ${data.description}
    
## Table of Contents
    [Intallation] (#installation)
    [Usage] (#usage) 
    [License] (#license)
    [Contributing] (#contributing)
    [Tests] (#tests)
    [Github Profile] (#github)
    [Questions] (#questions)

## Installation
    ${data.installation}
    
## Usage
    ${data.usage}
    
## License
    ${data.license}
    
## Contributing
    ${data.contributing}
    
## Tests
    ${data.tests}
    
### Github
https://github.com/${data.github}

### Questions 
Email me at ${data.email}`;



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
