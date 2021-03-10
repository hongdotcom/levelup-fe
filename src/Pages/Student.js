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
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import "./student.css";
const Student = (props) => {
  const selectedId = props.location.state.id;
  useEffect((selectedId) => {
    fetchItems();
    fetchCheckpoint();
    fetchSkills(selectedId);
  }, []);

  const [student, setStudents] = useState([]);
  const [checkpoint, setCheckpoint] = useState([]);
  const [skills, setSkills] = useState([]);

  const fetchSkills = async () => {
    // console.log("http://localhost:4000/students/findskill/" + selectedId);
    const response = await fetch(
      "http://localhost:4000/students/findskill/" + selectedId,
      {
        method: "GET",
        headers: { "Content-type": "application/json;charset=UTF-8" },
      }
    );
    const data = await response.json();
    // console.log(data);
    setSkills(data);
    // console.log(skills);
  };

  const fetchCheckpoint = async () => {
    const response = await fetch(
      "http://localhost:4000/students/lastcheckpoint/" + selectedId,
      {
        method: "GET",
        headers: { "Content-type": "application/json;charset=UTF-8" },
      }
    );
    const data = await response.json();
    // console.log(data);
    setCheckpoint(data);
    // console.log(checkpoint);
  };

  const fetchItems = async () => {
    const response = await fetch(
      "http://localhost:4000/students/id/" + selectedId,
      {
        method: "GET",
        headers: { "Content-type": "application/json;charset=UTF-8" },
      }
    );
    const data = await response.json();

    setStudents(data);
    // console.log(student);
  };
  const getAge = (dateString) => {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };
  const stuid = String(`${student._id}`).slice(-4);
  const headerTitle = "Student Details";
  return (
    <div>
      <VerticalNavbar />
      <TopBar headerTitle={headerTitle} />
      <div className="grid-container">
        <div className="avatarArea">
          <img src={avatar1} alt="avt1" />
        </div>
        <div className="nameArea">
          <h1 className="headerText">
            {student.firstname} {student.surname}
          </h1>
        </div>
        <div className="h2Area">
          <h1 className="headerText">Student Learning Record</h1>
        </div>
        <div className="studentArea">
          <h2 className="h2Text">Student ID #{stuid}</h2>
          <div className="pText">
            Age: {getAge(student.dob)}
            <br />
            Class :
            <a
              href="https://bookings.aucklandcouncil.govt.nz/facilities/facility/botany-library"
              target="_blank"
              rel="noopener noreferrer"
            >
              Botany Downs Library Programming
            </a>
            <br />
            Background: Beginner
          </div>
        </div>
        <div className="parentArea">
          <h2 className="h2Text">Parent Details</h2>
          <p className="pText">
            Tony Leung
            <br /> <a href="tel:123-456-7890">027 777 7777&nbsp;&nbsp;</a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://api.whatsapp.com/send?phone=64272262767&text=Hi%20Wayne,%20I%20would%20like%20to%20chat%20with%20you%20for%20my%20company%27s%20open%20position."
            >
              <WhatsAppIcon />
            </a>
            <br />
            <a href="mailto: {student.email}">{student.email}</a>
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
          <h2 className="h2Text">{checkpoint.checkpoint_name} / 51</h2>
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
            <h2 className="h2Text">Recent Skill Gained</h2>
            <img src={code} alt="avt1" />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <img src={creative} alt="avt1" />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <img src={present} alt="avt1" />
            &nbsp;&nbsp;
            <div className="skillText">
              {skills.map((skill, index) => {
                return (
                  <div key={index}>
                    {skill.skill_name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </div>
                );
              })}
            </div>
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
          <p className="pText">“{checkpoint.comment}”</p>
        </div>
      </div>
    </div>
  );
};

export default Student;
