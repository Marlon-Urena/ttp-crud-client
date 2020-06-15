import React from "react";
import "./styles/AllCampusesView.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";
import { CampusCardContainer } from "../containers";

const AllCampusesView = (props) => {
  const campuses = () =>
    props.allCampuses.map((campus) => (
      <CampusCardContainer
        key={campus.id}
        campus={campus}
        handleDelete={props.handleDelete}
      />
    ));
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">All Campuses</h1>
          <Link to="/campuses/new">
            <Button variant="contained" color="primary">
              Add Campus
            </Button>
          </Link>
        </div>
      </div>
      <Grid container justify="flex-start" className="all-campuses">
        {props.allCampuses.length ? (
          campuses()
        ) : (
          <h1>There are no Campuses.</h1>
        )}
      </Grid>
    </>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
