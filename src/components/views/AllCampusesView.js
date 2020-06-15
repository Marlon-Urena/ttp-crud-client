import React from "react";
import "./styles/AllCampusesView.css";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import { CampusCardContainer, JumbotronContainer } from "../containers";

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
      <JumbotronContainer
        banner={props.banner}
        link={props.link}
        linkMessage={props.linkMessage}
        toggle={props.toggle}
      />
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
