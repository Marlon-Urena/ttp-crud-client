import React, { Component } from "react";
import { StudentRowView } from "../views";

class StudentRowContainer extends Component {
  render() {
    return <StudentRowView student={this.props.student} />;
  }
}

export default StudentRowContainer;
