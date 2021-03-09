import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(() => ({
  Topbar: {
    position: "relative",
    top: 0,
    left: "10vw",
    width: "100vw",
    height: "16vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "20px",
    backgroundColor: "#CCE2D9",
  },
  Header: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "3vh",
    fontWeight: "800",
    alignItems: "left",
  },
  Avatar: {
    display: "flex",
    flexDirection: "row",
    margin: "3px",
  },
  Reminder: {},
}));

const Topbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.Topbar}>
      <h1 className={classes.Header}> Student Details</h1>
      <div className={classes.Avatar}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </div>
      <div className={classes.Reminder}>
        <svg
          width="51"
          height="51"
          viewBox="0 0 51 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M41.4375 26.4339V22.3125H38.25V27.0938C38.2501 27.5164 38.4181 27.9217 38.717 28.2205L43.0312 32.5348V35.0625H7.96875V32.5348L12.283 28.2205C12.5819 27.9217 12.7499 27.5164 12.75 27.0938V20.7188C12.7456 18.4792 13.3322 16.2781 14.4507 14.3379C15.5691 12.3976 17.1798 10.7869 19.1201 9.66833C21.0603 8.5498 23.2613 7.96308 25.5009 7.96744C27.7404 7.97181 29.9391 8.5671 31.875 9.69319V6.13116C30.3579 5.45942 28.7443 5.03128 27.0938 4.86253V1.59375H23.9062V4.86094C19.977 5.26086 16.3356 7.10353 13.6861 10.0326C11.0367 12.9617 9.56744 16.7692 9.5625 20.7188V26.4339L5.24822 30.7482C4.94931 31.047 4.78134 31.4523 4.78125 31.875V36.6562C4.78125 37.0789 4.94916 37.4843 5.24805 37.7832C5.54693 38.0821 5.95231 38.25 6.375 38.25H17.5312V39.8438C17.5312 41.9572 18.3708 43.9841 19.8652 45.4785C21.3597 46.9729 23.3866 47.8125 25.5 47.8125C27.6134 47.8125 29.6403 46.9729 31.1348 45.4785C32.6292 43.9841 33.4688 41.9572 33.4688 39.8438V38.25H44.625C45.0477 38.25 45.4531 38.0821 45.752 37.7832C46.0508 37.4843 46.2188 37.0789 46.2188 36.6562V31.875C46.2187 31.4523 46.0507 31.047 45.7518 30.7482L41.4375 26.4339ZM30.2812 39.8438C30.2812 41.1118 29.7775 42.3279 28.8809 43.2246C27.9842 44.1213 26.7681 44.625 25.5 44.625C24.2319 44.625 23.0158 44.1213 22.1191 43.2246C21.2225 42.3279 20.7188 41.1118 20.7188 39.8438V38.25H30.2812V39.8438Z"
            fill="black"
          />
          <path
            d="M41.4375 19.125C44.9583 19.125 47.8125 16.2708 47.8125 12.75C47.8125 9.22918 44.9583 6.375 41.4375 6.375C37.9167 6.375 35.0625 9.22918 35.0625 12.75C35.0625 16.2708 37.9167 19.125 41.4375 19.125Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
};

export default Topbar;
