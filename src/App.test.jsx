import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("DevLaunch Website", () => {
  it("displays the website title", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: /DevLaunch/ }),
    ).toBeInTheDocument();
  });

  it("displays the React learning card", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: /React/ })).toBeInTheDocument();
  });

  it("displays the GitHub Actions learning card", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: /GitHub Actions/ }),
    ).toBeInTheDocument();
  });

  it("displays the Start Building button", () => {
    render(<App />);

    expect(
      screen.getByRole("button", { name: /Start Building/ }),
    ).toBeInTheDocument();
  });
});
