import React, { Component } from "react";
import { JumbotronView } from "../views";

class JumbotronContainer extends Component {
  render() {
    return <JumbotronView {...this.props} />;
  }
}

export default JumbotronContainer;
