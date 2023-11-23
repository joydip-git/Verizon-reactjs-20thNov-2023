import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './PostList';
import Name from './Name';
import Counter from './Counter';

/*
function App() {
  // const pl = new PostList({})
  // const design = pl.render()
  const [show, setShow] = useState<boolean>(true)
  return (
    <div className="App">
      <button type='button' onClick={
        () => setShow((currentStatus) => !currentStatus)
      }>
        {
          show ? 'Hide' : 'Show'
        }
      </button>
      <br />
      <br />
      {
        show && <PostList />
      }
    </div>
  );
}
*/
function App() {
  console.log('App rendered')
  const [nameState, setNameState] = useState<string>('')
  const [valueState, setValueState] = useState<number>(0)

  const updateName = (newName: string) => {
    setNameState(newName)
  }
  const updateValue = () => {
    setValueState(
      (oldValue) => ++oldValue
    )
  }
  return (
    <div>
      <Name name={nameState} nameHandler={updateName} />
      <br />
      <br />
      <Counter count={valueState} countHandler={updateValue} />
    </div>
  )
}
export default App;
