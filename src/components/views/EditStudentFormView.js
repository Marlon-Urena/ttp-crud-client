import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";

//TODO: Connect removeStudentCampus action to remove button
//TODO: Look into possibly getting a list of all students passed in here. Those that are on campus gets put into cards.
//TODO: Link Add to campus button with the dropdown box

const EditStudentFormView = (props) => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <div>
          <TextField
            id="first-name"
            name="firstName"
            label="First Name"
            type="text"
            value={props.firstName}
            onChange={props.handleChange}
          />
          <TextField
            id="last-name"
            name="lastName"
            label="Last Name"
            type="text"
            value={props.lastName}
            onChange={props.handleChange}
          />
        </div>
        <div>
          <TextField
            id="email"
            name="email"
            label="Email"
            type="email"
            value={props.email}
            onChange={props.handleChange}
          />
        </div>
        <div>
          <TextField
            id="gpa"
            name="gpa"
            label="GPA"
            type="text"
            value={props.gpa}
            onChange={props.handleChange}
          />
        </div>
        <div>
          <TextField
            id="imageUrl"
            name="imageUrl"
            label="ImageURL"
            type="text"
            value={props.imageUrl}
            onChange={props.handleChange}
          />
        </div>
        <Button type="submit" variant="contained" color="primary">
          Save Changes
        </Button>
      </form>
    </>
  );
};

EditStudentFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  gpa: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default EditStudentFormView;
