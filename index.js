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
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
