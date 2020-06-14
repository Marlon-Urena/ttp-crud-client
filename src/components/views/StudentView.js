import React from "react";
import ComboBoxView from "./ComboBoxView";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
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
          <Button
            component={Link}
            to={`/students/${props.student.id}/edit`}
            variant="contained"
            color="primary"
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => props.handleDelete(props.student.id)}
          >
            Delete
          </Button>
        </div>
      </div>
      <div className="campus-section">
        <div className="campus-dropdown-button">
          <ComboBoxView group={props.campuses} />
          <div className="btn-group"></div>
        </div>
        <Button className="campus-button" variant="contained" color="primary">
          Change Campus
        </Button>
      </div>
    </>
  );
};

export default StudentView;
