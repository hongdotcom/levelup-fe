import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { menuData } from "../Constants/MenuData";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { myContext } from "../Hooks/Context";
const useStyles = makeStyles(() => ({
  Nav: {
    background: "none",
    backgroundImage:
      "linear-gradient( rgba(174, 209, 183,1) 0%, rgba(183, 199, 187,0.4) 60%,rgba(198, 247, 242,0) 100%)",
    height: "25vh",
    width: "100vw",
    display: "flex",
    zIndex: 10,
    justifyContent: "space-between",
  },
  NavLink: {
    color: "#464f4f",
    marginRight: "2rem",
    textDecoration: "none",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "3vh",
    fontWeight: "900",
    listStyleType: "none",
    cursor: "pointer",
    transition: "all 0.2s ease-out",
    "&:hover": {
      opacity: "0.5",
      transform: "scale(1.1)",
    },
  },
  ul: {
    display: "flex",
    marginTop: "4vh",
    alignContent: "center",
    justifyContent: "center",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const userObject = useContext(myContext);
  console.log(userObject);
  const logout = () => {
    axios
      .get("http://localhost:4000/auth/logout", { withCredentials: true })
      .then((res) => {
        if (res.data) {
          window.location.href = "/";
        }
      });
  };
  return (
    <div className={classes.Nav}>
      <Link to="/">
        <Logo />
      </Link>
      <ul className={classes.ul}>
        {userObject
          ? null
          : menuData.map((item, index) => (
              <Link to={item.link} className={classes.NavLink} key={index}>
                <li>{item.title}</li>
              </Link>
            ))}
        {userObject ? (
          <li onClick={logout} className={classes.NavLink}>
            Logout
          </li>
        ) : null}
      </ul>
    </div>
  );
};

export default Navbar;
