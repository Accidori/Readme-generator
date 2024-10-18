
function renderLicenseBadge(license) {
  if (license) {
    switch (license) {
      case "MIT":
        return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      case "Apache":
        return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
      case "Mozilla":
        return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)';
      default:
        return '';
    }
  } else {
    return '';
  }
}

function renderLicenseLink(license) {
  if (license) {
    switch (license) {
      case "MIT":
        return 'https://opensource.org/licenses/MIT';
      case "Apache":
        return 'https://opensource.org/licenses/Apache-2.0';
      case "Mozilla":
        return 'https://opensource.org/licenses/MPL-2.0';
      default:
        return '';
    }
  } else {
    return '';
  }
}

function renderLicenseSection(license) {
  if (license) {
    return `
## License

This project is licensed under the ${license} License. For more information, please visit ${renderLicenseLink(license)}.
    `;
  } else {
    return '';
  }
}

function generateMarkdown(data) {
  return `
# ${data.projectName}

## Description

${data.description}

## Installation

${data.process}

${renderLicenseSection(data.license)}

${renderLicenseBadge(data.license)}

## How to Contribute

${data.contribute}
  `;
}

export default generateMarkdown;
