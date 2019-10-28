import React from "react";
import PropTypes from "prop-types";
import { errorStyle, inputErrorStyle } from "../styles";

function Input(props) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <br />
      <input
        id={props.id}
        type={props.type}
        name={props.name} // this is the property we wanna set onChange. can name it anything
        value={props.value}
        onChange={props.onChange}
        style={props.error && inputErrorStyle}
      ></input>
      {props.error && (
        <p role="alert" style={errorStyle}>
          {props.error}
        </p>
      )}
    </div>
  );
}

Input.propTypes = {
  /** HTML Id **assigned** to the input */
  id: PropTypes.string.isRequired,
  /** Label Value */
  label: PropTypes.string.isRequired,
  /** Input Type */

  type: PropTypes.oneOf(["text", "email", "phone", "number"]),
  /** Input name */
  name: PropTypes.string.isRequired,
  /** Function Called onChange */
  onChange: PropTypes.func.isRequired,
  /** Value assigned to input */
  value: PropTypes.string.isRequired
};

export default Input;
