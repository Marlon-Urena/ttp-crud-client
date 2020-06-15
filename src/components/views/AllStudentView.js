import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import "./styles/AllStudentsView.css";
import { JumbotronContainer, StudentCardContainer } from "../containers";

const AllStudentsView = (props) => {
  const students = () =>
    props.allStudents.map((student) => (
      <StudentCardContainer
        key={student.id}
        student={student}
        campus={student.campus}
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
      <Grid container spacing={3} className="all-students">
        {props.allStudents.length ? (
          students()
        ) : (
          <h1>There are no students.</h1>
        )}
      </Grid>
    </>
  );
};

AllStudentsView.propType = {
  allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;
