import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import "./styles/StudentRowView.css";

const StudentRowView = (props) => {
  return (
    <Card className="student-row">
      <CardMedia
        className="student-image"
        image={props.student.imageUrl}
        title={props.student.firstName + " " + props.student.lastName}
      />
      <div className="student-details">
        <CardContent className="student-info">
          <Typography
            variant="h5"
            component={Link}
            to={`/students/${props.student.id}`}
          >
            {props.student.firstName + " " + props.student.lastName}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {props.student.gpa}
          </Typography>
        </CardContent>
      </div>
      <div className="unenroll-button-container">
        <Button
          variant="contained"
          color="secondary"
          className="unenroll-button"
          name="unenrollment"
          onClick={() =>
            props.handleStudentEnrollment("unenrollment", props.student)
          }
        >
          Unenroll
        </Button>
      </div>
    </Card>
  );
};

export default StudentRowView;
