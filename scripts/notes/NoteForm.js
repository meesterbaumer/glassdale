import { saveNote } from "./NoteDataProvider.js"
import { useCriminals, getCriminals } from "../criminals/criminalDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "saveNote") {

    const noteTitle = document.querySelector("#note--title")
    const noteAuthor = document.querySelector("#note--author")
    const noteContent = document.querySelector("#note--content")
    
    // Make a new object representation of a note

    const newNote = {
      title: noteTitle.value,
      author: noteAuthor.value,
      content: noteContent.value,
      timestamp: Date.now()
    }

    // Change API state and application state

    saveNote(newNote)

  }
})

export const NoteForm = () => {
  getCriminals().then(() => {
    const criminals = useCriminals()
    render(criminals)
  })
}

const render = criminalCollection => {
  contentTarget.innerHTML = `
    <div class="noteFormContainer">
      <h3>Enter a note below</h3>
      <input type="text" class="fields" id="note--title" placeholder="Enter note title" />
      <input type="text" class="fields" id="note--author" placeholder="Your name here" />
      <textarea class="fields" id="note--content" placeholder="Note text here" /></textarea>
      <select id="noteForm--criminal" class="criminalSelect">
        <option value="0">Please select a suspected criminal</option>
        ${
          criminalCollection.map(
            criminal => {
            return `<option value="criminal--${criminal.id}">${criminal.name}</option>`
          }    
        ).join("")

        }
      </select>
      <button class="fields" id="saveNote">Save Note</button>
    </div>
  `
}
