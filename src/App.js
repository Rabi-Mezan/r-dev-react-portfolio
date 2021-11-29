
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Landing from './pages/Landing/Landing';
import Project from './pages/Project/Project';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Landing></Landing>
          </Route>
          <Route path='/home'>
            <Landing></Landing>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/project'>
            <Project></Project>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
