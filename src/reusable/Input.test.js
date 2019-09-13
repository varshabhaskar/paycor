import Input from "./Input";
import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
it("should display when passed using getByText", () => {
  //arrange
  const { getByText } = render(
    <Input
      id="test"
      name="test"
      label="test"
      onChange={() => {}}
      value="test"
      error="exampleerror"
    />
  );
  //act
  //assert
  getByText("exampleerror");
});

it("should display when passed using getByRole", () => {
  //arrange
  const { getByRole } = render(
    <Input
      id="test"
      name="test"
      label="test"
      onChange={() => {}}
      value="test"
      error="example error"
    />
  );
  //act
  //assert
  const error = getByRole("alert");
  expect(error.innerHTML).toBe("example error");
});

it("should not render the error para when error is not provided", () => {
  //arrange
  //act
  const tree = renderer
    .create(
      <Input
        id="test"
        name="test"
        label="test"
        onChange={() => {}}
        value="test"
      />
    )
    .toJSON();
  //assert
  expect(tree).toMatchSnapshot();
});
