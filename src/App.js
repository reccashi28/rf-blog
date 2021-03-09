import React, { useState, useEffect } from 'react';
import './App.css';
import Navigator from './components/Navigator/Navigator';
import Content from './components/Content/Content';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {

// const [count, setCount] = useState(0)
// const [blogs, setBlogs] = useState([
//   {title: "Paradise on Earth", content: "1. Arrays of objects don't stay the same all the time.", author: "peter", id: 1},
//   {title: "Eternal Life", content: "2. Arrays of objects don't stay the same all the time.", author: "john", id: 2},
//   {title: "Health", content: "3. Arrays of objects don't stay the same all the time.", author: "john", id: 3},
// ]);

const [blogs, setBlogs] = useState([]);

useEffect( () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => setBlogs(data))
}, []);

const handleDelete = (id) => {
  const newBlogsList = blogs.filter( blog => blog.id !== id);
  setBlogs(newBlogsList);
}

  return (
    <Router>
      <div className="App">
        <Navigator  />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/blogs" exact > 
              <Content blogs={blogs} handleDelete={handleDelete}  />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
