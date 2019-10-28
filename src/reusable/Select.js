import React from "react";
import PropTypes from "prop-types";
import { errorStyle, inputErrorStyle } from "../styles";

function Select({ id, label, value, name, onChange, error, options }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <br />
      <select
        id={id}
        value={value}
        name={name}
        onChange={onChange}
        style={error && inputErrorStyle}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p role="alert" style={errorStyle}>
          {error}
        </p>
      )}
    </div>
  );
}

Select.propTypes = {
  /** HTML Id **assigned** to the input */
  id: PropTypes.string.isRequired,
  /** Label Value */
  label: PropTypes.string.isRequired,
  /** Input name */
  name: PropTypes.string.isRequired,
  /** Input name */
  error: PropTypes.string,
  /** Function Called onChange */
  onChange: PropTypes.func.isRequired,
  /** Value assigned to input */
  value: PropTypes.string.isRequired,
  /** array of options */
  options: PropTypes.arrayOf({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }).isRequired
};

export default Select;
