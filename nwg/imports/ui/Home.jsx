import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
export const Home = () => {
  return (
    <div>
      <Link to="/sign-in"> Sign In </Link>
      <Link to="/home"> Home </Link>
      <Link to="/donations"> Donations </Link>
      <Link to="/map"> Map </Link>
    </div>
  );
};
