let facilities = []

export const useFacilities = () => facilities.slice()

export const getFacilities = () => {
  return fetch("https://criminals.glassdale.us/facilities")
  .then(res => res.json())
  .then(data => facilities = data)
}