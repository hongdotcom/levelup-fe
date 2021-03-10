import React from "react";
import VerticalNavbar from "../Components/VerticalNavbar";
import TopBar from "../Components/Topbar";
const Teacher = () => {
  const headerTitle = "Teacher";
  return (
    <div>
      <VerticalNavbar />
      <TopBar headerTitle={headerTitle} />
      <h1 color="red">this is a teacher page</h1>
    </div>
  );
};

export default Teacher;
