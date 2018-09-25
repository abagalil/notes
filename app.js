const yargs = require("yargs");

const notes = require("./notes.js");

const argv = yargs.argv;

var command = argv._[0];
var title = argv.title;
var body = argv.body;
var newtitle = argv.newtitle;
var newbody = argv.newbody;

console.log("Command: ", command);
console.log("Yargs: ", argv);

switch (command) {
  case "add":
    var note = notes.addNote(title, body);
    if (note) {
      console.log("Note created");
      console.log(notes.printNote(note));
    } else {
      console.log("Title already taken");
    }
    break;
  case "list":
    var fetchedList = notes.getAll();
    if (fetchedList.length !== 0) {
      console.log(`Listing ${fetchedList.length} Notes:\n--`);
      fetchedList.forEach(note => {
        console.log(`Title: ${note.title}\nBody: ${note.body}\n--`);
      });
    } else {
      console.log("There are no notes to list");
    }
    break;
  case "read":
    var note = notes.getNote(title);
    if (note) {
      console.log("Note found");
      console.log(notes.printNote(note));
    } else {
      console.log("Note not found");
    }
    break;
  case "remove":
    var noteRemoved = notes.removeNote(title);
    var message = noteRemoved ? "Note removed" : "Note not found";
    console.log(message);
    break;
  case "rename":
    var renamedNote = notes.renameNote(title, newtitle);
    switch (renamedNote) {
      case 1:
        console.log("Note renamed");
        break;
      case 2:
        console.log("Title already taken");
        break;
      default:
        console.log("Note not found");
    }
    break;
  case "edit":
    var editedNote = notes.editNote(title, newbody);
    if (editedNote) {
      console.log("Note body edited");
      console.log(notes.printNote(editedNote));
    } else {
      console.log("Note not found");
    }
    break;
  default:
    console.log("Command not recognized");
}
