import React from "react";
import { Link } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { CampusCardContainer, JumbotronContainer } from "../containers";

const StudentView = (props) => {
  const enrolledCampus = props.campuses.filter((campus) => {
    return campus.id === props.student.campusId_FK;
  });

  // const campus = () => {
  //   const currentCampus = props.student.campus;
  //   if (!currentCampus) {
  //     return <div>This student is not registered to a campus.</div>;
  //   } else {
  //     return (
  //       <div className="campuses">
  //         <div key={currentCampus.id} className="card mb-3 campus-card">
  //           <div className="row no-gutters">
  //             <div className="col-md-4">
  //               <img
  //                 src={currentCampus.imageUrl}
  //                 className="card-img"
  //                 alt="campus"
  //               />
  //             </div>
  //             <div className="col-md-8">
  //               <div className="card-body">
  //                 <Link to={`/campuses/${currentCampus.id}`}>
  //                   <h5 className="card-title">{currentCampus.name}</h5>
  //                 </Link>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         ;
  //       </div>
  //     );
  //   }
  // };
  return (
    <>
      <JumbotronContainer banner={props.banner} toggle={props.toggle} />
      <div className="student-heading">
        <div className="student-img">
          <img src={props.student.imageUrl} alt="student" />
        </div>
        <div className="student-information">
          <h1 className="student-name">
            {props.student.firstName + " " + props.student.lastName}
          </h1>
          <p className="student-description">{props.student.email}</p>
          <p className="student-gpa">GPA: {props.student.gpa}</p>
        </div>
        <div className="alter-button">
          <Button
            component={Link}
            to={`/students/${props.student.id}/edit`}
            variant="contained"
            color="primary"
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => props.handleDelete(props.student.id)}
          >
            Delete
          </Button>
        </div>
      </div>
      <div className="campus-section">
        <form onSubmit={props.handleSubmit}>
          <Autocomplete
            id="combobox"
            options={props.campuses.filter(
              (campus) => campus.id !== props.student.campusId_FK
            )}
            getOptionLabel={(option) => option.name}
            style={{ width: 200 }}
            size="small"
            onChange={props.handleChange}
            renderInput={(params) => (
              <TextField {...params} label="Select Campus" variant="outlined" />
            )}
          />
          <Button
            className="campus-button"
            variant="contained"
            color="primary"
            type="submit"
          >
            Change Campus
          </Button>
        </form>
      </div>
      {enrolledCampus ? (
        <CampusCardContainer
          campus={enrolledCampus[0]}
          handleDelete={props.handleDelete}
        />
      ) : (
        <div>This student is not registered to a campus.</div>
      )}
    </>
  );
};

export default StudentView;
