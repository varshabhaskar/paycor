import React from "react";
import PropTypes from "prop-types";
import { errorColor } from "../styles";

const errorStyle = {
  color: errorColor,
  fontWeight: "bold"
};
const inputErrorStyle = {
  border: "solid 1px " + errorColor
};
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
      {props.error && <p style={errorStyle}>{props.error}</p>}
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "email", "phone", "number"]),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default Input;
