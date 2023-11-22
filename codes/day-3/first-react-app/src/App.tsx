//import { createElement } from "react";

/*
//React Design without JSX/TSX

function App() {

  //data
  const title = 'Welcome to React JS'
  const body = 'React JS is a JavaScript library and it helps you create SPA'
  //design
  //<div> <-- root element
  //<h1>Welcome to React JS<h1>
  //<br>
  //<p>React JS is a JavaScript library and it helps you create SPA</p>
  //</div>
  const titleElement = createElement('h1', null, title)
  const breakElement = createElement('br')
  const bodyElement = createElement('p', null, body)

  const divElement = createElement('div', null, [titleElement, breakElement, bodyElement])
  return divElement
}
*/
//React Design with JSX/TSX
function App() {

  //data
  const title = 'Welcome to React JS'
  const body = 'React JS is a JavaScript library and it helps you create SPA'

  const divElement = (
    <div>
      <h1>
        {title}
      </h1>
      <br />
      <p>
        {body}
      </p>
    </div>
  )
  return divElement
}
export default App