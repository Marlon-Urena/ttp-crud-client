import React, { Component } from "react";
import { JumbotronView } from "../views";

class JumbotronContainer extends Component {
  render() {
    return (
      <JumbotronView
        isToggle={this.props.toggle}
        link={this.props.link}
        linkMessage={this.props.linkMessage}
        banner={this.props.banner}
      />
    );
  }
}

export default JumbotronContainer;
