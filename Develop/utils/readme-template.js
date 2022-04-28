const readmeTemplate = function (answers) {
  return `
          
# ${answers.projectTitle}

## ${answers.descriptionTitle}
${answers.description}

## Table of contents
- [Packages](#Packages-required-to-install-this-app)
- [How to Install](#Install-process)
- [How to](#How-this-app-should-be-used)
- [License Information](#This-app-falls-under-these-license-agreements)
- [Contributors](#Additional-contributors-to-this-app)

## Packages required to install this app
${answers.packages}

## Install process
${answers.installProcess}

## How this app should be used
${answers.useCase}

## This app falls under these license agreements
${answers.license}

## Additional contributors to this app
${answers.contributorName}
                
          `;
};

// readmeTemplate(answers);

module.exports = readmeTemplate
