// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
inquirer.prompt([
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
        name: 'Table_of_Contents'
    },
    {
        type: 'input',
        message: 'What does the user need to install to run this app?',
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
        choices: ['MIT','GNU','IBM','ISC', "Apache", 'Mozilla', 'N/A'],
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
        name: 'Tests',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please enter your description here!');
                return false;
            }
        }
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

    .then(data => {
        let licenseBadge = '';
        if (data.License === 'MIT') {
            licenseBadge  = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        }
        if (data.License === 'GNU') {
            licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        }
        if (data.License === 'IBM') {
            licenseBadge  = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
        }
        if (data.License === 'ISC') {
            licenseBadge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
        }
        if (data.License === 'Apache') {
            licenseBadge  = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        }
        if (data.License === 'Mozilla') {
            licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
        }
        
        // template to be used
        const template = `

#Title 
${data.Title}
## License
${licenseBadge}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Credits](#credits)
* [Tests](#tests)
* [Contact](#contact)
## Desciption
${data.Description}
## Installation
${data.Installation}
## Usage
${data.Usage}
## Credits
${data.Credits}
## Tests
${data.Tests}

# Contact
* Github: ${data.Username}
* E-mail: ${data.Email}`

        createNewfile('README.md', template)

    })



// creating createNewfile function
function createNewfile(fileName, data) {
    // fs
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Hooray!!');
        }
    })
};

