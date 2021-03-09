import React, { useState, useEffect } from "react";
import VerticalNavbar from "../Components/VerticalNavbar";
import TopBar from "../Components/Topbar";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  detailContainer: {},
}));
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
  const classes = useStyles();
  return (
    <div>
      <VerticalNavbar />
      <TopBar />
      <div className={classes.detailContainer}>
        <h2>Student </h2>
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
  );
};

export default Student;
