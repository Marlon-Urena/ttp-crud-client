import React, { Component } from "react";
import { StudentCardView } from "../views";

class StudentCardContainer extends Component {
  render() {
    return (
      <StudentCardView
        student={this.props.student}
        campus={this.props.campus}
      />
    );
  }
}

export default StudentCardContainer;
