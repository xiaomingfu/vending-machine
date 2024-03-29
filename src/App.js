import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import Soda from './Soda';
import Hotdog from './Hotdog';
import Chips from './Chips';
import VendingMachine from './VendingMachine';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <VendingMachine />} />
          <Route exact path="/soda" render={() => <Soda />} />
          <Route exact path="/chips" render={() => <Chips />} />
          <Route exact path="/hotdog" render={() => <Hotdog />} />
        </Switch>
      </div>
    );
  }
}


export default App;
