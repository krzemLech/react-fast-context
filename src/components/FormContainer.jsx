import React from "react";
import TextInput from "./TextInput";

const FormContainer = () => {
  return (
    <div className="container">
      <h2>FormContainer</h2>
      <TextInput value="first" />
      <TextInput value="last" />
    </div>
  );
};

export default FormContainer;
