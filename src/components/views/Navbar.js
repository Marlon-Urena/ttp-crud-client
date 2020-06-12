import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

const NavBar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Link className="navbar-button" to="/">
            <Button color="inherit">Home</Button>
          </Link>
          <Link className="navbar-button" to="/campuses">
            <Button color="inherit">Campuses</Button>
          </Link>
          <Link className="navbar-button" to="/students">
            <Button color="inherit">Students</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
