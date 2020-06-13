import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchCampusThunk, editCampusThunk } from "../../thunks";
import { EditCampusFormView } from "../views";

class EditCampusFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      description: "",
      imageUrl: "",
    };
  }

  componentDidMount() {
    console.log(this.props.match);
    this.props.fetchCampus(this.props.match.params.id).then(({ payload }) => {
      this.setState(payload);
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    this.props.editCampus(id, this.state);
  };

  render() {
    return (
      <EditCampusFormView
        name={this.state.name}
        address={this.state.address}
        description={this.state.description}
        students={this.props.campus.students}
        imageUrl={this.state.imageUrl}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    campus: state.campus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    editCampus: (id, campus) => dispatch(editCampusThunk(id, campus)),
  };
};

EditCampusFormContainer.propTypes = {
  fetchCampus: PropTypes.func.isRequired,
  editCampus: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCampusFormContainer);
