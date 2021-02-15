import { Route } from 'react-router-dom';
import Home from './Home';
import Board from './Board';
import handleCLick from './EventHandling';


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home}/>
      <Route path="/board" component={Board}/>
      <Route path="/handle" component={handleCLick}/>
    </div>
  );
}

export default App;
