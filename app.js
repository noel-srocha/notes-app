// const chalk = require('chalk');
const yargs = require('yargs');
const { addNote } = require('./utils/addNotes');
const removeNote = require('./utils/removeNotes');
const listNotes = require('./utils/listNotes');
const openNote = require('./utils/openNote');

// The commands below are configurations of instructions for manipulating
// notes, using the command  line with assistance from yargs.

// Customize yargs version
yargs.version('1.1.0');

// Creates a new note
yargs.command({
  command: 'add',
  description: 'Adds a note',
  builder: {
    title: {
      description: 'Note title',
      alias: 't',
      demandOption: true,
      type: 'string',
    },
    body: {
      description: 'Note body',
      alias: 'b',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    addNote(argv.title, argv.body);
  },
});

// Removes a note
yargs.command({
  command: 'remove',
  description: 'Removes a note',
  builder: {
    title: {
      description: 'Note title',
      alias: 't',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    removeNote(argv.title);
  },
});

// Opens a note
yargs.command({
  command: 'open',
  description: 'Opens a note',
  handler(argv) {
    openNote(argv.title);
  },
});

// Lists the notes the user saved
yargs.command({
  command: 'list',
  description: 'Lists notes you saved',
  handler() {
    listNotes();
  },
});

console.log(yargs.argv);
