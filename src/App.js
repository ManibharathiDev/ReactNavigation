import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import HomeComponent from "./component/HomeComponent";
import AboutComponent from "./component/AboutComponent";
import ServiceComponent from "./component/ServiceComonent";
import NoMatchComponent from "./component/NoMatchComponent";
import ChildComponent from "./component/ChildComponent";

const App = () => {

    return(
        <Router>

                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/about">About</Link>
                        </li>

                        <li>
                            <Link to="/service">My Services</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    {/* <Route path="/" element={<HomeComponent/>} />
                    <Route path="/about" element={<AboutComponent/>} />
                    <Route path="/service" element={<ServiceComponent/>}  />
                    <Route path="*" element={<NoMatchComponent/>}/> */}
                    <Route path="/:id" element={<ChildComponent/>}/>
                </Routes>
        </Router>
    )

}

export default App;