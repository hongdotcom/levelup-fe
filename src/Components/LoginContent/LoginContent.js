import React from "react";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  LoginContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
    flexDirection: "column",
  },
  LoginHeader: {
    position: "relative",
    display: "flex",
    marginTop: "10vh",
    alignItems: "center",
    justifyContent: "top",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "5vh",
    fontWeight: "1100",
    color: "#154c79",
    zIndex: 10,
  },
  LoginForm: {
    position: "absolute",
    maringLeft: "10vw",
    borderRadius: "5%",
    top: "30vh",
    width: "80vw",
    height: "40vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "top",
    flexDirection: "column",
    backgroundColor: "rgba(255,255,255,0.7)",
  },
  GoogleContatiner: {
    width: "20vw",
    height: "10vh",
    backgroundColor: "#e82c2c",
    borderRadius: "3px",
    marginTop: "5vh",
    paddingLeft: "6%",
    paddingTop: "3px",
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "5vh",
    overflow: "hidden",
  },
  FacebookContatiner: {
    width: "20vw",
    height: "10%",
    backgroundColor: "#138c9c",
    borderRadius: "3px",
    paddingLeft: "6%",
    paddingTop: "3px",
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
}));
const responseFacebook = (response) => {
  console.log(response);
  console.log("this is facebook");
  // setData(response);
  // setPicture(response.picture.data.url);
  // if (response.accessToken) {
  //   setLogin(true);
  // } else {
  //   setLogin(false);
  // }
};
const responseGoogle = (response) => {
  console.log(response);
  console.log("this is facebook");

  // setData(response);
  // setPicture(response.picture.data.url);
  // if (response.accessToken) {
  //   setLogin(true);
  // } else {
  //   setLogin(false);
  // }
};
const LoginContent = () => {
  const classes = useStyles();
  return (
    <div className={classes.LoginContainer}>
      <div className={classes.LoginForm}>
        <h1 className={classes.LoginHeader}>Login</h1>
        <GoogleLogin
          clientId="599126138937-5441fi0karc5dfdbr622qs4a9d47ves3.apps.googleusercontent.com"
          buttonText="Login with Google"
          icon="fa-google"
          isSignedIn={true}
          callback={responseGoogle}
          className={classes.GoogleContatiner}
        />
        <p></p>
        <FacebookLogin
          appId="755126425132124"
          // autoLoad={true}
          fields="name,email,picture"
          scope="public_profile,user_friends"
          callback={responseFacebook}
          icon="fa-facebook"
          className={classes.FacebookContatiner}
        />
      </div>
    </div>
  );
};

export default LoginContent;
