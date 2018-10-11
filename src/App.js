import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
          <Switch>
            <Route exact path="/" component={SignUp} />
            <Route path="/welcome" component={Welcome} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
