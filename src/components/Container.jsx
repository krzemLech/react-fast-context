import React from "react";
import { DisplayContainer } from "./DisplayContainer";
import FormContainer from "./FormContainer";

const Container = () => {
  return (
    <div className="container">
      <h2>Container</h2>
      <FormContainer />
      <DisplayContainer />
    </div>
  );
};

export default Container;
