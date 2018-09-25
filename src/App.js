import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUp from './Components/SignUp/SignUp';
import Welcome from './Components/Welcome/Welcome';
import './App.css';

class App extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={SignUp} />
        </Router>
        <Router>
          <Route path="/welcome" component={Welcome} />
        </Router>
      </div>
    );
  }
}

export default App;
