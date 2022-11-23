import './App.css';
import HomeComponent from './component/HomeComponent';
import AboutComponent from './component/AboutComponent';
import ServiceComponent from './component/ServiceComonent';
import NoMatchComponent from './component/NoMatchComponent';
import BlogComponent from './component/BlogComponent';
import {BrowserRouter as Router, Routes, Route,Link,useParams} from "react-router-dom"

function App() {
  return (
    <Router>
      <div>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/service">Service</Link>
            </li>
          </ul>
        </nav>

          <Routes>
               <Route path='/' element = {<HomeComponent/>}/>
              <Route path='/about' element = {<AboutComponent/>}/>
              <Route path='/service' element={<ServiceComponent/>}/> 
              <Route path='/blog/:id' element={<BlogComponent/>}/>
              <Route path='*' element={<NoMatchComponent/>}/>
              {/* <Route path='/:id' element={<ChildComponent/>}/> */}
              
          </Routes>
      </div>
    </Router>
  );
}

function ChildComponent() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}

export default App;
