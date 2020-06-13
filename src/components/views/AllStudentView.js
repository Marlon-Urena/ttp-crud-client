import React from "react";
// TODO: Add style link here
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";
import "./styles/AllStudentsView.css";

const AllStudentsView = (props) => {
  if (!props.allStudents.length) {
    return <div className="all-students">There are no students</div>;
  }

  return (
    <Grid container spacing={3} className="all-students">
      {props.allStudents.map((student) => (
        <Grid item sm={3}>
          <div key={student.id}>
            <Card className="student-card">
              <Link to={`students/${student.id}`}>
                <CardActionArea className={"student-link"}>
                  <CardMedia
                    className="student-media"
                    image={student.imageUrl}
                    title={student.firstName + " " + student.lastName}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {student.firstName + " " + student.lastName}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      GPA: {student.gpa}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
              <CardActions>
                <Link to={`campuses/${student.campus.id}`}>
                  <p className="campus-link">{student.campus.name}</p>
                </Link>
              </CardActions>
            </Card>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

AllStudentsView.propType = {
  allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;
