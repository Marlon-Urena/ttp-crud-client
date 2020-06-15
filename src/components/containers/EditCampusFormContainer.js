import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  fetchCampusThunk,
  editCampusThunk,
  fetchAllStudentsThunk,
  enrollStudentThunk,
} from "../../thunks";
import { EditCampusFormView } from "../views";

class EditCampusFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      description: "",
      imageUrl: "",
      student: {},
    };
    this.handleStudentChange = this.handleStudentChange.bind(this);
    this.handleEnrollStudent = this.handleEnrollStudent.bind(this);
  }

  componentDidMount() {
    this.props.fetchCampus(this.props.match.params.id).then(({ payload }) => {
      this.setState(payload);
    });
    this.props.fetchAllStudents();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    this.props.editCampus(id, this.state);
  };

  handleStudentChange = (e, student) => {
    const id = this.props.match.params.id;
    this.setState({ student: { ...student, campusId_FK: id } });
  };

  handleEnrollStudent = (e) => {
    const id = this.state.student.id;
    this.props.enrollStudent(id, this.state.student);
  };

  render() {
    return (
      <EditCampusFormView
        name={this.state.name}
        address={this.state.address}
        description={this.state.description}
        students={this.props.allStudents}
        campus={this.props.campus}
        imageUrl={this.state.imageUrl}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleEnrollStudent={this.handleEnrollStudent}
        handleStudentChange={this.handleStudentChange}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    campus: state.campus,
    allStudents: state.allStudents,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    editCampus: (id, campus) => dispatch(editCampusThunk(id, campus, ownProps)),
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
    enrollStudent: (id, student) => dispatch(enrollStudentThunk(id, student)),
  };
};

EditCampusFormContainer.propTypes = {
  fetchCampus: PropTypes.func.isRequired,
  editCampus: PropTypes.func.isRequired,
  fetchAllStudents: PropTypes.func.isRequired,
  enrollStudent: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCampusFormContainer);
