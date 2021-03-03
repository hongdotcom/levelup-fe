import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../static/images/logo_transparent.png";

const useStyles = makeStyles(() => ({
  Logo: {
    height: "18vh",
    marginTop: "0",
  },
}));
const Logo = () => {
  const classes = useStyles();
  return <img src={logo} alt="logo" className={classes.Logo} />;
};

export default Logo;
