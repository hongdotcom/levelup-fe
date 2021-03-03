import React from "react";
import bg from "../static/images/bg.jpg";
import Background from "../Components/Background";
import Navbar from "../Components/Navbar";
import { IsMobile } from "../Hooks/IsMobile";
import Dropdown from "../Components/Dropdown";
import HomeContent from "../Components/HomeContent/HomeContent";
import { makeStyles } from "@material-ui/core/styles";

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

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.home} id="homeContainer">
      <Background customStyles={details.bgStyle} />
      {IsMobile() ? <Dropdown /> : <Navbar />}
      <HomeContent />
    </div>
  );
};

export default Home;
