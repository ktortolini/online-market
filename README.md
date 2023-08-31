![edX](https://img.shields.io/badge/edX-%2302262B.svg?style=for-the-badge&logo=edX&logoColor=white)

[![GitHub](https://img.shields.io/github/license/ktortolini/online-market?style=flat-square)](#license)
![GitHub language count](https://img.shields.io/github/languages/count/ktortolini/online-market?style=flat-square)
![GitHub top language](https://img.shields.io/github/languages/top/ktortolini/online-market?color=green&style=flat-square)

# Employee Management System

## _Description_

This repository has a web application that uses
[Node.js](https://nodejs.org/en) along with the `express` and `sequelize` packages in order to provide an ecommerce back-end for the client. It has multiple valid JS (ES6) files and SQL files; the `server.js` file contains the `sync()` method from sequelize for running the application, and the `schema.sql` file contains the setup for the SQL database.

## _Table of Contents_

-  [Description](#description)
-  [Installation Instructions](#installation)
-  [Usage Information](#usage-information)
-  [Test Instructions](#testing)
-  [Contributions Guidelines](#contributing)
-  [Credits](#credits)
-  [Workflow Video](#workflow-video)
-  [License](#license)
-  [Questions](#questions)

## _Installation_

```bash
git clone https://github.com/ktortolini/online-market.git
cd online-market
npm install
```

The client should make sure to use `source` within their own MySQL server (after logging in with their credentials) to set up the initial database contained in `schema.sql`.

## _Usage Information_

After the client clones the repository, changes to the appropriate directory and
makes sure they have the appropriate dependencies, they may type the following
in the terminal:

```bash
npm start
```

or

```bash
npm run watch
```

The client will be presented with a notification that the port has been opened indicating that the application has started and is running.

![MainScreenshot]()

The back-end connections were a joy to make, but it was also very time intensive. Any client would be able to use this enjoyable back-end and exciting application for their e-commerce needs.

## _Testing_

There are no testing guidelines for this project.

## _Contributing_

There are no contribution guidelines for this project.

## _Credits_

First, the EDX readme file icon on the top was made by
[Ileriayo](https://github.com/Ileriayo) with a link provided below:
https://github.com/Ileriayo/markdown-badges#badges.

Lastly, parts of the `HTML`, `CSS`, and `JS` code were created with knowledge gained through EDX, as part of their comprehensive Full Stack Web Development online program. In addition, I made use of tutoring available through the same program, working with Andrew Hardemon to fix and double check the routes. To learn about the online program from EDX visit the link here: https://www.edx.org/learn/full-stack-development.

## _Workflow Video_

The workflow video is available on [YouTube](https://youtu.be/wi-FaM199IM).

## _License_

Persistent Notes is licensed under an MIT License.

## _Questions_

Contact the author [ktortolini](https://github.com/ktortolini) via email ✉ <a>ktortolini@smu.edu</a>.