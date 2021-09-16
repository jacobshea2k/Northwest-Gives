// ----------------------------------------------------------------------
// List of imports:
// -
// -
// ----------------------------------------------------------------------

// App jsx contains all the components that the website uses
// and combines / organizes them
import React from "react";
import { TasksCollection } from "/imports/api/TasksCollection";
import { useTracker } from "meteor/react-meteor-data";
import { Task } from "./Task";
import { TaskForm } from "./TaskForm";
import { Home } from './Home.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const toggleChecked = ({ _id, isChecked }) => {
  TasksCollection.update(_id, {
    $set: {
      isChecked: !isChecked,
    },
  });
};

const deleteTask = ({ _id }) => TasksCollection.remove(_id);

export const App = () => {
  const tasks = useTracker(() =>
    TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch()
  );

  return (
    <div>
      <h1>Header</h1>
        <Router>
        <Switch>
          <Route path="/donations">
            Donations
          </Route>
          <Route path="/home">
            <Home/> 
          </Route>
          <Route path="/map">
            Map
          </Route>
          <Route path="/sign-in">
            Sign in
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
        </Router>
    </div>
  );
};
