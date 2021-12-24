const chalk = require('chalk');
const loadNotes = require('./loadNotes');
const saveNotes = require('./saveNotes');

const removeNote = (title) => {
  const notes = loadNotes();
  const filteredNotes = notes.filter((note) => note.title !== title);

  if (filteredNotes.length === 0) {
    console.log(chalk.red.bold('Title not found...'));
  } else {
    saveNotes(filteredNotes);
    console.log(chalk.green.bold('Note removed successfully!'));
  }
};

module.exports = removeNote;
