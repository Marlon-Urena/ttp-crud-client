import React from "react";
import {
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
  CardActions,
  Grid,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const StudentCardView = (props) => {
  const student = props.student;
  const campus = props.campus;
  console.log(campus);
  return (
    <Grid key={student.id} item sm={3} md={6} xs={12}>
      <Card className="student-card">
        <Link to={`/students/${student.id}`}>
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
              <Typography variant="body2" color="textSecondary" component="p">
                GPA: {student.gpa}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions>
          {campus ? (
            <Link to={`/campuses/${campus.id}`}>
              <p className="campus-link">{campus.name}</p>
            </Link>
          ) : (
            <p>No Campus</p>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default StudentCardView;
