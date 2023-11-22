import Content from "../other/content/Content"
import Header from "../other/header/Header"

function App(): JSX.Element {

  const title = 'Welcome to React JS Library'
  const body = 'React JS is a JS library, which helps you to create SPA'

  const someHandler = (message: string) => {
    console.log(message)
  }

  // const props: Readonly<HeaderPropType> = {
  //   headerTitle: title, value: 10
  // } 
  // const header = Header(props)


  const divElement = (
    <div id="mainDiv">
      {/* {header} */}
      <Header
        headerTitle={title}
        value={10}
        hoverHandler={someHandler} />
      <br />
      <Content contentBody={body} />
    </div>
  )
  return divElement
}

export default App