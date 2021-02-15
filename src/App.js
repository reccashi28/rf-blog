import React, {useState} from 'react';
import './App.css';
import Hello from './Hello';
import Navigator from './components/Navigator/Navigator';



function App() {

const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navigator />
      <p>You clicked the button {count} times</p>
      <button onClick={ () => {
        setCount( count + 1)
      }}> Click me!</button>
      <Hello />
    </div>
  );
}

export default App;
