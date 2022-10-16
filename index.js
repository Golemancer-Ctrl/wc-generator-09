// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const generateLicense = require('./utils/generateLicense');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },

    {
        type: 'input',
        name: 'description',
        message: 'How would you describe your project?  What challenges did you face?  What did you learn?'
    },

    {
        type: 'input',
        name: 'installation',
        message: 'How would one install your program?'
    },

    {
        type: 'input',
        name: 'usage',
        message: 'How is your project intended to be used?'
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
        choices: ['GNU GPL v3.0', 'MIT', 'Apache v2.0']
    },

    {
        type: 'input',
        name: 'contributions',
        message: 'Please add any contributors or citations here.'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err, 'Error occured, please try again.') : console.log('File generated!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("README.md", generateMarkdown(data));
        writeToFile("license.md", generateLicense(data));
    })

}

// Function call to initialize app
init();
