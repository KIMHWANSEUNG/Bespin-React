import { Route } from 'react-router-dom';
import test1 from './test1';
import Board from './Board';
import handleCLick from './EventHandling';
import React, { Component } from 'react';
import Home from './Home';


class App extends Component {
  render(){
  return (
    <div className="App">
      <Route exact path="/" component={Home}/>
      <Route path="/test1" component={test1}/>
      <Route path="/board" component={Board}/>
      <Route path="/handle" component={handleCLick}/>
    </div>
  )
  };
}

export default App;
