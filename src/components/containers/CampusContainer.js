import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteCampusThunk, fetchCampusThunk } from "../../thunks";
import { CampusView } from "../views";

class CampusContainer extends Component {
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
        campus={this.props.campus}
        banner={"Show Campus"}
        toggle={true}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    campus: state.campus,
  };
};

const mapDispatch = (dispatch, ownProps) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    deleteCampus: (id) => dispatch(deleteCampusThunk(id, ownProps)),
  };
};

export default connect(mapState, mapDispatch)(CampusContainer);
