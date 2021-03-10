import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

  return (
    <div>
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
                  <Link to="/student">
                    {student.firstname} {student.surname}
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Student;
