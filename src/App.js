import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setData, resetData } from "./features/dataSlice";
import DisplayData from "./Components/DisplayData/DisplayData";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        dispatch(setData(response.data));
      } catch (error) {
        dispatch(resetData());
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      <DisplayData />
    </div>
  );
};

export default App;
