import React from "react";
import ComboBox from "./ComboBox";
//TODO: Pass in GPA information
const StudentView = (props) => {
  return (
    <>
      <div className="student-heading">
        <div className="student-img">
          <img src={props.student.imageUrl} alt="student" />
        </div>
        <div className="student-information">
          <h1 className="student-name">
            {props.student.firstName + " " + props.student.lastName}
          </h1>
          <p className="student-description">{props.student.email}</p>
          <p className="student-gpa">GPA: {props.student.gpa}</p>
        </div>
        <div className="alter-button">
          <button type="button" className="btn btn-success">
            Edit
          </button>
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
      <div className="campus-section">
        <div className="campus-dropdown-button">
          <ComboBox />
          <div className="btn-group"></div>
        </div>
        <button className="campus-button btn btn-primary">Change Campus</button>
      </div>
    </>
  );
};

export default StudentView;
