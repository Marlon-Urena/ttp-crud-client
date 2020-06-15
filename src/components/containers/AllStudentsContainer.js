import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllStudentsThunk } from "../../thunks";
import { AllStudentsView } from "../views";

/**
 * Smart container
 * Are stateful components which keeps track of state
 * */
class AllStudentsContainer extends Component {
  componentDidMount() {
    this.props.fetchAllStudents();
  }

  render() {
    return (
      <AllStudentsView
        allStudents={this.props.allStudents}
        banner={"All Students"}
        link={`/students/add`}
        linkMessage={"Add Student"}
        toggle={false}
      />
    );
  }
}

/**
 * Map state to props.
 * Optional Param: ownProps (if comp needs its own props to get data from the store).
 * Return: New store state in the form of an object. Each field becomes prop in
 * component. Subscribes to store changes only if a difference is present between props and store.
 * */
const mapStateToProps = (state) => {
  return {
    allStudents: state.allStudents,
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
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
  };
};

AllStudentsContainer.propTypes = {
  allStudents: PropTypes.array.isRequired,
  fetchAllStudents: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllStudentsContainer);
