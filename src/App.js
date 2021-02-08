import React, {useState} from 'react';
import './App.css';
import Hello from './Hello';

function App() {

const [count, setCount] = useState(0)

  return (
    <div className="App">
      <p>You clicked the button {count} times</p>
      <Button />
      <Hello />
    </div>
  );
}

export default App;
