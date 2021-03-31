import React, { useState, useEffect } from 'react';
import './App.css';
import Navigator from './components/Navigator/Navigator';
import Content from './components/Content/Content';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Contact from './components/Contact/Contact';
import CreateBlog from './components/CreateBlog/CreateBlog';


function App() {


const [blogs, setBlogs] = useState([]);

useEffect( () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => setBlogs(data))
  .catch( (e) => {
    console.log(e);
  })
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
            <Route path="/create">
              <CreateBlog />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
