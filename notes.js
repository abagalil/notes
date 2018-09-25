const fs = require("fs");

//returns notes as an array after fetching them from json file
var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync("notes-data.json");
    return JSON.parse(notesString);
  } catch (err) {
    return [];
  }
};

//updates the json file
var saveNotes = notes => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

//resets the untitled counter in case an untitled note is deleted
var untitledIndexResetter = notes => {
  var index = 1;
  var updatedNotes = [];
  if (notes.length !== 0) {
    notes.forEach(note => {
      if (note.title.toString().startsWith("untitled")) {
        note.title = `untitled${index}`;
        index++;
      }
      updatedNotes.push(note);
    });
    saveNotes(updatedNotes);
    return updatedNotes;
  }
};

//assigns an untitled indexed title to new a new note if it is created without a title
var untitledIndexer = notes => {
  var notes = fetchNotes();
  var untitledNotes = notes.filter(note =>
    note.title.toString().startsWith("untitled")
  );
  return `untitled${untitledNotes.length + 1}`;
};

//creates a note with default title as untitledX and default body as "", if none were specified
var addNote = (title = untitledIndexer(fetchNotes()), body = "") => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  var duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

//prints all note titles to the console
var getAll = () => {
  var notes = fetchNotes();
  if (notes.length !== 0) {
    notes.forEach(note => {
      console.log(note.title);
    });
    return true;
  }
};

//fetches a note from the notes array
var getNote = title => {
  var notes = fetchNotes();
  var note = notes.find(note => note.title === title);
  return note;
};

//deletes a node with a specific title
var removeNote = title => {
  var notes = fetchNotes();
  var updatedNotes = notes.filter(note => note.title !== title);
  var resetIndexNotes = untitledIndexResetter(updatedNotes);
  saveNotes(resetIndexNotes);
  if (notes.length !== updatedNotes.length) {
    return true;
  }
};

//prints note contents to the console
var printNote = note => {
  debugger;
  return `--\nTitle: ${note.title}\nBody: ${note.body}`;
};

//edits the title of a note
var renameNote = (title, newTitle) => {
  var notes = fetchNotes();
  var noteIndex = notes.findIndex(note => note.title === title);
  if (noteIndex != -1) {
    var duplicateNotes = notes.filter(note => note.title === newTitle);
    if (duplicateNotes.length === 0) {
      notes[noteIndex].title = newTitle;
      saveNotes(notes);
      return 1;
    }
    return 2;
  }
};

//edits the body of a note
var editNote = (title, newBody) => {
  var notes = fetchNotes();
  var noteIndex = notes.findIndex(note => note.title === title);
  if (noteIndex != -1) {
    var note = notes[noteIndex];
    note.body = newBody;
    saveNotes(notes);
    return note;
  }
};

module.exports = {
  addNote,
  getAll,
  getNote,
  printNote,
  removeNote,
  renameNote,
  editNote,
  printNote
};
