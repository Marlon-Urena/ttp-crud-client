import React, { Component } from "react";
//import "./App.css";
import RoutesContainer from "../components/routes/RoutesContainer";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link to="/">
                  <div className="nav-link disabled">Home</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/campuses">
                  <div className="nav-link">Campuses</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/students">
                  <div className="nav-link">Students</div>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="app">
          <header className="app-header">
            <RoutesContainer />
          </header>
        </div>
      </>
    );
  }
}

export default App;
