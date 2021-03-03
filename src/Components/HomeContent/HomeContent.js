import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  contentFrame: {
    position: "absolute",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
    width: "100vw",
    height: "100vh",
    zIndex: 100,
  },
}));
const HomeContent = () => {
  const classes = useStyles();

  return (
    <div className={classes.contentFrame}>
      <h1>test docker run</h1>
    </div>
  );
};

export default HomeContent;
