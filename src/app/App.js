import React, { Component } from "react";
//import "./App.css";
import RoutesContainer from "../components/routes/RoutesContainer";
import NavBar from "../components/views/Navbar";

class App extends Component {
  render() {
    return (
      <>
        <NavBar></NavBar>
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
