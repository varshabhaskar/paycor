import React from "react";
import Input from "./Input";
import {text} from "@storybook/addon-knobs";

//This labels our story
export default { title: "Input" };

function ExampleInput(props) {
  const { value, setValue } = React.useState("");
  return (
    <Input
      id="firstName"
      // Enable a knob for label with a default value of first name
      label={text("label","First Name")}
      name="firstName"
      onChange={event => setValue(event.target.value)}
      value={value}
      error={text("error",props.err)}
      //Assign any props passed in down to this Input.
      {...props}
    ></Input>
  );
}

export const defaultExample = () => <ExampleInput />;

export const error = () => <ExampleInput error="First name is required." />;
