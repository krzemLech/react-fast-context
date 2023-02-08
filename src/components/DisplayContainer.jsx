import React from "react";
import DisplayValue from "./DisplayValue";

export const DisplayContainer = () => {
  return (
    <div className="container">
      <h2>DisplayContainer</h2>
      <DisplayValue value="first" />
      <DisplayValue value="last" />
    </div>
  );
};
