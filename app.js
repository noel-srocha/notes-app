const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./utils/getNotes');

// The commands below are configurations of instructions for manipulating notes, using the command  line with assistance from yargs.

// Customize yargs version
yargs.version('1.0.2');

// Creates a new note
yargs.command({
  command: 'add',
  description: 'Adds note',
  handler: function () {
    console.log('Adding the new note!');
  }
});

// Removes a note
yargs.command({
  command: 'remove',
  description: 'Removes a note',
  handler: function () {
    console.log('Removing the note!');
  }
});

// Opens a note
yargs.command({
  command: 'open',
  description: 'Opens a note',
  handler: function () {
    console.log('Opening the note...');
  }
});

// Lists the notes the user saved
yargs.command({
  command: 'list',
  description: 'Lists notes you saved',
  handler: function () {
    console.log('Listing notes...');
  }
});

console.log(yargs.argv);