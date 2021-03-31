import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const myContext = createContext({});

export default function Context(props) {
  const [userObject, setUserObject] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:4000/getuser", { withCredentials: true })
      .then((res) => {
        console.log(res);
        if (res.data) {
          setUserObject(res.data);
        }
      });
  }, []);
  return (
    <myContext.Provider value={userObject}>{props.children}</myContext.Provider>
  );
}
