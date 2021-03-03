import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { menuData } from "../Constants/MenuData";
import { makeStyles } from "@material-ui/core/styles";
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
    color: "white",
    marginRight: "2rem",
    textDecoration: "none",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "3vh",
    fontWeight: "800",
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
  return (
    <div className={classes.Nav}>
      <Link to="/">
        <Logo />
      </Link>
      <ul className={classes.ul}>
        {menuData.map((item, index) => (
          <Link to={item.link} className={classes.NavLink} key={index}>
            <li>{item.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
