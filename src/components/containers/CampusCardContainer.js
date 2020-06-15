import React, { Component } from "react";
import PropTypes from "prop-types";
import { CampusCardView } from "../views";

class CampusCardContainer extends Component {
  render() {
    return (
      <CampusCardView
        campus={this.props.campus}
        handleDelete={this.props.handleDelete}
      />
    );
  }
}

CampusCardContainer.propTypes = {
  campus: PropTypes.object.isRequired,
};
export default CampusCardContainer;
