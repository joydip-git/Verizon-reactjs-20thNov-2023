import React, { useState } from 'react';
import './App.css';
import PostList from './PostList';

function App() {
  const [count, setCount] = useState<number>(0)
  console.log('App rendered')
  return (
    <div className="App">
      <button type='button' onClick={() => setCount((oldCount) => oldCount + 1)}>
        Increase
      </button>
      <br /><br />
      <PostList val={count} />
    </div>
  );
}

export default App;
