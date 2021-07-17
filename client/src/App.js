import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Createtodo from './components/Create-component';
import EditTodo from './components/Edit-component';
import Todolist from './components/Todolist-component';
import logo from "./components/logo.png";

export default class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="https://google.com" target="_blank">
              <img src={logo} width="30" height="30" alt="codingthesmartway.com"/>
          </a>
          <Link to="/" className="navbar-brand">Project expo</Link>
          <div className="collpase nav-collpase">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Todos</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create</Link>
              </li>
            </ul>
          </div>
      </nav> 
      <Route path="/" exact component={Todolist}/>
      <Route path="/edit/:id"  component={EditTodo}/>
      <Route path="/create"  component={Createtodo}/>
      </div>
      </Router>
    )
  }
}



