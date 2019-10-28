import React from "react";
import Select from "./Select";
import { text } from "@storybook/addon-knobs";

export default { title: "Select" };

function ExampleSelect(props) {
  const { value, setValue } = React.useState("");
  return (
    <Select
      id="role"
      // Enable a knob for label with a default value of first name
      label={text("label", "Role")}
      name="role"
      onChange={event => setValue(event.target.value)}
      value={value}
      options={[{ label: "", value: "" }, { label: "Admin", value: "admin" }]}
      error={text("error", props.err)}
      //Assign any props passed in down to this Input.
      {...props}
    ></Select>
  );
}

export const defaultExample = () => <ExampleSelect />;

export const error = () => <ExampleSelect error="Role is required." />;
