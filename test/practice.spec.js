import { test } from "@jest/globals";

test("practicing few things", () => {
  expect(13).toBe(13);
  expect([13]).toEqual([13]);
  expect(Date.now()).toEqual(expect.any(Number));
});
