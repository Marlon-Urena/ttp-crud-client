import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllCampusesThunk, deleteCampusThunk } from "../../thunks";
import { AllCampusesView } from "../views";

// Smart container;
class AllCampusesContainer extends Component {
  componentDidMount() {
    this.props.fetchAllCampuses();
  }

  handleDelete = (id) => {
    this.props.deleteCampus(id);
  };

  //TODO: Apply grid structure for cards.
  render() {
    return (
      <>
        <AllCampusesView
          allCampuses={this.props.allCampuses}
          handleDelete={this.handleDelete}
          banner={"All Campuses"}
          link={`/campuses/new`}
          linkMessage={"Add Campus"}
          toggle={false}
        />
      </>
    );
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    allCampuses: state.allCampuses,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
    deleteCampus: (id) => dispatch(deleteCampusThunk(id)),
  };
};

// Type check props;
AllCampusesContainer.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  fetchAllCampuses: PropTypes.func.isRequired,
  deleteCampus: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllCampusesContainer);
