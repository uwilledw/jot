import { generateId } from "../Utils/generateId.js"



export class Note {

    constructor(data) {
        this.name = data.name
        this.color = data.color
        this.date = data.date ? new Date(data.date) : new Date()
        this.upDate = data.upDate ? new Date(data.upDate) : new Date()
        this.id = generateId()
        this.content = data.content || 'no content'
    }



    get listTemplate() {
        return `
        <h4 class="point my-3 text-start" onclick="app.notesController.setActive('${this.id}')" style="color: ${this.color}">${this.name}</h4>
        <button onclick="app.notesController.deleteNote('${this.id}')" class="btn btn-danger">delete</button>`
    }



    get activeTemplate() {
        return `
        <div>
        <h3 style="color: ${this.color}">${this.name}</h3>
        <button onclick="app.notesController.saveNote()" class="btn btn-primary">save</button>
        <p>Created: ${this.ComputeDate} | Updated: ${this.CompDate}</p>
        <textarea name="notes" id="NContent" cols="100" rows="20">${this.content}</textarea>
        </div>`
    }

    // get upActiveTemplate() {
    //     return `
    //     <div>
    //     <h3 style="color: ${this.color}">${this.name}</h3>
    //     <button onclick="app.notesController.saveNote()" class="btn btn-primary">save</button>
    //     <p>Created: ${this.ComputeDate} Updated: ${this.CompDate}</p>
    //     <textarea name="notes" id="NContent" cols="100" rows="20">${this.content}</textarea>
    //     </div>`
    // }

    get ComputeDate() {
        let date = this.date
        return (date.getMonth() + 1) + '/' + (date.getDate()) + '/' + (date.getFullYear()) + ' seconds: ' + (date.getSeconds())
    }

    get CompDate() {
        let date = this.upDate
        return (date.getMonth() + 1) + '/' + (date.getDate()) + '/' + (date.getFullYear()) + ' seconds: ' + (date.getSeconds())
    }
}