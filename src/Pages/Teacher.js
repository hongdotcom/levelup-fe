import React, { useState, useEffect } from "react";
import VerticalNavbar from "../Components/VerticalNavbar";
import TopBar from "../Components/Topbar";
import chart from "../static/images/quizchart1.png";
import teacher from "../static/images/teacher.png";
import Avatar from "@material-ui/core/Avatar";
import avatar2 from "../static/images/avatar2.png";
import "./Teacher.css";
const Teacher = () => {
  const headerTitle = "Teacher";
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

  // const getAge = (dateString) => {
  //   var today = new Date();
  //   var birthDate = new Date(dateString);
  //   var age = today.getFullYear() - birthDate.getFullYear();
  //   var m = today.getMonth() - birthDate.getMonth();
  //   if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  //     age--;
  //   }
  //   return age;
  // };
  return (
    <div>
      <VerticalNavbar />
      <TopBar headerTitle={headerTitle} />
      <div className="detailContainer">
        <div className="grid-container2">
          <div className="teacherArea1">
            <img src={teacher} alt="avt1" className="teacherimg" />
            <div className="teacherText1">
              <p className="pText2">Teacher</p>
              <h2 className="h2Text">Alan Kan</h2>
              <p className="pText1">
                {" "}
                You have a class this Saturday at Epsom Girls Grammer School at
                11am
              </p>
            </div>
          </div>

          <div className="activityArea1">
            <h2 className="h2Text">Student’s Current Activity</h2>
            <div className="activityDetail1">
              {students.map((student, index) => {
                return (
                  <div key={index}>
                    <Avatar alt="Yuzu" src={avatar2} />
                    <p className="pText1">
                      {student.firstname} {student.surname}
                    </p>
                    <h2 className="h2Text">Project 39</h2>
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
                );
              })}
            </div>
          </div>
          <div className="quizArea1">
            <img src={chart} alt="avt1" className="quizbigimg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
