// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license != "none") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != "") {
    return `* [License](#license)`;
  } return "";
}

function installation(installation) {
  if (installation != "") {
    return `* [Installation](#installation)`;
  }
}

function usage(usage) {
  if (usage != "") {
    return `* [Usage](#usage)`;
  }
}

function cont(contribution) {
  if (contribution != "") {
    return `* [Contribution](#contribution)`;
  }
}

function test(test) {
  if (test != "") {
    return `* [Test](#test)`;
  }
}

function git(github) {
  if (github != "") {
    return `* [Github](#github)`;
  }
}

function quest(questions) {
  if (questions != "") {
    return `* [Questions](#questions)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != "none") {
    return `## License
    This application is covered under the ${license} license
    `;
  } return "";
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project} ${renderLicenseBadge(data.license)}
    By ${data.name}

## Description
    ${data.description}
    
## Table of Contents
    ${installation(data.installation)}
    ${usage(data.usage)}
    ${renderLicenseLink(data.license)}
    ${cont(data.contribution)}
    ${test(data.test)}
    ${git(data.github)}
    ${quest(data.questions)}

## Installation
    ${data.installation}
    
## Usage
    ${data.usage}

${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}

## Contributing
    ${data.contributing}
    
## Tests
    ${data.tests}
    
### Github
  Visit my Github Profile at https://github.com/${data.github}

### Questions 
  Email me at ${data.email}
`;
}

module.exports = generateMarkdown;
