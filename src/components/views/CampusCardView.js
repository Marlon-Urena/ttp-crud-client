import React from "react";
import { Button, Card, CardContent, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./styles/CampusCardView.css";

const CampusCardView = (props) => {
  return (
    <Grid
      key={props.campus.id}
      item
      xs={12}
      sm={6}
      md={4}
      className="campus-card-grid"
    >
      <Card className="campus-card">
        <div className="campus-image-container">
          <img
            className="campus-image"
            src={props.campus.imageUrl}
            alt={props.campus.name}
          />
        </div>
        <CardContent className="campus-interaction">
          <div className="campus-info">
            <Typography
              variant="h5"
              component={Link}
              to={`/campuses/${props.campus.id}`}
              display={"block"}
              className="campus-card-name"
            >
              {props.campus.name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              display={"block"}
              className="campus-student-line"
            >
              Number of Students: {props.campus.students.length}
            </Typography>
          </div>

          <div className="campus-card-btn-group">
            <div className="edit-campus-card-button">
              <Button
                color="primary"
                component={Link}
                to={`/campuses/${props.campus.id}/edit`}
              >
                Edit
              </Button>
            </div>

            <div className="delete-campus-card-button">
              <Button
                variant="contained"
                color="secondary"
                onClick={() => props.handleDelete(props.campus.id)}
              >
                Remove
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default CampusCardView;
