const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (duplicateNote === undefined) {
        notes.push({
            title:  title,
            body:   body,
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}


const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const remainingNotes = notes.filter((note) => note.title !== title)
    if (notes.length === remainingNotes.length) {
        console.log(chalk.red.inverse("No note with that title."))
    } else {
        saveNotes(remainingNotes)
        console.log(chalk.green.inverse("Note removed!"))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes:'))
    notes.forEach((note) => console.log(note.title))
}

const readNote = (title) => {
    const notes = loadNotes()
    const noteToRead = notes.find((note) => title === note.title)
    if (noteToRead === undefined) {
        console.log(chalk.red.inverse("No note with that name."))
    } else {
        console.log(chalk.inverse(noteToRead.title))
        console.log(noteToRead.body)
    }
}

module.exports = {
    addNote:    addNote,
    removeNote: removeNote,
    listNotes:  listNotes,
    readNotes:  readNote,
}