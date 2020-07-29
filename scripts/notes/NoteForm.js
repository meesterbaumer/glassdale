const contentTarget = document.querySelector(".noteFormContainer")

const render = () => {
  contentTarget.innerHTML = `
    <div class="noteFormContainer">
      <h3>Enter a note below</h3>
      <input type="text" id="note--title" placeholder="Enter note title" />
      <input type="text" id="note--author" placeholder="Your name here" />
      <textarea id="note--content" placeholder="Note text here" /></textarea>

      <button id="saveNote">Save Note</button>
    </div>
  `
}

export const NoteForm = () => {
  render()
}