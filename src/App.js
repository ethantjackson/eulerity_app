import Pets from './Pets';
import About from './About';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import 'materialize-css/dist/css/materialize.min.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Pets />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
