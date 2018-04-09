console.log('Starting notes.js');
fs = require('fs');
var addNote = (title, body) => {
  var notes = [];
  var note = {
    title: title,
    body: body
  };
  try {
    notesString = fs.readFileSync("notes-data.json");
    notes = JSON.parse(notesString);
  } catch(e){

  }

  duplicateNotes = notes.filter((note) => note.title === title );
  if(duplicateNotes.length === 0){
    notes.push(note);
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
  }
  console.log('Adding note', title, body);
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Getting note', title);
};

var removeNote = (title) => {
  console.log('Removing note', title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
};
