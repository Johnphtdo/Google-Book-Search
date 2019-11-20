import React, { Component } from "react";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import About from "./pages/About";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Jumbotron>
            
            <h1>(React) Google Books Search</h1>
            <p>Search for and Save books of interest</p>
          </Jumbotron>
          <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/books" component={Saved} />
            <Route Component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
