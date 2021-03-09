import React from "react";
import Background from "../Components/Background";
import Navbar from "../Components/Background";
import Dropdown from "../Components/Background";
import { IsMobile } from "../Hooks/IsMobile";
const details = {
  customStyles: {
    backgroundColor: "#e0ebe6",
    zIndex: -100,
    opacity: 1,
  },
};
const Signup = () => {
  return (
    <div>
      <h1>This is Signup</h1>
      <div>
        <Background customStyles={details.customStyles} />
        {IsMobile() ? <Dropdown /> : <Navbar />}
      </div>
    </div>
  );
};

export default Signup;
