import User from "../src/user";
import { describe, test } from "@jest/globals";

describe("user", () => {
  test("full name", () => {
    const user = new User({
      firstname: "Satyaki",
      lastname: "Roy",
    });
    expect(user.name).toBe("Satyaki Roy");
  });
});
