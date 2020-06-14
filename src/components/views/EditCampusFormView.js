import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import ComboBoxView from "./ComboBoxView";
import { Link } from "react-router-dom";

//TODO: Connect removeStudentCampus action to remove button
//TODO: Look into possibly getting a list of all students passed in here. Those that are on campus gets put into cards.
//TODO: Link Add to campus button with the dropdown box

const EditCampusFormView = (props) => {
  console.log(props);
  const students = () => {
    if (!props.students.length) {
      return <div>There are no students</div>;
    } else {
      return (
        <div className="campus-students">
          {props.students.map((student) => (
            <div key={student.id} className="card mb-3 campus-card">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src="https://via.placeholder.com/150"
                    className="card-img"
                    alt="student"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <Link to={`/students/${student.id}`}>
                      <h5 className="card-title">{student.firstName}</h5>
                    </Link>
                    <p className="card-text">GPA: </p>
                    <div className="student-card-links">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={null}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          ;
        </div>
      );
    }
  };

  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <div>
          Name:{" "}
          <input
            value={props.name}
            name="name"
            onChange={props.handleChange}
          ></input>
        </div>
        <div>
          Address:{" "}
          <input
            value={props.address}
            name="address"
            onChange={props.handleChange}
          ></input>
        </div>
        <div>
          Description:{" "}
          <input
            value={props.description}
            name="description"
            onChange={props.handleChange}
          ></input>
        </div>
        <div>
          Image Url:{" "}
          <input
            value={props.imageUrl}
            name="imageUrl"
            onChange={props.handleChange}
          ></input>
        </div>
        <Button type="submit" variant="contained" color="primary">
          Save Changes
        </Button>
      </form>
      <div className="campus-students-section">
        <h1>Students on Campus</h1>
        <div className="student-options">
          <ComboBoxView />
          <Button variant="contained" color="primary">
            Add to Campus
          </Button>
        </div>
        {students()}
      </div>
    </>
  );
};

EditCampusFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default EditCampusFormView;
