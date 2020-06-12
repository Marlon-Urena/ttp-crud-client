import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import ComboBox from "./ComboBox";
import { Link } from "react-router-dom";

const EditCampusFormView = (props) => {
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
          <ComboBox />
          <Button variant="contained" color="primary">
            Add to Campus
          </Button>
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
