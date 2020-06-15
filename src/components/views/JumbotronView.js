import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const JumbotronView = (props) => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">{props.banner}</h1>
        {props.toggle ? (
          <></>
        ) : (
          <Link to={props.link}>
            <Button variant="contained" color="primary">
              {props.linkMessage}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
export default JumbotronView;
