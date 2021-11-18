// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return
   
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return 

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
`;
}

module.exports = generateMarkdown;
// `
// # Title
// ${data.Title}
// http://github.com/${data.Username}/${data.Title}
// # Description
// ${data.Description}
// # Table of Contents
// * [Installation](#installation)
// * [Usage](#usage)
// * [License](#license)
// * [Credits](#credits)
// * [Tests](#tests)
// * [Contact](#contact)
// # Installation
// The following necessary dependencies must be installed to run the application properly: 
// # Usage
// After initialing this app with node index.js, you will answer a series of prompts that will output a professional readme.md file based on that users input. ${data.Usage}
// # License
// This project is licensed under the ${data.License} License.
// ![Github license](http://img.shields.io/badge/license-MIT-green.svg)
// # Credits
// Creditors: ${data.Credits}
// # Tests
// The following is needed to run the test: ${data.Tests}
// # Contact
// If you have any questions about the Response, open an issue or contact ${data.Username} directly at: ${data.Email}
// `


module.exports = generateMarkdown;
