import React from "react";
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
          <button type="button" className="btn btn-success">
            Edit
          </button>
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </>
  );
};
//TODO: Make sure to add students that are tied to campus
export default CampusView;
