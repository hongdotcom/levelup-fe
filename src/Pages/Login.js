import React from "react";
import bg from "../static/images/bg.jpg";
import Background from "../Components/Background";
import Navbar from "../Components/Navbar";
import Dropdown from "../Components/Dropdown";
import LoginContent from "../Components/LoginContent/LoginContent";
import { IsMobile } from "../Hooks/IsMobile";
import { makeStyles } from "@material-ui/core/styles";
// import { googleOAuth2 } from "../Actions/Google";
const useStyles = makeStyles(() => ({
  home: {
    width: "100vw",
    height: "100vh",
    maxWidth: "1600px",
  },
}));
const details = {
  bgStyle: {
    backgroundImage: "url(" + bg + ")",
    zIndex: -100,
  },
};
const Login = () => {
  const classes = useStyles();
  return (
    <div className={classes.home} id="homeContainer">
      <Background customStyles={details.bgStyle} />
      {IsMobile() ? <Dropdown /> : <Navbar />}
      <LoginContent />
    </div>
  );
};

export default Login;
