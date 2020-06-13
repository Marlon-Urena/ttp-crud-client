import React, { Component } from "react";
import { deleteStudentThunk, fetchStudentThunk } from "../../thunks";
import { connect } from "react-redux";
import { StudentView } from "../views";

class StudentContainer extends Component {
  componentDidMount() {
    this.props.fetchStudent(this.props.match.params.id);
  }

  handleDelete = (id) => {
    this.props.deleteStudent(id);
  };

  render() {
    return (
      <StudentView
        handleDelete={this.handleDelete}
        student={this.props.student}
      />
    );
  }
}

/**
 * Map state to props.
 *
 * Optional Param: ownProps (if comp needs its own props to get data from the store).
 *
 * Return: New store state in the form of an object. Each field becomes prop in
 * component. Subscribes to store changes only if a difference is present between props and store.
 * */
const mapStateToProps = (state) => {
  return {
    student: state.student,
  };
};

/**
 * Map dispatch to props.
 * Optional Param: ownProps (Can be an alternative to binding prop to re-render vs bind on prop change)
 * Runs when new props are loaded into component.
 * Return: Dispatches an action and returns the changes as an object to props.
 */
const mapDispatchToProps = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    deleteStudent: (id) => dispatch(deleteStudentThunk(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentContainer);
