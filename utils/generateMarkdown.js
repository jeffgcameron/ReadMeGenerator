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
    return `\n* [License](#license)\n`;
  } return "";
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

// function renderInstallationLink(installation) {
//   if (installation != "none") {
//     `\n* [Installation](#insallation)\n`;
//   }
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project} ${renderLicenseBadge(data.license)}
    By ${data.name}

## Description
    ${data.description}
    
## Table of Contents
  ${renderLicenseLink(data.installation)}
    [Usage](#usage) 
    ${renderLicenseLink(data.license)}
    [Contributing](#contributing)
    [Tests](#tests)
    [Github Profile](#github)
    [Questions](#questions)

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
