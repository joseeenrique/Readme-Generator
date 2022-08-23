// TODO: Include packages needed for this application
const packages = require("packages");
const fs = require("fs");
const generateMarkdown = require ("./utils/generateMarkdown.js");
console.log("Welcome")
console.log("answer questions to continue")
const questions = [
    {
        type:"input",
        name:"title",
        message: "What is the title?",
        validate: user_input => {
            if (user_input){
                return true;
            } else{
                console.log("enter title");
                return false;

            }
        }
    },

{
    type: "input",
    name: "description",
    message: "what is your page about?",
    validate: user_description =>{
        if (user_description){
            return true;
        } else{
            console.log("enter description");
            return false;
        }
    }
},

{
    type:"input",
    name:"title",
    message: "What is the title?",
    validate: user_input => {
        if (user_input){
            return true;
        } else{
            console.log("enter title");
            return false;

        }
    }
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
