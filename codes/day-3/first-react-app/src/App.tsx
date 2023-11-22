function App(): JSX.Element {

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