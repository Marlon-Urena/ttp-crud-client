import React from "react";
import PropTypes from "prop-types";
import { Button, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { JumbotronContainer, StudentRowContainer } from "../containers";
import "./styles/EditCampusFormView.css";

//TODO: Connect removeStudentCampus action to remove button
//TODO: Look into possibly getting a list of all students passed in here. Those that are on campus gets put into cards.
//TODO: Link Add to campus button with the dropdown box

const EditCampusFormView = (props) => {
  const students = () =>
    props.campus.students.map((student) => {
      return (
        <StudentRowContainer
          className="student-row"
          key={student.id}
          student={student}
          handleStudentEnrollment={props.handleStudentEnrollment}
        />
      );
    });
  return (
    <>
      <JumbotronContainer banner={props.banner} toggle={props.toggle} />
      <div className="root">
        <form onSubmit={props.handleSubmit} className="campus-form">
          <div className="campus-input-group">
            <div className="input-field">
              <TextField
                id="name"
                name="name"
                label="Campus Name"
                type="text"
                variant="outlined"
                fullWidth={true}
                value={props.name}
              />
            </div>
            <div className="input-field">
              <TextField
                id="address"
                name="address"
                label="Campus Location"
                type="text"
                variant="outlined"
                fullWidth={true}
                value={props.address}
              />
            </div>
            <div className="input-field">
              <TextField
                id="imageUrl"
                name="imageUrl"
                label="Campus Image URL"
                type="text"
                variant="outlined"
                fullWidth={true}
                value={props.imageUrl}
              />
            </div>
            <div className="input-field">
              <TextField
                id="description"
                name="description"
                label="Campus Description"
                type="text"
                multiline
                rows={5}
                variant="outlined"
                fullWidth={true}
                value={props.description}
              />
            </div>
          </div>
          <div className="save-button">
            <Button type="submit" variant="contained" color="primary">
              Save Changes
            </Button>
          </div>
        </form>
        <div className="campus-students-section">
          <h1 className="campus-edit-heading">Students on Campus</h1>
          <form
            onSubmit={() => props.handleStudentEnrollment("enrollment")}
            className="student-options"
          >
            <Autocomplete
              id="combobox"
              options={props.students.filter((student) => {
                return student.campusId_FK !== props.campus.id;
              })}
              getOptionLabel={(option) =>
                option.firstName + " " + option.lastName
              }
              style={{ width: 200 }}
              size="small"
              onChange={props.handleStudentChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select Student"
                  variant="outlined"
                />
              )}
            />
            <Button
              variant="contained"
              color="primary"
              name="enrollment"
              className="add-student-button"
              type="submit"
            >
              Add to Campus
            </Button>
          </form>
          {props.campus.students.length ? (
            students()
          ) : (
            <h3 className="campus-edit-heading">
              There are no students registered to this campus.
            </h3>
          )}
        </div>
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
