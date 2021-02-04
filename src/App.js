import React, {useState} from 'react';
import './App.css';
import Button from './Button';

function App() {

const [count, setCount] = useState(0)

  return (
    <div className="App">
      <p>You clicked the button {count} times</p>
      <Button setCount={setCount } count={count} />
    </div>
  );
}

export default App;
