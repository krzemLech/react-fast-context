import React from "react";
import { useStore } from "../context/storeContext";

const TextInput = ({ value }) => {
  const { store, updateStore } = useStore((store) => store[value]);
  const handleChange = (e) => {
    updateStore({ [value]: e.target.value });
  };
  return (
    <p>
      <label htmlFor="value">{value}: </label>
      <input id="value" onChange={handleChange} value={store} />
    </p>
  );
};

export default TextInput;
