import React, { useContext } from "react";
import { CssBaseline } from "@material-ui/core";
import Fonts from "./Components/Fonts";
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route, Redirect } from "react-router-dom";

import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Home from "./Pages/Home";

import Teacher from "./Pages/Teacher";
import Student from "./Pages/Student";
import StudentList from "./Pages/StudentList";
import { myContext } from "./Hooks/Context";

const useStyles = makeStyles(() => ({
  root: {
    // width: "100vw",
    // height: "100vh",
    // maxWidth: "1600px",
  },
}));

export default function App() {
  const classes = useStyles();
  const userObject = useContext(myContext);
  console.log(userObject);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Fonts />
      <Switch>
        {userObject ? null : <Route path="/login" component={Login} />}
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/student" component={Student} />
        <Route path="/signup" component={Signup} />
        <Route path="/studentlist" component={StudentList} />

        <Route path="/teacher" component={Teacher} />

        {/* Redirect all 404 to Home*/}
        <Redirect to="/" />
      </Switch>
    </div>
  );
}
