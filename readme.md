<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://cdn.shopify.com/s/files/1/1832/0821/files/catshark.jpg?v=1649869148" alt="Cat image"></a>
</p>

<h3 align="center">PLACEKITTEN TEST</h3>

<div align="center">

  [![Status](https://img.shields.io/badge/status-active-success?style=flat-square)]() 
  [![cypress-basico-v2](https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/detailed/dx76ge&style=flat-square&logo=cypress&color=success)](https://cloud.cypress.io/projects/dx76ge/runs)
  [![GitHub Issues](https://img.shields.io/github/issues/rafaelnagao/Placekitten?color=FF0000&style=flat-square)](https://github.com/rafaelnagao/Placekitten/issues)

</div>

---

<p align="center"> This is an E2E testing for the website Placekitten. It's a simple website with cute cat images. MEOW! 🐱
    <br> 
</p>

## 📝 Table of Contents
- [About](#about)
- [Getting Started](#getting_started)
- [Built Using](#built_using)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>
This test was created to practice the concepts and ways of creating automated tests in Cypress. I'm new to automated testing, so I'm still learning.

I created this test to validate the website Placekitten.com, which is a fake website for tests, with images, texts and links to be validated. And who doesn't like cute cats? 

## 🏁 Getting Started <a name = "getting_started"></a>
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### ⛏️ Prerequisites
This test was built using:


- Visual Studio Code v1.77.3 [![VSCode](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)](https://code.visualstudio.com/download)
- Node.JS v18.15.0 [![Node.JS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/download)
- Git v2.40.0.windows.1 [![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/downloads)
- Cypress v12.10.0 [![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)](https://docs.cypress.io/guides/getting-started/installing-cypress)


### Installing
After installing all the applications described above, make a local clone of the project and branch to your repository, so that all changes will be saved correctly.

Access the directory where the repository will be cloned and type:

```
$ git init
```

This creates a new subdirectory named .git that contains all of your necessary repository files — a Git repository skeleton.

You clone a repository with git clone <url>. For example, if you want to clone the Git linkable library called libgit2, you can do so like this:

```
$ git clone https://github.com/rafaelnagao/Placekitten.git
```

or by SSH (if you already have a key configured)

```
$ git clone git@github.com:rafaelnagao/Placekitten.git
```

Open your cloned local directory and enjoy!

## 🔧 Running the tests <a name = "tests"></a>
The tests are in the directory "~/Placekitten/cypress/e2e/placekitten.cy.js"

You can go to the terminal and open Cypress or run it through the terminal itself.

```
npx cypress open
```
or
```
npx cypress run
```

### Break down into end to end tests
The tests will certify that all elements are present within the Placekitten page.

However, there are two steps that I skipped, as the page contains an API error, in which it loads the page, but Cypress cannot load it, as it does not receive the response that it has been loaded.

## ✍️ Authors <a name = "authors"></a>
- [@rafaelnagao](https://github.com/rafaelnagao) - QA Analyst

## 🎉 Acknowledgements <a name = "acknowledgement"></a>
- Thank you very much for reviewing this project!
- Visit my [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rafael-nagao-%F0%9F%8F%B3%EF%B8%8F%E2%80%8D%F0%9F%8C%88-22846019b)