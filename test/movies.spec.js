import { beforeEach, describe, test } from "@jest/globals";
import movies from "../src/movies";

describe("movies", () => {
  let myMovies = [];

  beforeEach(() => {
    myMovies = [
      {
        title: "God Father",
        rate: null,
      },
    ];
  });

  test("add", () => {
    movies.add(myMovies, "Batman");
    expect(myMovies).toMatchSnapshot();
  });

  test("rate", () => {
    movies.rate(myMovies[0], 5);
    expect(myMovies).toMatchSnapshot();
  });
});
