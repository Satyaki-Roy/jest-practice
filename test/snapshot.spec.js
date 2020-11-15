import { test } from "@jest/globals";

const user = { name: "john", age: 22, class: "BE" };

test("snapshot test", () => {
  expect(user).toMatchSnapshot();
});
