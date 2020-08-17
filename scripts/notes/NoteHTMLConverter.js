import { deleteNote } from "./NoteDataProvider.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", event => {
  if (event.target.id. startsWith("deleteNote--")) {
    const [a, id] = event.target.id.split("--")
    
    deleteNote(id)
  }
})


export const NoteHTMLConverter = (noteObject, criminalObject) => {
  return `
    <section class="note">
      <div class="note--title">Title: ${  noteObject.title  }</div>
      <div class="note--criminal">Criminal: ${  criminalObject.name  }</div>
      <div class="note--content">${  noteObject.content  }</div>
      <div class="note--author">Author: ${  noteObject.author  }</div>
      <div class="note--timestamp">Timestamp: ${  new Date(noteObject.timestamp).toLocaleDateString('en-us')  }</div>
      <button id="deleteNote--${noteObject.id}">Delete</button>
    </section>
  `
}