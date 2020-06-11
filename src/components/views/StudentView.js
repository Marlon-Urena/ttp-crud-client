import React from "react";
//TODO: Pass in GPA information
const StudentView = (props) => {
  return (
    <>
      <div className="student-heading">
        <div className="student-img">
          <img src={props.student.imageURL} alt="student" />
        </div>
        <div className="student-information">
          <h1 className="student-name">{props.student.name}</h1>
          <p className="student-description">{props.student.email}</p>
          <p className="student-gpa">GPA: </p>
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
          <div className="btn-group">
            <button
              className="btn btn-secondary btn-lg dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Large button
            </button>
            <div className="dropdown-menu">
              <button className="dropdown-item" type="button">
                Campus 1
              </button>
              <button className="dropdown-item" type="button">
                Campus 2
              </button>
              <button className="dropdown-item" type="button">
                Campus 3
              </button>
            </div>
          </div>
        </div>
        <button className="campus-button btn btn-primary">Change Campus</button>
      </div>
    </>
  );
};

export default StudentView;
