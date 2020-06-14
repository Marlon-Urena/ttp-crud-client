import React from "react";
// TODO: Add style link here
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";
import "./styles/AllStudentsView.css";
import { StudentCardContainer } from "../containers";

const AllStudentsView = (props) => {
  // if (!props.allStudents.length) {
  //   return (
  //     <>
  //       <div className="jumbotron jumbotron-fluid">
  //         <div className="container">
  //           <h1 className="display-4">All Students</h1>
  //           <Link to="/students/new">
  //             <Button variant="contained" color="primary">
  //               Add Student
  //             </Button>
  //           </Link>
  //         </div>
  //       </div>
  //       <div className="all-students">There are no students</div>;
  //     </>
  //   );
  // }

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
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">All Students</h1>
          <Link to="/students/new">
            <Button variant="contained" color="primary">
              Add Student
            </Button>
          </Link>
        </div>
      </div>
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
