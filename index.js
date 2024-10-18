import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

const questions = [
  {
    type: "input",
    message: "What is your project name?",
    name: "projectName"
  },
  {
    type: "input",
    message: "What is the description for your project?",
    name: "description"
  },
  {
    type: "input",
    message: "What is your install process?",
    name: "process"
  },
  {
    type: "list",
    message: "What kind of license are you using?",
    name: 'license',
    choices: ['MIT', 'Apache 2.0', 'Mozilla']
  },
  {
    type: "input",
    message: "How do people contribute?",
    name: "contribute"
  }
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README file has been generated');
    }
  });
}

async function init() {
  const startUp = await inquirer.prompt({
    type: 'list',
    message: 'Please select an option',
    name: 'mainMenu',
    choices: ['Create README', 'Exit']
  });

  switch (startUp.mainMenu) {
    case 'Create README':
      const answers = await inquirer.prompt(questions);
      const markdown = generateMarkdown(answers);
      writeToFile('README.md', markdown);
      break;
    default:
      console.log('Goodbye!');
      break;
  }
}

init();
