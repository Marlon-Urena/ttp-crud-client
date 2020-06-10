import React from "react";
// TODO: Add style link here
import PropTypes from "prop-types";
import  { Link } from "react-router-dom";

const AllStudentsView = (props) => {
    if (!props.allStudents.length) {
        return <div className="all-students">There are no students</div>
    }

    /**
     * TODO: Check to see the feasibility of adding multiple campuses to a single user.
     * May have to pull information from campuses to get campus and GPA information regarding student
     */

    return  (
        <div className="all-students">
            {props.allStudents.map( student => (
                <div key={student.id}>
                    <Link to={`/students/${student.id}`}>
                        <h1>{student.name}</h1>
                    </Link>
                    <p>Campus: {student.campus}</p>
                </div>
            ))}
        </div>
    );
};

AllStudentsView.propType = {
    allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;