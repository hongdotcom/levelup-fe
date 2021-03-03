import React, { useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import CancelIcon from "@material-ui/icons/Cancel";
import { menuData } from "../Constants/MenuData";
// import { CSSTransition } from "react-transition-group";
const useStyles = makeStyles(() => ({
  mobileNav: {
    background: "none",
    backgroundImage:
      "linear-gradient( rgba(19, 84, 122,1) 0%, rgba(50, 190, 242,0.4) 80%,rgba(198, 247, 242,0) 100%)",
    height: "25vh",
    display: "flex",
    zIndex: 10,
    justifyContent: "space-between",
  },
  mobileMenuIcon: {
    color: "white",
    position: "absolute",
    top: "0.25rem",
    right: "0.5rem",
    cursor: "pointer",
    marginTop: "1rem",
    marginRight: "2rem",
    fontSize: "8vh",
    height: "12vh",
    transition: "all 0.2s ease-out",
    "&:hover": {
      opacity: "0.5",
      transform: "scale(1.1)",
    },
  },
  dropdownContainer: {
    backgroundImage:
      "linear-gradient( rgba(19, 84, 122,1) 0%, rgba(150, 247, 242,0.3) 70%,rgba(198, 247, 242,0) 100%)",
    position: "absolute",
    display: "inline-grid",
    alignItems: "center",
    zIndex: 900,
    width: "100vw",
    height: "100vh",
  },
  mobileList: {},
  mobileListItem: {
    color: "white",
    marginRight: "2rem",
    textDecoration: "none",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "3vh",
    fontWeight: "800",
    listStyleType: "none",
    cursor: "pointer",
    transition: "all 0.5s ease-in-out",
    textAlign: "center",
    "&:hover": {
      fontSize: "4.2vh",
      color: "grey",
    },
  },
}));

const Dropdown = () => {
  const classes = useStyles();
  const [isopen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isopen);
  };
  return (
    <div className={classes.mobileNav}>
      <Link to="/">
        <Logo />
      </Link>
      <BeachAccessIcon className={classes.mobileMenuIcon} onClick={toggle} />
      {isopen ? (
        <div className={classes.dropdownContainer} onClick={toggle}>
          <CancelIcon className={classes.mobileMenuIcon} onClick={toggle} />
          <ul className={classes.mobileList}>
            {menuData.map((item, index) => (
              <Link
                to={item.link}
                className={classes.mobileListItem}
                key={index}
              >
                <li>{item.title}</li>
              </Link>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
