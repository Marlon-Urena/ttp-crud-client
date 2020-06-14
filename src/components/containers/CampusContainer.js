import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteCampusThunk, fetchCampusThunk } from "../../thunks";

import { CampusView } from "../views";

class CampusContainer extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.fetchCampus(this.props.match.params.id);
  }
  handleDelete = (id) => {
    this.props.deleteCampus(id);
  };

  render() {
    return (
      <CampusView
        handleDelete={this.handleDelete}
        students={this.props.campus.students}
        campus={this.props.campus}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  console.log(state);
  return {
    campus: state.campus,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    deleteCampus: (id, ownProps) => dispatch(deleteCampusThunk(id, ownProps)),
  };
};

export default connect(mapState, mapDispatch)(CampusContainer);
