import React from "react";
import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
const AddStudentFormView = (props) => {
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
          Add Student
        </Button>
      </form>
    </>
  );
};

export default AddStudentFormView;
