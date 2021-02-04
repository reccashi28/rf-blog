import React, {useState} from 'react';
import './App.css';

function App() {

const [count, setCount] = useState(0)

  return (
    <div className="App">
      <p>You clicked the button {count} times</p>
      <button onClick={ () => {
        setCount( count + 1 )
      }}>Click Me!</button>
    </div>
  );
}

export default App;
