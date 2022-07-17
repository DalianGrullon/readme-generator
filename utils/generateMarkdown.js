function renderLicenseBadge(license) {
  if (license) {
    return `![](https://img.shields.io/badge/license-${license}-blue)`;
  } else {
    return '';
  }
}

function renderLicenseLink(license) {
  if (license === 'apache') {
    return `https://choosealicense.com/licenses/${license}-2.0/`;
  } else if (license === 'gpl') {
      return `https://choosealicense.com/licenses/${license}-3.0/`;
  } else {
      return '';
  }
}

function renderLicenseSection(license, year, name) {
  let licenseInfo;
  let licenseSection;

  if (license) {
    switch (license) {
      case 'apache':
        licenseInfo = `Copyright ${year} ${name}

        Licensed under the Apache License, Version 2.0 (the "License");
        you may not use this file except in compliance with the License.
        You may obtain a copy of the License at
     
            ${renderLicenseLink(license)}
     
        Unless required by applicable law or agreed to in writing, software
        distributed under the License is distributed on an "AS IS" BASIS,
        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        See the License for the specific language governing permissions and
        limitations under the License.`;
        break;
      case 'isc':
        licenseInfo = `ISC License ${renderLicenseLink(license)}

        Copyright (c) ${year} ${name}
        
        Permission to use, copy, modify, and/or distribute this software for any
        purpose with or without fee is hereby granted, provided that the above
        copyright notice and this permission notice appear in all copies.
        
        THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
        REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
        AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
        INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
        LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
        OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
        PERFORMANCE OF THIS SOFTWARE.`;
        break;
      case 'mit':
        licenseInfo = `MIT License ${renderLicenseLink(license)}

        Copyright (c) ${year} ${name}
        
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in all
        copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
        SOFTWARE.`;
        break;
      case 'gpl':
        licenseInfo = `Copyright (C) ${year} ${name}

        This program is free software: you can redistribute it and/or modify
        it under the terms of the GNU General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        This program is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU General Public License for more details.
    
        You should have received a copy of the GNU General Public License
        along with this program.  If not, see <https://www.gnu.org/licenses/>.`;
        break;
      default:
        break;
    }
    licenseSection = `## License
    
    ${licenseInfo}`;

    return licenseSection
  } else {
    return '';
  }
}

function renderContributionBadge(choice) {
  if (choice === 'Use Contributor Covenant') {
    return `[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)`;
  } else {
    return '';
  }
}

function generateContribution(own) {
  if (own) {
    return own;
  } else {
    return `The [Contributor Covenant](https://www.contributor-covenant.org/) lays the foundation for contribution standards and the must be followed.`;
  }
}

function generateMarkdown(data) {
  let currentYear = new Date().getFullYear();
  
  return `# ${data.title}
${renderLicenseBadge(data.license)} ${renderContributionBadge(data.contribution)}

## Description

- My motivation for this project:
  - ${data.motivation}
- Why I built this project:
  - ${data.reason}
- This project solves the following problem(s):
  - ${data.solves}
- In completing this project, I learned the following:
  - ${data.learn}

<br>

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

<br>

## Installation

${data.installation}

<br>

## Usage

${data.usage}

<br>

## How to Contribute

${generateContribution(data.ownContribution)}

<br>

## Tests

${data.test}

<br>

## Questions

You can contact me through [My GitHub](https://github.com/${data.github}) or my [My Email](mailto:${data.email}?)
<br>
<br>
When sending me an email ${data.emailUse}

<br>

${renderLicenseSection(data.license, currentYear, data.fullName)}`;
}

module.exports = generateMarkdown;
