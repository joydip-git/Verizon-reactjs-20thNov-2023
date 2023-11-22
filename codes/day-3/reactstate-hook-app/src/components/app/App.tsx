import { useState } from 'react';
import './App.css';
import Counter from '../counter/Counter';

function App() {
  console.log('App rendered')
  const [value, setValue] = useState<number>(0)
  const [name, setName] = useState<string>('NA')
  const [obj, setObj] = useState<{ data: number, text: string }>({ data: 0, text: 'NA' })
  const increaseHandler = () => {
    //setValue(1)
    setValue(
      (currentNumber) => currentNumber + 1
    )
    setObj(
      (currentObjState) => {
        const newState = {
          ...currentObjState,
          data: currentObjState.data + 1
        }
        console.log(newState)
        return newState
      }
    )
  }
  const nameHandler = (newName: string) => {
    setName(newName)
  }
  return (
    <div className="App">
      <Counter value={value} increaseValue={increaseHandler} />
      <br />
      <div>
        <label htmlFor="txtName">Name:&nbsp;</label>
        <input type='text' value={name} id='txtName'
          onChange={
            (e) => nameHandler(e.target.value)
          } />
      </div>
      <br />
      Name Typed in TextBox: &nbsp;<span>{name}</span>
      <br />
      <div>
        Object State Data: &nbsp; <span>{obj.data}</span>
        <br />
        {
          /*
            obj.text !== undefined && (<div>Object State Text: &nbsp; <span>{obj.text}</span></div>)
            */

          obj.text !== undefined ? (<div>Object State Text: &nbsp; <span>{obj.text}</span></div>) : <span>Text property in state missing</span>
        }
      </div>
    </div>
  );
}

export default App;
