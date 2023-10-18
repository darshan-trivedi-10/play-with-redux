// src/components/ComponentB.js
import React from "react";
import { useDispatch } from "react-redux";

const ComponentB = () => {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    dispatch({ type: "UPDATE_VALUE", payload: newValue });
  };

  return (
    <input type="text" onChange={handleInputChange} placeholder="Enter text" />
  );
};

export default ComponentB;
