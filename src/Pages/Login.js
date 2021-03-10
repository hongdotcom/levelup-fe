import React from "react";
// import bg from "../static/images/bg.jpg";
import Background from "../Components/Background";
import Navbar from "../Components/Navbar";
import Dropdown from "../Components/Dropdown";
import LoginContent from "../Components/LoginContent/LoginContent";
import { IsMobile } from "../Hooks/IsMobile";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

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
      {IsMobile() ? <Dropdown /> : <Navbar />}
      <div className="loginContainer"></div>
      <LoginContent />
      <Link to="/teacher">
        <Button>LOGIN</Button>
      </Link>
    </div>
  );
};

export default Login;
