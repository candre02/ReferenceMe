// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const utils = require('utils');

const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
inquirer.prompt = ([
{
    type: 'input',
    message: 'What is the title of the project?',
    name: 'Title',
    // validate property to check that the user provided an input value
    validate: titleInput => {
        if (titleInput) {
            return true;
        } else {
            console.log('Please enter name of title here!');
            return false;
        }
    }
},
{
    type: 'input',
    message: 'What is the project about?',
    name: 'Description',
    validate: DescriptionInput => {
        if (DescriptionInput) {
            return true;
        } else {
            console.log('Please enter your description here!');
            return false;
        }
    }
},
{
    type: 'input',
    message: 'Table of Contents.',
    name: 'Table of Contents'
},
{
    type: 'input',
    message: 'What does the user need to install to rull this app?',
    name: 'Installation',
    validate: installationInput => {
        if (installationInput) {
            return true;
        } else {
            console.log('Please enter your description here!');
            return false;
        }
    }
},
{
    type: 'input',
    message: 'How is the project used?',
    name: 'Usage',
    validate: usageInput => {
        if (usageInput) {
            return true;
        } else {
            console.log('Please enter your description here!');
            return false;
        }
    }
},
{
    // list of licenses
    type: 'list',
    message: 'What license is being used? (ISC.. MIT)',
    name: 'License',
    choices: ['The MIT license, N/A'],
    validate: licenseInput => {
        if (licenseInput) {
            return true;
        } else {
            console.log('Please enter your description here!');
            return false;
        }
    }
},
{
    type: 'input',
    message: 'Are there any credits?',
    name: 'Credits',
    validate: creditInput => {
        if (creditInput) {
            return true;
        } else {
            console.log('Please enter your description here!');
            return false;
        }
    }
},
{
    type: 'input',
    message: 'What commands are needed to test this app?',
    name: 'Tests'
},
{
    type: 'input',
    message: 'Contact info for inquiries.',
    name: 'Contact'
},
{
    type: 'input',
    message: 'What is your Github username?',
    name: 'Username',
    validate: usernameInput => {
        if (usernameInput) {
            return true;
        } else {
            console.log('Please enter your username here!');
            return false;
        }
    }
},
{
    type: 'input',
    message: 'What is your email address?',
    name: 'Email',
    validate: emailInput => {
        if (emailInput) {
            return true;
        } else {
            console.log('Please enter your email here!');
            return false;
        }
    }
}
])

.then([{
    title,
    description,
    installation,
    usage,
    credits,
    license,
    username,
    email
}])
    // template to be used
    const template = `
    
    #Title 
    ${data.title}
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Credits](#credits)
    * [Tests](#tests)
    * [Contact](#contact)
    ## Desciption
    ${data.description}
    ## Installation
    ${data.installation}
    ## Usage
    ${data.usage}
    ## Credits
    ${data.Credits}
    ## License
    ${data.License}
    ## Tests
    ${data.Tests}
    
    # Contact
    * Github: ${data.Username}
    * E-mail: ${data.Email}`



// TODO: Create a function to write README file
createNewfile(title, template);



// creating createNewfile function
function createNewfile(fileName, data) {
    // fs
    fs.writeFile(fileName.toLowerCase().split(' ').join('').md, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Hooray!!');
        }
    })
};

// install packages








// TODO: Create a function to initialize app
// function init() {
//     // use inquirer to get the ans to our ques
//     // then call a function that will call the readme string template literal
//     // then writetofile 
// }

// // Function call to initialize app
// init();