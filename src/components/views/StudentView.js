import React from "react";

const StudentView = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
      <h3>{props.email}</h3>
    </>
  );
};

export default StudentView;