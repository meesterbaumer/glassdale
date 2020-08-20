import { getCriminals, useCriminals } from './criminalDataProvider.js';
import { getFacilities, useFacilities } from "../facility/FacilityProvider.js";
import { getCriminalFacilities, useCriminalFacilities } from "../facility/CriminalFacilityProvider.js";
import { crimHTMLRep } from "./criminal.js";
import { useConvictions } from '../convictions/ConvictionProvider.js';
import { renderAlibiBox } from "../Alibi/AlibiList.js";

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

let criminals = []
let crimFacs = []
let facs = []
const chosenFilters = {
  crime: "0",
  officer: "0"
}

export const CriminalList = () => {
  getCriminals()
  .then(getFacilities)
  .then(getCriminalFacilities)
  .then(() => {
    
    criminals = useCriminals()
    facs = useFacilities()
    crimFacs = useCriminalFacilities()
    
    render()
  })
}


const render = () => {
  
  // let crimHTMLString = ""
  
  const arrayOfCriminalHTMLRep = criminals.map(
    (criminal) => {
      const criminalFacilityRelationships = crimFacs.filter(
        (cf) => {
          return criminal.id === cf.criminalId
        }
        )
        const matchingFacilities = criminalFacilityRelationships.map(
          (currentRelationship) => {
            return facs.find(
              (fac) => {
                return currentRelationship.facilityId === fac.id
              }
              )
            }
            )
            return crimHTMLRep(criminal, matchingFacilities)
    }
  )
          
  contentTarget.innerHTML = `
  <h2>Criminals</h2>
  <div class="criminalList" >
  ${arrayOfCriminalHTMLRep.join("")}
  </div>
  ${renderAlibiBox()}
  `
  
}

const filterCriminals = () => {
  criminals = useCriminals()
  const arrayOfCrimes = useConvictions()

  if (chosenFilters.crime !== "0") {
    const foundCrimeObject = arrayOfCrimes.find(
      (crime) => {
        return parseInt(chosenFilters.crime) === crime.id
      }
    )
    criminals = criminals.filter(
      (currentCriminalObject) => {
        return foundCrimeObject.name === currentCriminalObject.conviction
      }
    )
  }
  if (chosenFilters.officer !== "0") {
    criminals = criminals.filter(
      (currentCriminal) => {
        if (currentCriminal.arrestingOfficer === chosenFilters.officer) {
          return true
        }
        return false
      }
    )
  }
}
        
        

// Click event to filter list of criminals down to only ones who've commited the selected crime
eventHub.addEventListener("crimeSelected", (crimeSelectedEvent) => {

  chosenFilters.crime = crimeSelectedEvent.detail.crimeId
  filterCriminals()
  render()
})

// Click event to filter the list of criminals down based on the arresting officer
eventHub.addEventListener("officerSelected", (event) => {
  
  chosenFilters.officer = event.detail.officer
    filterCriminals()
    render()
})