import { add } from "./math";
it("should return 3 when passed 1 and 2", () => {
  //arrange
  let x = 1;
  let y = 2;
  //act
  const result = add(x, y);
  //assert
  expect(result).toBe(3);
});
