import { Route } from 'react-router-dom';
import Home from './Home';
import Board from './Board';
import handleCLick from './EventHandling';
import React, { Component } from 'react';
import Customer from './components/Cusomer'


class App extends Component {
  render(){
  return (
    <div className="App">
      <Route exact path="/" component={Home}/>
      <Route path="/board" component={Board}/>
      <Route path="/handle" component={handleCLick}/>
      <Route path="/customer" component={Customer}/>
    </div>
  )
  };
}

export default App;
