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
        <Link to="/sign-in"> Sign In </Link>
        <Link to="/home"> Home </Link>
        <Link to="/donations"> Donations </Link>

        <Switch>
          <Route path="/donations">
            Donations
          </Route>
          <Route path="/sign-in">
            Sign in
          </Route>
          <Route path="/home">
            Home 
          </Route>
          <Route path="/">
            Home
          </Route>
        </Switch>
        </Router>
      <h1>Task Form</h1>

      <TaskForm />

      <ul>
        {tasks.map((task) => (
          <Task
            key={task._id}
            task={task}
            onCheckboxClick={toggleChecked}
            onDeleteClick={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};
