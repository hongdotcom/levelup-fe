import React from "react";
import Background from "../Components/Background";
import LoginContent from "../Components/LoginContent/LoginContent";
// import { IsMobile } from "../Hooks/IsMobile";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../Components/Logo";

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
    backgroundColor: "#e0ebe6",
    zIndex: -100,
  },
};
const Login = () => {
  const classes = useStyles();
  return (
    <div className={classes.home} id="homeContainer">
      <Background customStyles={details.bgStyle} />
      <Logo />
      <div className="loginContainer"></div>
      <LoginContent />
    </div>
  );
};

export default Login;
