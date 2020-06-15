import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  fetchCampusThunk,
  editCampusThunk,
  fetchAllStudentsThunk,
  studentEnrollmentThunk,
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
    this.handleStudentEnrollment = this.handleStudentEnrollment.bind(this);
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

  handleStudentEnrollment = (type, student) => {
    if (type === "unenrollment") {
      console.log(type);
      const id = student.id;
      const unenrolledStudent = { ...student, campusId_FK: null };
      this.props
        .studentEnrollment(id, unenrolledStudent)
        .then(window.location.reload(true));
    } else {
      const id = this.state.student.id;
      this.props.studentEnrollment(id, this.state.student);
    }
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
        handleStudentEnrollment={this.handleStudentEnrollment}
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
    studentEnrollment: (id, student) =>
      dispatch(studentEnrollmentThunk(id, student)),
  };
};

EditCampusFormContainer.propTypes = {
  fetchCampus: PropTypes.func.isRequired,
  editCampus: PropTypes.func.isRequired,
  fetchAllStudents: PropTypes.func.isRequired,
  studentEnrollment: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCampusFormContainer);
