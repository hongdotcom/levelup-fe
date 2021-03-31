import React from "react";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import { Button } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import googleImage from "../../static/images/googleImage.png";
import githubImage from "../../static/images/githubImage.png";
import twitterImage from "../../static/images/twitterImage.png";
import facebookImage from "../../static/images/facebook.jpg";

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
  googleContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "300px",
    height: "50px",
    background: "#ea4335",
    position: "relative",
    color: "white",
    fontFamily: "Poppins, sans-serif",
    fontSize: "1rem",
    fontWeight: "400",
    cursor: "pointer",
    margin: "10px",
    borderRadius: "8px",
  },
  googleContainerImg: {
    width: "12.5%",
    height: "100%",
    objectFit: "contain",
    left: "10px",
    borderRadius: "3px",
    position: "absolute",
  },
  githubContainer: {
    background: "rgb(56, 56, 56)",
  },
  twitterContainer: {
    background: "#00a2f4",
  },
  facebookContainer: {
    background: "#4267B2",
  },
  LoginButton: {
    backgroundColor: "#CCE2D9",
    marginTop: "30px",
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
const LoginContent = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const googleLogin = () => {
    window.open("http://localhost:4000/auth/google", "_self");
  };

  const githubLogin = () => {
    window.open("http://localhost:4000/auth/github", "_self");
  };

  const twitterLogin = () => {
    window.location.href = "http://localhost:4000/auth/twitter";
  };

  const facebookLogin = () => {
    window.location.href = "http://localhost:4000/auth/facebook";
  };
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
          <Button
            variant="outlined"
            color="primary"
            size="large"
            className={classes.LoginButton}
          >
            Login
          </Button>
        </Link>
        <p>or</p>
        <div className={classes.googleContainer} onClick={googleLogin}>
          <img
            src={googleImage}
            alt="Google Icon"
            className={classes.googleContainerImg}
          />
          <p>Login With Google</p>
        </div>

        <div
          className={`${classes.googleContainer} ${classes.githubContainer}`}
          onClick={githubLogin}
        >
          <img
            src={githubImage}
            alt="Github Icon"
            className={classes.googleContainerImg}
          />
          <p>Login With Github</p>
        </div>

        <div
          className={`${classes.googleContainer} ${classes.twitterContainer}`}
          onClick={twitterLogin}
        >
          <img
            src={twitterImage}
            alt="Twitter Icon"
            className={classes.googleContainerImg}
          />
          <p>Login With Twitter</p>
        </div>

        <div
          className={`${classes.googleContainer} ${classes.facebookContainer}`}
          onClick={facebookLogin}
        >
          <img
            src={facebookImage}
            alt="Facebook Icon"
            className={classes.googleContainerImg}
          />
          <p>Login With Facebook</p>
        </div>
      </div>
    </div>
  );
};

export default LoginContent;
