import React from "react";

function Input({ label, id, name, value, onChange, error }) {
  return (
    <>
      <div className="input-container">
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          // ref={titleRef}
          // required
        />
        <p className="error">{error}</p>
      </div>
    </>
  );
}

export default Input;
