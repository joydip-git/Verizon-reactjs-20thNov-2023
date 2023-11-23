import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './PostList';

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

export default App;
