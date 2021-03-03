import React from "react";
import bg from "../static/images/bg.jpg";
import Background from "../Components/Background";
import Navbar from "../Components/Background";
import Dropdown from "../Components/Background";
import { IsMobile } from "../Hooks/IsMobile";
const details = {
  customStyles: {
    backgroundImage: `url(${bg})`,
    zIndex: -100,
    opacity: 1,
  },
};
const Signup = () => {
  return (
    <div>
      <h1>This is Data</h1>
      <div>
        <Background customStyles={details.customStyles} />
        {IsMobile() ? <Dropdown /> : <Navbar />}
      </div>
    </div>
  );
};

export default Signup;
