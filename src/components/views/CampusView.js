import React from "react";
import { Button, Grid } from "@material-ui/core";
import "./styles/CampusView.css";
import { Link } from "react-router-dom";
import { StudentCardContainer } from "../containers";

const CampusView = (props) => {
  const students = () =>
    props.campus.students.map((student) => {
      return (
        <StudentCardContainer
          key={student.id}
          student={student}
          campus={props.campus}
        />
      );
    });
  return (
    <>
      <div className="campus-heading">
        <div className="campus-img">
          <img src={props.campus.imageUrl} alt="campus" />
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
      <Grid container spacing={3} className="all-students">
        {props.campus.students.length ? (
          students()
        ) : (
          <h3>There are no students currently registered to this campus.</h3>
        )}
      </Grid>
    </>
  );
};
export default CampusView;
