const fs = require("fs");

const book = {
  title: "E go be",
  author: "Tosin",
};

const bookJson = JSON.stringify(book);
console.log(bookJson);

const parseData = JSON.parse(bookJson);
console.log(parseData.author);
