import React, { Component } from "react";
import {
  deleteStudentThunk,
  fetchAllCampusesThunk,
  fetchStudentThunk,
  editStudentThunk,
} from "../../thunks";
import { connect } from "react-redux";
import { StudentView } from "../views";

class StudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: {},
      loading: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.props.fetchStudent(this.props.match.params.id).then(({ payload }) => {
      this.setState({ student: Object.assign(payload, {}), loading: false });
    });
    this.props.fetchAllCampuses();
  }

  handleChange = (e, campus) => {
    console.log(campus);
    this.setState((prevState) => ({
      student: { ...prevState.student, campusId_FK: campus.id },
    }));
  };

  handleSubmit = (e) => {
    const id = this.props.match.params.id;
    this.props.editStudent(id, this.state.student);
  };

  handleDelete = (id) => {
    this.props.deleteStudent(id);
  };

  render() {
    console.log(this.props);
    return this.state.loading ? (
      <></>
    ) : (
      <StudentView
        handleDelete={this.handleDelete}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        student={this.props.student}
        campuses={this.props.allCampuses}
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
    allCampuses: state.allCampuses,
  };
};

/**
 * Map dispatch to props.
 * Optional Param: ownProps (Can be an alternative to binding prop to re-render vs bind on prop change)
 * Runs when new props are loaded into component.
 * Return: Dispatches an action and returns the changes as an object to props.
 */
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
    editStudent: (id, student) => dispatch(editStudentThunk(id, student)),
    deleteStudent: (id) => dispatch(deleteStudentThunk(id, ownProps)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentContainer);
