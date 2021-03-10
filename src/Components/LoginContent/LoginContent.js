import React from "react";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
// import { GoogleLogin } from "react-google-login";
import { Redirect } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import { Button } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
// import { Input } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
const useStyles = makeStyles((theme) => ({
  LoginContainer: {
    position: "absolute",
    top: "-15vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
  },
  LoginHeader: {
    position: "relative",
    display: "flex",
    marginTop: "5vh",
    alignItems: "center",
    justifyContent: "top",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "4vh",
    fontWeight: "1100",
    color: "#154c79",
    zIndex: 10,
  },
  LoginForm: {
    position: "absolute",
    maringLeft: "10vw",
    borderRadius: "15px",
    top: "30vh",
    width: "60vw",
    height: "40vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "rgba(255,255,255,0.7)",
  },
  GoogleContatiner: {
    width: "20vw",
    height: "10vh",
    backgroundColor: "#e82c2c",
    borderRadius: "5px",
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
  LoginButton: {
    witdth: "20vw",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
}));
// const responseFacebook = (response) => {
//   console.log(response);
//   console.log("this is facebook");
//   // return <div> My Protected Component </div>;
//   return <Redirect to="/teacher" />;
//   // setData(response);
//   // setPicture(response.picture.data.url);
//   // if (response.accessToken) {
//   //   return (
//   //     // <Switch>
//   //     // <Redirect to="/teacher" />
//   //     // </Switch>
//   //   );
//   // } else {
//   // setLogin(false);
//   // }
// };
const LoginContent = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className={classes.LoginContainer}>
      <div className={classes.LoginForm}>
        <Logo />
        <h1 className={classes.LoginHeader}>Login</h1>
        <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
          <Input
            id="standard-adornment-password"
            // type={values.showPassword ? 'text' : 'password'}
            // value={values.password}
            // onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  // onClick={handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
                >
                  <AccountCircle />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Link to="/teacher">
          <Button className={classes.LoginButton}>Login</Button>
        </Link>
        <p>or</p>
        {/* <GoogleLogin
          clientId="599126138937-5441fi0karc5dfdbr622qs4a9d47ves3.apps.googleusercontent.com"
          buttonText="LOGIN WITH GOOGLE"
          isSignedIn={true}
          icon="fa-google"
          className={classes.GoogleContatiner}
        /> */}
        <FacebookLogin
          appId="755126425132124"
          // autoLoad={true}
          fields="name,email,picture"
          scope="public_profile,user_friends"
          // callback={responseFacebook}
          icon="fa-facebook"
          className={classes.FacebookContatiner}
        >
          <Redirect to="/teacher" />
        </FacebookLogin>
      </div>
    </div>
  );
};

export default LoginContent;
