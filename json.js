const fs = require("fs");

// const book = {
//   title: "E go be",
//   author: "Tosin",
// };

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.name);

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data.name);

const user = "Tosin";
const age = 54;

const userJson = Json.stringify(user);
fs.writeFileSync("1-json.json", userJson);
// const parseData = JSON.parse(bookJson);
// console.log(parseData.author);
