import React from "react";
import "./styles/AllCampusesView.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = (props) => {
  if (!props.allCampuses.length) {
    return <div className="all-campuses">There are no campuses</div>;
  }

  //TODO: Create a link to delete campues
  return (
    <div className="all-campuses">
      {props.allCampuses.map((campus) => (
        <div key={campus.id} className="card mb-3 campus-card">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src="https://via.placeholder.com/150"
                className="card-img"
                alt="campus"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <Link to={`/campuses/${campus.id}`}>
                  <h5 className="card-title">{campus.name}</h5>
                </Link>
                <p className="card-text">{campus.description}</p>
                <div className="campus-card-links">
                  <Link to={`/campuses/edit/${campus.id}`}>
                    <p className="card-link">Edit</p>
                  </Link>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={null}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      ;
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
