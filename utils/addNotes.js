const chalk = require('chalk');
const loadNotes = require('./loadNotes');
const saveNotes = require('./saveNotes');

const getNotes = () => 'Your notes...';

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (duplicateNote) {
    console.log(chalk.red.bold('This note already exists!'));
  } else {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log(chalk.green.bold('Note added!'));
  }
};

module.exports = { getNotes, addNote };
