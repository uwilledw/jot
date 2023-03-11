import { appState } from "../AppState.js"
import { notesService } from "../Services/NotesService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML, setText } from "../Utils/Writer.js"





function _drawNote() {
    let template = ''
    console.log(appState.Notes);
    appState.Notes.forEach(n => template += n.listTemplate)
    setHTML('notes', template)
}

function _drawActive() {
    let activenote = appState.activeNote
    setHTML('AN', activenote.activeTemplate)
}

function _drawCount() {
    console.log('is it working', appState.total)
    setText('noteCount', appState.total)
}



// function _drawUpActive() {
//     let activenote = appState.activeNote
//     setHTML('AN', activenote.activeTemplate)
// }


export class NotesController {


    constructor() {
        _drawNote()
        this.noteCount()
        _drawCount()
        appState.on('Notes', _drawNote)
        appState.on('activeNote', _drawActive)
        appState.on('total', _drawCount)

    }

    addNote() {
        window.event.preventDefault()
        console.log('adding note');
        let form = event.target
        let addNote = getFormData(form)
        console.log(addNote);
        notesService.addNote(addNote)
        this.noteCount()
    }

    setActive(noteId) {
        console.log('setting active', noteId);
        notesService.setActive(noteId)
    }

    async deleteNote(id) {
        if (await Pop.confirm('Do you really want to delete this note?')) {

            console.log('delete note', id);
            notesService.deleteNote(id)
            this.noteCount()
        }
    }

    saveNote() {
        // console.log('saved note');
        let con = document.getElementById('NContent')
        console.log(con.value);
        notesService.saveNote(con.value)
    }

    noteCount() {
        notesService.noteCount(notes)
    }


}