import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchAllCampusesThunk, fetchAllStudentsThunk } from "../../thunks";
import { ComboBoxView } from "../views";

class ComboBoxContainer extends Component {
  // componentDidMount() {
  //   this.props.fetchAllStudents();
  //   this.props.fetchAllCampuses();
  // }

  render() {
    return <ComboBoxView group={this.props.group} />;
  }
}
// const mapStateToProps = (state) => {
//   return {
//     allStudents: state.allStudents,
//     allCampuses: state.allCampuses,
//   };
// };
//
// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
//     fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
//   };
// };
//
// ComboBoxContainer.propTypes = {
//   fetchAllCampuses: PropTypes.func.isRequired,
//   fetchAllStudents: PropTypes.func.isRequired,
// };

export default ComboBoxContainer;
