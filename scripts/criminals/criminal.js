export const crimHTMLRep = (crimObj) => {
  return `
    <div class="criminal" >
    <button id="associates--${crimObj.id}">Associate Alibis</button>
    <h4>${crimObj.name}</h4>
      <p>
          Age: ${crimObj.age}<br>
          Crime: ${crimObj.conviction}<br>
          Term Start: ${new Date(crimObj.incarceration.start).toLocaleDateString('en-US')}<br>
          Term End: ${new Date(crimObj.incarceration.end).toLocaleDateString('en-US')}
      </p>
    </div>
  `
}