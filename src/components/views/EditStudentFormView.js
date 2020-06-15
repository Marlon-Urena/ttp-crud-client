import React from "react";
import PropTypes from "prop-types";
import { TextField, Button } from "@material-ui/core";
import { JumbotronContainer } from "../containers";

//TODO: Connect removeStudentCampus action to remove button
//TODO: Look into possibly getting a list of all students passed in here. Those that are on campus gets put into cards.
//TODO: Link Add to campus button with the dropdown box

const EditStudentFormView = (props) => {
  return (
    <>
      <JumbotronContainer banner={props.banner} toggle={props.toggle} />
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
