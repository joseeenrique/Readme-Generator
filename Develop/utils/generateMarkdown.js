// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = license.license; 
  let yourLicense = ''
  if(licenseType === 'MIT') {
    yourLicense = `![License: MIT](https://img.shields.io/badge/license-MIT-blue)`
  } else if (licenseType === 'GPLv3') {
    yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (licenseType === 'GPL') {
    yourLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
  } else {
    license.license = "N/A"
  }
  return yourLicense;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseType = license.license; 
  let yourLicense = ''
  if(licenseType === 'MIT') {
    // need to add license links Description inside parenthesis
    yourLicense = `![License: MIT]()`
  } else if (licenseType === 'GPLv3') {
    yourLicense = `![GPLv3 license]()`
  } else if (licenseType === 'GPL') {
    yourLicense = `![GPL license]()`
  } else {
    license.license = "N/A"
  }
  return yourLicense;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseType = license.license; 
  let yourLicense = ''
  if(licenseType === 'MIT') {
    // need to add license section Descriptionide parenthesis
    yourLicense = `![License: MIT]()`
  } else if (licenseType === 'GPLv3') {
    yourLicense = `![GPLv3 license]()`
  } else if (licenseType === 'GPL') {
    yourLicense = `![GPL license]()`
  } else {
    license.license = "N/A"
  }
  return yourLicense;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## License :
[![license](https://img.shields.io/badge/license-MIT-blue)](https://img.shields.io/badge/License-GPLv3-blue.svg)(https://img.shields.io/badge/License-GPL-blue.svg)

## Table of Contents
[Title](#title)
[Description](#description)
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contribution](#contribution)

## Title:
${data.title}
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## License
${data.license}
## Contribution
${data.contribution}
`;
}

module.exports = generateMarkdown;
