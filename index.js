const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    // project title
        {
            name: 'title',
            type: 'input',
            message: 'What is the title of your project?'
        },
    // description
        {
            name: 'motivation',
            type: 'input',
            message: 'What was your motivation for developing this project?'
        },
        {
            name: 'reason',
            type: 'input',
            message: 'Why did you build this project?'
        },
        {
            name: 'solves',
            type: 'input',
            message: 'What problem(s) does this project solve?'
        },
        {
            name: 'learn',
            type: 'input',
            message: 'What did you learn?'
        },
    // installation
        {
            name: 'installation',
            type: 'input',
            message: 'What are the steps for installation?',
        },
    // usage
        {
            name: 'usage',
            type: 'input',
            message: 'What are the instructions for use of this project?',
        },
    // contribution
        {
            name: 'contribution',
            type: 'list',
            message: 'Choose one of the options below to determine contribution rights',
            choices: ['Generate your own', 'Use Contributor Covenant']
        },
        {
            name: 'ownContribution',
            type: 'input',
            message: 'Since you chose to generate your own contribution rights. Please specify them.',
            when(answers) {
                return answers.contribution === 'Generate your own';
            }
        },
    // tests
        {
            name: 'test',
            type: 'input',
            message: 'How can this project be tested?'
        },
    // questions
        {
            name: 'github',
            type: 'input',
            message: 'What is your GitHub username?'
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is your email?'
        },
        {
            name: 'emailUse',
            type: 'input',
            message: 'When contacted via email, how should users structure their emails for additional questions?'
        },
    // licensing
        {
            name: 'fullName',
            type: 'input',
            message: 'For licensing purposes, what is your First and Last name?'
        },
        {
            name: 'license',
            type: 'list',
            choices: ['apache', 'isc', 'mit', 'gpl'],
            message: 'Which licensing will this project be using?'
        },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('File successfully generated!');
    })
}

function init() {
    inquirer
        .prompt(questions)
        .then(responses => writeToFile('README.md', generateMarkdown(responses)))
}

init();
