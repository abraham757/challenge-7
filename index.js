import fs from 'fs';
import inquirer from 'inquirer';
import colors from 'colors';

const filename = 'README.md';
// TODO: Create an array of questions for user input
const questions = [
'What is the title of your project?', //0
'Please write a short description of your project?',  //1
'Please write installation instructions',  //2
'Please write usage information',   //3
'Please write contribution guidelines',  //4
'Please write test instructions',  //5
'What kind of license should your project have?',   //6
'What is your GitHub username?',  //7
'What is your email address?'];   //8

// Function to prompt user input
function promptUser() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: colors.brightBlue(questions[0]),
    },
    {
      type: 'input',
      name: 'description',
      message: colors.brightBlue(questions[1]),
    },
    {
      type: 'input',
      name: 'installation',
      message: colors.brightBlue(questions[2]),
    },
    {
      type: 'input',
      name: 'usage',
      message: colors.brightBlue(questions[3]),
    },
    {
      type: 'input',
      name: 'contributing',
      message: colors.brightBlue(questions[4]),
    },
    {
      type: 'input',
      name: 'tests',
      message: colors.brightBlue(questions[5]),
    },
    {
      type: 'list',
      name: 'license',
      message: colors.brightBlue(questions[6]),
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
    },
    {
      type: 'input',
      name: 'github',
      message: colors.brightBlue(questions[7]),
    },
    {
      type: 'input',
      name: 'email',
      message: colors.brightBlue(questions[8]),
    },
  ]);
}

// Function to generate the README content
function generateReadme(data) {
  return `
# ${data.title}

![License](https://img.shields.io/badge/License-${data.license.replace(' ', '%20')}-blue)

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, please contact me:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: [${data.email}](mailto:${data.email})
`;
}

// Main function
function init() {
  promptUser()
    .then((data) => {
      const readmeContent = generateReadme(data);
      fs.writeFile(filename, readmeContent, (err) =>
        err ? console.error(err) : console.log('Generating REAME...')
      );
    })
    .catch((err) => console.error(err));
}

// Start the app
init();
