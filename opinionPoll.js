import inquirer from "inquirer";

inquirer.prompt([
  /* Pass your questions in here */
  {
    type: "input",
    name: "name",
    message: "What is your name?"
  },
  {
    type: "list",
    name: "language",
    message: "What's your favorite programming language?",
    choices: ["JavaScript", "Python", "Ruby", "Other"]
  },
  {
    type: "list",
    name: "editor",
    message: "Which editor do you prefer?",
    choices: ["VS Code", "Sublime Text", "Atom", "Other"]
  },
  {
    type: "input",
    name: "feature-wish",
    message: "What's one feature you wish your editor had?"
  }
])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log("\nThanks for answering!!!\n");
    console.log(answers);
  })