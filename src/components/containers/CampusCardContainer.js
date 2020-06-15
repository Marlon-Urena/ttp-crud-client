import React, { Component } from "react";
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

export default CampusCardContainer;
