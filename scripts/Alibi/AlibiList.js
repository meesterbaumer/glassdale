// import { KnownAssoConverter } from "./KnowAssoHTML.js";
import { getCriminals, useCriminals } from "../criminals/criminalDataProvider.js";

const eventHub = document.querySelector(".container")

eventHub.addEventListener("alibiClicked", event => {
  const selectedCriminal = event.detail.criminalAlibiId
  
  return selectedCriminal

})

console.log(selectedCriminal)

// export const ListAssoAlibis = (criminalArr) => {
//   let alibiArray = []
  

//   const newArray = criminalArr.map(newAlibiArray => {

//   }
  

  
// }