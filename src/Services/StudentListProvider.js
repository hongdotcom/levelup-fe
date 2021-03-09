import React, { useState, useEffect } from "react";

const StudentListProvider = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [temp_c, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://api.weatherapi.com/v1/current.json?key=e943dd3ec57f446eb5d10931210401&q=Auckland",
      {
        method: "GET",
        headers: { "Content-type": "application/json;charset=UTF-8" },
      }
    );
    const items = data.json();
    console.log(items);
    setItems(items.current.temp_c);
    return data.json;
  };
};

export default StudentListProvider;
