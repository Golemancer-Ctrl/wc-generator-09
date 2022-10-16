// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },

    {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation?'
    },

    {
        type: 'input',
        name: 'problem',
        message: 'What problem does it solve?'
    },

    {
        type: 'input',
        name: 'challenge',
        message: 'Describe the challenges you faced.'
    },

    {
        type: 'input',
        name: 'future',
        message: 'Add some possibilities for future development.'
    },

    {
        type: 'input',
        name: 'path',
        message: 'Provide a relative path to a screenshot or demo.'
    },

    {
        type: 'input',
        name: 'url',
        message: 'Provide a url to the deployed site, otherwise N/A.'
    },

    {
        type: 'input',
        name: 'license',
        message: 'Please select desired license type.',
        choices: ['MOZ PL v2.0', 'GNU GPL v3.0', 'MIT']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err, 'Error occured, please try again.') : console.log('README generated!')
)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("README.md", generateMarkdown(data));
    })

}

// Function call to initialize app
init();
