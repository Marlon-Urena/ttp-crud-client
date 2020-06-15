import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchAllCampusesThunk, fetchAllStudentsThunk } from "../../thunks";
import { ComboBoxView } from "../views";

class ComboBoxContainer extends Component {
  render() {
    return (
      <ComboBoxView
        group={this.props.group}
        handleChange={this.props.handleChange}
      />
    );
  }
}

export default ComboBoxContainer;
