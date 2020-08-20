
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id.startsWith("associates--")) {
  
    const [prefix,criminalId] = clickEvent.target.id.split("--")
    const customEvent = new CustomEvent("alibiClicked", {
      detail: {
        criminalAlibiId: criminalId
      }
    })
    eventHub.dispatchEvent(customEvent)
  }
})


export const crimHTMLRep = (criminal, facilities) => {
  return `
    <div class="criminal" >
    <button id="associates--${criminal.id}">Associate Alibis</button>
    <h4>${criminal.name}</h4>
      <p>
          Age: ${criminal.age}<br>
          Crime: ${criminal.conviction}<br>
          Term Start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}<br>
          Term End: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}
      </p>
      <ul>
        ${
          facilities.map(
            (facility) => {
              return `<li> ${facility.facilityName}</li>`
            }
          ).join("")
        }
      </ul>
    </div>
  `
}