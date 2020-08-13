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
    const noteCriminal = document.querySelector("#note--criminal")
    const noteCriminalValue = parseInt(document.querySelector("#note--criminal").value)
    

    // Make a new object representation of a note
    if (noteCriminalValue !== 0) {
      
      const newNote = {
        title: noteTitle.value,
        author: noteAuthor.value,
        content: noteContent.value,
        timestamp: Date.now(),
        criminalId: noteCriminalValue
      }
      // Change API state and application state
  
      saveNote(newNote)
      noteTitle.value = ""
      noteAuthor.value = ""
      noteContent.value = ""
      noteCriminal.value = ""
      

    }
    else {
      window.alert("please select a criminal")
    }
    
  }
})

export const NoteForm = () => {
  getCriminals().then(() => {
    const criminals = useCriminals()
    render(criminals)
  })
}

const render = (criminalCollection) => {
  contentTarget.innerHTML = `
    <div class="noteFormContainer">
      <h3>Enter a note below</h3>
      <input type="text" class="fields" id="note--title" placeholder="Enter note title" />
      <input type="text" class="fields" id="note--author" placeholder="Your name here" />
      <textarea class="fields" id="note--content" placeholder="Note text here" /></textarea>
      <select id="note--criminal" class="criminalSelect">
        <option value="0">Please select a suspected criminal</option>
        ${
          criminalCollection.map(
            criminal => {
            return `<option value="${criminal.id}">${criminal.name}</option>`
          }    
        )

        }
      </select>
      <button class="fields" id="saveNote">Save Note</button>
    </div>
  `
}
