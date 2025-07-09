import React from "react";

function Select({
  label,
  id,
  name,
  value,
  onChange,
  error,
  options,
  defaultOption,
}) {
  return (
    <div className="input-container">
      <label htmlFor={label}>Category</label>
      <select
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        // ref={categoryRef}
        // required
      >
        {defaultOption && (
          <option value="" hidden>
            {defaultOption}
          </option>
        )}
        {options.map((option, id) => (
          <option key={id} value={option}>
            {option}
          </option>
        ))}
      </select>
      <p className="error">{error}</p>
    </div>
  );
}

export default Select;
