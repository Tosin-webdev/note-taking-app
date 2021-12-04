// const fs = require("fs");
// require("./utils");

// fs.writeFileSync("notes.txt", "This File was created by node.js");
// fs.appendFileSync("notes.txt", " This File was appended by node.js");

// importing files

// const requireNotes = require("./notes");

// const notes = requireNotes();

// console.log(notes);

// validation

// const validator = require("validator");
// const email = validator.isEmail("googmail.com");
// console.log(email);

// Printing using chalk

// const chalk = require("chalk");
// import chalk from "chalk";
// console.log(chalk.green("success"));

// // getting input from user

// console.log(process.argv[2]);

// const command = process.argv[2];

// if (command == "add") {
//   console.log("Adding note");
// } else if (command === "remove") {
//   console.log("removing note");
// }

// argument parsing with yargs
// const chalk = require("chalk");
// import chalk from "chalk";
const { demandOption, string } = require("yargs");
const yargs = require("yargs");

console.log(process.argv);
// console.log(yargs.argv);

//customize yargs
yargs.version("1.1.0");

// create add command
yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Title: " + argv.title);
    console.log("Body: " + argv.body);
  },
});

// create remove command
yargs.command({
  command: "remove",
  describe: "remove a note",
  handler: function () {
    console.log("removing a new note!");
  },
});

// create list command
yargs.command({
  command: "list",
  describe: "List your notes",
  handler: function () {
    console.log("Listing out all notes!");
  },
});

// create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading a note!");
  },
});

console.log(yargs.argv);
