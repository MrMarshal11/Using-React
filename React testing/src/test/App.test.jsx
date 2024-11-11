import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App component", () => {
  it("renders correct heading", () => {
    render(<App />);
    expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
  });
});

describe("App component", () => {
  it("renders correct text", () => {
    render(<App />);
    expect(screen.getByText(/our second test/i).textContent).toMatch(/our second test/i);
  });
});

