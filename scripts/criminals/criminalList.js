import { getCriminals, useCriminals } from './criminalDataProvider.js'
import { crimHTMLRep } from "./criminal.js";
import { useConvictions } from '../convictions/ConvictionProvider.js';

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("crimeSelected", (crimeSelectedEvent) => {

  const crimeThatWasSelected = crimeSelectedEvent.detail.crimeId

  const arrayOfCrimes = useConvictions()
  const foundCrimeObject = arrayOfCrimes.find(
    (crime) => {
      return parseInt(crimeThatWasSelected) === crime.id
    }
  )

  const allCriminals = useCriminals()

  const filteredCriminals = allCriminals.filter(
    (currentCriminalObj) => {
      return foundCrimeObject.name === currentCriminalObj.conviction
    }
  )

  render(filteredCriminals)

})


eventHub.addEventListener("officerSelect", (event) => {
  const selectedOfficer = event.detail.officer 
  const criminals = useCriminals()
  
  const arrestingOfficerFilter = criminals.filter(
    (currentCriminalObject) => {
      if (currentCriminalObject.arrestingOfficer === selectedOfficer) {
        return true
      }
    }
  )

    const allCriminals = useCriminals()

    const filteredCrimByOfficer = allCriminals.filter(
      (currentCriminalObj) => {
        return arrestingOfficerFilter.name === currentCriminalObj.id
      }
    )
    
    render(filteredCrimByOfficer)
})


const render = (criminalArr) => {
  
  let crimHTMLString = ""

  criminalArr.forEach(criminal => {
    crimHTMLString += crimHTMLRep(criminal)
  })

  contentTarget.innerHTML = `
  <h2>Criminals</h2>
  <div class="criminalList" >
  ${crimHTMLString}
  </div>
  `

}


export const CriminalList = () => {
    getCriminals()
      .then(() => {
        const criminals = useCriminals()
        render(criminals)
    
      

      
  })
}