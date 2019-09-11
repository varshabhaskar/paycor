import React from "react";

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
      ></input>
    </div>
  );
}

export default Input;
