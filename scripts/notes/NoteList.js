import { getNotes, useNotes, deleteNote } from "./NoteDataProvider.js";
import { NoteHTMLConverter } from "./NoteHTMLConverter.js";
import { useCriminals } from "../criminals/criminalDataProvider.js";

const contentTarget = document.querySelector(".noteList")
const eventHub = document.querySelector(".container")




const render = (noteArray) => {
  const criminals = useCriminals()
  
  contentTarget.innerHTML = noteArray.reverse().map(
    (currentNote) => {
      const foundCriminal = criminals.find(
        (criminalObj) => {
          return criminalObj.id === currentNote.criminalId
        }
        )
        return NoteHTMLConverter(currentNote, foundCriminal)
      }
      ).join("")
      
}
    
    export const NoteList = () => {
      getNotes()
      .then (useNotes)
      .then (render)
    }
    
    
eventHub.addEventListener("showNotesClicked", NoteList)

eventHub.addEventListener("noteStateChanged", () => {
  const allNotes = useNotes()
  render(allNotes)
})

eventHub.addEventListener("click", event => {
  if (event.target.id.startsWith("deleteNote--")) {
    const [prefix, id] = event.target.id.split("--")
    deleteNote(id).then(
      () => {
        const updatedNotes = useNotes()
        const criminals = useCriminals()
        render(updatedNotes, criminals)
      }
      )
    }
  })