import React from "react";
import { Switch, Route } from "react-router-dom";
import { AllCampusesContainer, CampusContainer, AllStudentsContainer, StudentContainer } from "../containers";
// TODO: Add StudentContainer
const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={AllCampusesContainer} />
      <Route exact path="/campuses" component={AllCampusesContainer} />
      <Route exact path="/campuses/:id" component={CampusContainer} />
      <Route exact path="/students" component={AllStudentsContainer} />
      <Route exact path="/students/:id" component={StudentContainer} />
    </Switch>
  );
};

export default RoutesView;
