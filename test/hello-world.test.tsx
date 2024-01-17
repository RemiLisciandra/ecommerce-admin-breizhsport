import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Hello world testing", () => {
  test("it renders a hello world message for testing", () => {
    render(<div>Hello World for testing</div>);
    expect(screen.getByText("Hello World for testing")).toBeInTheDocument();
  });
});
