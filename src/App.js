
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Landing from './pages/Landing/Landing';
import Project from './pages/Project/Project';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Details from './pages/Details/Details';
import Blogs from './pages/Blogs/Blogs';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPc9-Sbrf0HMixutClSYPIbrYdED0hzH4",
  authDomain: "rdev-a84c1.firebaseapp.com",
  projectId: "rdev-a84c1",
  storageBucket: "rdev-a84c1.appspot.com",
  messagingSenderId: "363363416885",
  appId: "1:363363416885:web:8e545cdebffc854fc9aa7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


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
          <Route path='/details'>
            <Details></Details>
          </Route>
          <Route path='/blogs'>
            <Blogs></Blogs>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
