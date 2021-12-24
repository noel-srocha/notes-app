const chalk = require('chalk');
const loadNotes = require('./loadNotes');

const openNote = (title) => {
  const notes = loadNotes();
  const filteredNote = notes.find((note) => note.title === title);

  if (filteredNote) {
    console.log(`${chalk.green.bold(filteredNote.title)}
    
    ${filteredNote.body}`);
  }
};

module.exports = openNote;
