import { appState } from "../AppState.js"
import { Note } from "../Models/Note.js"
import { saveState } from "../Utils/Store.js";




class NotesService {

    addNote(noteData) {
        let addNote = new Note(noteData)
        appState.Notes.push(addNote)
        console.log(addNote);
        appState.emit('Notes')
        saveState('Notes', appState.Notes)
        appState.activeNote = addNote
    }


    setActive(noteId) {
        // console.log('active service');
        let foundNote = appState.Notes.find(a => a.id == noteId)
        if (foundNote) {
            console.log(foundNote);
            appState.activeNote = foundNote

        }
    }

    deleteNote(id) {
        let filtered = appState.Notes.filter(f => f.id != id)
        console.log(filtered);
        appState.Notes = filtered
        saveState('Notes', appState.Notes)

    }

    saveNote(noteData) {
        let activeNote = appState.activeNote
        activeNote.content = noteData
        activeNote.upDate = new Date
        appState.emit('activeNote')
        saveState('Notes', appState.Notes)

    }

    noteCount() {
        let count = 0
        for (let i = 0; i <= appState.Notes.length; i++) {
            count = [i]
            console.log(count, 'number of notes');
        }
        appState.total = count
    }



}


export const notesService = new NotesService()