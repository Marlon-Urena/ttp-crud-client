import React from "react";
import { Button } from "@material-ui/core";
import "./styles/CampusView.css";

const CampusView = (props) => {
  return (
    <>
      <div className="campus-heading">
        <div className="campus-img">
          <img src="https://via.placeholder.com/150" alt="campus" />
        </div>
        <div className="campus-information">
          <h1 className="campus-name">{props.campus.name}</h1>
          <p className="campus-description">{props.campus.description}</p>
        </div>
      </div>
      <div>
        <p className="campus-address">{props.campus.address}</p>
        <div>
          <Button variant="contained" color="primary">
            Edit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => props.handleDelete(props.campus.id)}
          >
            Delete
          </Button>
        </div>
      </div>
    </>
  );
};
//TODO: Make sure to add students that are tied to campus
export default CampusView;
