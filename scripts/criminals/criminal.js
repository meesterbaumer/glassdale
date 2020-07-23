export const crimHTMLRep = (crimObj) => {
  return `
    <div>
      <h4>${crimObj.name}</h4>
        <p>
            Age: ${crimObj.age}<br>
            Crime: ${crimObj.conviction}<br>
            Term Start: ${crimObj.incarceration.start}<br>
            Term End: 
        </p>
    </div>
  `
}