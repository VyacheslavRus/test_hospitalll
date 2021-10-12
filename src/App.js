import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { Employees } from "./pages/Employees";
import { Worklog } from "./pages/Worklog";
import { getDoctorsOperation } from "./redux/doctors/doctorsOperations";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctorsOperation());
  }, [dispatch]);

  return (
    <Switch>
      <Redirect exact path="/" to="/api/employees" />
      <Route exact path="/api/employees" component={Employees} />
      <Route path="/api/employees/worklog/:id" component={Worklog} />
    </Switch>
  );
}

export default App;
