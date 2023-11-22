import { createElement } from "react";

function App() {

  //data
  const title = 'Welcome to React JS'

  //design
  //<h1>Welcome to React JS<h1>
  const welcomeElement = createElement('h1', null, title)

  return welcomeElement
}

export default App