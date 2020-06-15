import React, { Component } from "react";
import { StudentRowView } from "../views";

class StudentRowContainer extends Component {
  render() {
    return (
      <StudentRowView
        handleStudentEnrollment={this.props.handleStudentEnrollment}
        student={this.props.student}
      />
    );
  }
}

export default StudentRowContainer;
