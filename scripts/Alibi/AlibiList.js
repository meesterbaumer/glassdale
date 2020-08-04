// import { KnownAssoConverter } from "./KnowAssoHTML.js";
import { getCriminals, useCriminals } from "../criminals/criminalDataProvider.js";
import { crimHTMLRep } from "../criminals/criminal.js";
// import { crimHTMLRep } from "../criminals/criminal.js";

const eventHub = document.querySelector(".container")

eventHub.addEventListener("alibiClicked", event => {
  const selectedCriminal = event.detail.criminalAlibiId
  arrayOfCriminals = useCriminals()

  console.log(selectedCriminal)


  arrayOfCriminals.find(
    (criminal) => {
      return parseInt(selectedCriminal) === criminal.id
    }
  )
  console.log(criminal)

})



// export const ListAssoAlibis = (criminalArr) => {
//   let alibiArray = []
  

//   const newArray = criminalArr.map(newAlibiArray => {

//   }
  

  
// }