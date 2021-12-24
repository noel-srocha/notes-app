const chalk = require('chalk');
const loadNotes = require('./loadNotes');

const listNotes = () => {
  const notes = loadNotes();

  notes.forEach((note) => {
    console.log(`${chalk.yellow.italic.bold('Your Notes:')}
    
    ${chalk.green.bold(note.title)}

    ${chalk.cyan(note.body)}
    `);
  });
};

module.exports = listNotes;
