// const validator = require('validator')
// const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs version

// yargs.version('1.1.0')

// Create ADD command
yargs.command({
    command:    'add',
    describe:   'Add a new note',
    builder:    {
        title:  {
            describe:       'Note title',
            demandOption:   true,
            type:           'string',
        },
        body:   {
            describe:       'Note body',
            demandOption:   true,
            type:           'string',
        },
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    },
})

// Create REMOVE command
yargs.command({
    command:    'remove',
    describe:   'Remove a note',
    builder:    {
        title:  {
            describe:       'Note title',
            demandOption:   true,
            type:           'string',
        },
    },
    handler(argv) {
        notes.removeNote(argv.title)
    },
})

yargs.command({
    command:    'list',
    describe:   'List recorded notes.',
    handler() {
        notes.listNotes()
    },
})

yargs.command({
    command:    'read',
    describe:   'Read a note.',
    builder:    {
        title:  {
            describe:       'Note title',
            demandOption:   true,
            type:           'string',
        },
    },
    handler(argv) {
        notes.readNotes(argv.title)
    },
})

//add, remove, read, list



// const getNotes = require('./notes.js')

// console.log(getNotes())

// console.log(chalk.bold.green.inverse('Success!'))

// console.log(process.argv)

// console.log(validator.isEmail('peter@mail.com'))
// console.log(validator.isURL('mead.io'))

// const command = process.argv[2]

// if (command === "add") {
//     console.log('Adding note!')
// } else if (command === "remove") {
//     console.log('Removing note!')
// }

// console.log(process.argv)
// console.log(yargs.argv)

yargs.parse()