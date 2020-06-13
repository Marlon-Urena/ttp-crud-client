import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addStudentThunk } from "../../thunks";
import { AddStudentFormView } from "../views";

class AddStudentFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      gpa: 0.0,
      email: "",
      imageUrl: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addStudent(this.state);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <AddStudentFormView
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addStudent: (student) => dispatch(addStudentThunk(student, ownProps)),
  };
};
AddStudentFormContainer.propTypes = {
  addStudent: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  gpa: PropTypes.number,
  imageUrl: PropTypes.string,
};
export default connect(null, mapDispatchToProps)(AddStudentFormContainer);
