import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";

class Main extends Component {
    render() {
        return (
            <HashRouter>
            <div>
        <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Student</NavLink></li>
            <li><NavLink to="/contact">Professor</NavLink></li>
        </ul>
        <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
        </div>
            </div>
            </HashRouter>
    );
    }
}

export default Main;