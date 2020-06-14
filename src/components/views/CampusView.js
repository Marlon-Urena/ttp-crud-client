import React from "react";
import { Button } from "@material-ui/core";
import "./styles/CampusView.css";
import { Link } from "react-router-dom";

const CampusView = (props) => {
  const students = () => {
    if (!props.campus.students.length) {
      return <div>There are no students</div>;
    } else {
      return (
        <div className="campus-students">
          {props.campus.students.map((student) => (
            <div key={student.id} className="card mb-3 campus-card">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src={student.imageUrl}
                    className="card-img"
                    alt="student"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <Link to={`/students/${student.id}`}>
                      <h5 className="card-title">
                        {student.firstName + " " + student.lastName}
                      </h5>
                    </Link>
                    <p className="card-text">GPA: {student.gpa}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          ;
        </div>
      );
    }
  };
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
        <div className="button-group">
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to={`/campuses/${props.campus.id}/edit`}
          >
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
      {students()}
    </>
  );
};
export default CampusView;
