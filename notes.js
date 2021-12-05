const fs = require("fs");
const getNotes = () => {
  return "your notes";
};

const addNote = function (title, body) {
  const notes = loadRoutes();
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({ title, body });
    saveNotes(notes);
    console.log("New notes added!");
  } else {
    console.log("Note title taken");
  }
};

const saveNotes = function (notes) {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJson);
};

const loadRoutes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (error) {
    return [];
  }
};

module.exports = { getNotes: getNotes, addNote: addNote };
