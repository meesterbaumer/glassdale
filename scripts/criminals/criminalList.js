import { getCriminals, useCriminals } from './criminalDataProvider.js'
import { crimHTMLRep } from "./criminal.js";

const contentTarget = document.querySelector(".criminalsContainer")

export const CriminalList = () => {
    getCriminals().then(() => {
      const criminalArr = useCriminals()
      let criminalHTMLRepresentations = ""
      
      for (const crimObj of criminalArr) {
        criminalHTMLRepresentations += crimHTMLRep(crimObj)
      }

      contentTarget.innerHTML = criminalHTMLRepresentations
  })
}