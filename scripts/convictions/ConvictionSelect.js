/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions, getConvictions } from "./ConvictionProvider.js"


// Get a reference to the DOM element where the <select> will be rendered
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")

eventHub.addEventListener("change", event => {
  // Only do this if the `crimeSelect` element was changed
  if (event.target.id === "crimeSelect") {
    // Now i'm creating a custom event
    const selectedCrime = new CustomEvent("crimeSelected", {
      detail: {
        crimeID: event.target.value
      }
    })
    // Dispatch to event hub
    eventHub.dispatchEvent(selectedCrime)
  }
})


    const render = convictionsCollection => {
        /*
            Use interpolation here to invoke the map() method on
            the convictionsCollection to generate the option elements.
            Look back at the example provided above.
        */
        contentTarget.innerHTML = `
            <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                ${
                    convictionsCollection.map(
                      convictionObject => {
                        return `<option>${convictionObject.name}</option>`
                      }
                    ).join("")
                }
            </select>
        `
    }


export const ConvictionSelect = () => {
  getConvictions().then(() => {
    const convictions = useConvictions()

    render(convictions)

  })
}