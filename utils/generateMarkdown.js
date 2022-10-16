// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } else if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
  } else if (license === 'GNU GPL v3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
  } else if (license === 'Apache v2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  } else if (license === 'MIT') {
    return 
  } else if (license === 'GNU GPL v3.0') {

  } else if (license === 'Apache v2.0') {

  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
    
  // elected not to fill this one into a function, as it is unecessary for the scope of what needs to be within a README file.
  // License used is mentioned in the License section below.

// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

${data.path}

Finally, the site can be found live at [${data.url}].

## License
This project uses ${data.license} licensing.

## Contributions
${data.contributions}

`;
}

module.exports = generateMarkdown;
