import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
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
          <Typography component="h5" variant="h5">
            {props.student.firstName + " " + props.student.lastName}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {props.student.gpa}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export default StudentRowView;
