import React from "react";
import { CssBaseline } from "@material-ui/core";
import Fonts from "./Components/Fonts";
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route, Redirect } from "react-router-dom";
import { Routes } from "./Constants/Routes";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
const useStyles = makeStyles(() => ({
  root: {
    width: "100vw",
    height: "100vh",
    maxWidth: "1600px",
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Fonts />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path={Routes.Login} component={Login} />
        <Route path={Routes.Sigup} component={Signup} />
        {/* Redirect all 404 to Home*/}
        <Redirect to="/" />
      </Switch>
    </div>
  );
}
