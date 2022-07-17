const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    // project title
    'What is the title of your project?',
    // description
    'What was your motivation for developing this project?',
    'Why did you build this project?',
    'What problem does this project solve?',
    'What did you learn?',
    // installation
    'What is the first step to installing this project?',
    'Would you like to add another step?',
    'What is the next step to installing this project?',
    // usage
    'What are the instructions and examples for use?',
    // contribution,
    'Would you like to generate your own contribution rights? Or follow the industry standard Contributor Covenant?',
    // tests
    'What is the first step to testing this project?',
    'Would you like to add another test?',
    'What is the next step to testing this project?',
    // questions
    'What is your GitHub username?',
    "What is your email?",
    'Provide brief instructions for contacting you via email.',
    // licensing
    'Which licensing will this project be using?'

];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('File successfully generated!');
    })
}

// TODO: Create a function to initialize app
function init() {}

init();
