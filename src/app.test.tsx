import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App, { TITLE } from "./App";
import React from "react";

describe("Main Page", () => {
  test("should render App components", () => {
    const view = render(<App />);

    expect(view.getByText(TITLE)).toBeInTheDocument();
  });
});
