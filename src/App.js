import React, {useState} from 'react';
import './App.css';
import Hello from './Hello';
import Navigator from './components/Navigator/Navigator';
import Content from './components/Content/Content';



function App() {

const [count, setCount] = useState(0)
const [blogs, setBlogs] = useState([
  {title: "Paradise on Earth", content: "Arrays of objects don't stay the same all the time.", author: "peter", id: 1},
  {title: "Eternal Life", content: "Arrays of objects don't stay the same all the time.", author: "john", id: 2},
  {title: "Health", content: "Arrays of objects don't stay the same all the time.", author: "john", id: 3},
]);

  return (
    <div className="App">
      <Navigator />
      <Content blogs={blogs} />
      <p>You clicked the button {count} times</p>
      <button onClick={ () => {
        setCount( count + 1)
      }}> Click me!</button>
      <Hello />
    </div>
  );
}

export default App;
