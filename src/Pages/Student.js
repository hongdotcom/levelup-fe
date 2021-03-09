import React, { useState, useEffect } from "react";
import VerticalNavbar from "../Components/VerticalNavbar";
import TopBar from "../Components/Topbar";
import avatar1 from "../static/images/avatar1.png";
import creative from "../static/images/creative.png";
import code from "../static/images/code.png";
import present from "../static/images/present.png";
import chart from "../static/images/chart.png";
import strength from "../static/images/spider.png";
import polygon from "../static/images/polygon.png";
import "./student.css";

const Student = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [students, setStudents] = useState([]);

  const fetchItems = async () => {
    const response = await fetch("http://localhost:4000/students/", {
      method: "GET",
      headers: { "Content-type": "application/json;charset=UTF-8" },
    });
    const data = await response.json();

    setStudents(data);
    console.log(students);
  };
  // const classes = useStyles();
  return (
    <div>
      <VerticalNavbar />
      <TopBar />
      <div className="grid-container">
        <div className="avatarArea">
          <img src={avatar1} alt="avt1" />
        </div>
        <div className="nameArea">
          <h1 className="headerText">Wayne Leung</h1>
        </div>
        <div className="h2Area">
          <h1 className="headerText">Student Learning Record</h1>
        </div>
        <div className="studentArea">
          <h2 className="h2Text">Student ID #1111</h2>
          <p className="pText">
            D.O.B 03/05/2014
            <br /> Class : Botany Downs Library Programming
            <br />
            Background: Beginner
          </p>
        </div>
        <div className="parentArea">
          <h2 className="h2Text">Parent Details</h2>
          <p className="pText">
            Tony Leung
            <br /> 027 777 7777
            <br />
            tonyleung1997@gmail.com
          </p>
        </div>
        <div className="paymentArea">
          <h2 className="h2Text">Payments</h2>
          <p className="pText">
            Paid for the period from
            <br /> 2020-02-01 to 2021-12-31
          </p>
        </div>
        <div className="attendenceArea">
          <h1 className="headerText">Attendance 83%</h1>
        </div>
        <div className="progressArea">
          <h2 className="h2Text">Project 4 / 51</h2>
          <br />
          <svg
            width="267"
            height="24"
            viewBox="0 0 267 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="267"
              height="24"
              rx="12"
              fill="#C4C4C4"
              fillOpacity="0.6"
            />
            <svg
              width="55"
              height="24"
              viewBox="0 0 55 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="55" height="24" rx="12" fill="#F2B150" />
            </svg>
          </svg>
        </div>
        <div className="prArea">
          <div className="skillArea">
            <h2 className="h2Text">Skill Gained</h2>
            <br />
            <img src={code} alt="avt1" />
            <img src={creative} alt="avt1" />
            <img src={present} alt="avt1" />
          </div>
          <div className="quizArea">
            <h2 className="h2Text">Quiz Scores</h2>
            <img src={chart} alt="avt1" />
          </div>
        </div>
        <div className="strengthArea">
          <h2 className="h2Text">Strengths & Weaknesses</h2>
          <div className="spiderContainer">
            <img src={strength} alt="avt1" />
          </div>
          <div className="spiderInnerContainer">
            <img src={polygon} alt="avt1" />
          </div>
        </div>
        <div className="commentArea">
          <h1 className="headerText">Latest Feedback</h1>
          <p className="pText">
            “David is a very bright student, always engaging in the class
            material. He seems to enjoy coding.”
          </p>
        </div>
      </div>
      {/* <div className={classes.detailContainer}>
        <div className={classes.middleContainer}>
          <div className={classes.innerContainer}>
            <table>
              <tbody>
                <tr>
                  <th> name</th>
                  <th> age</th>
                </tr>
                {students.map((student, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        {student.firstname} {student.surname}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Student;
