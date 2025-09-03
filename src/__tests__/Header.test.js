import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

function Header(props) {
  return <h1>hello from the Header!</h1>;
}
export default Header;

test("renders the header", () => {
  render(<Header />);
  const headerElement = screen.getByText(/hello from the Header!/i);
  expect(headerElement).toBeInTheDocument();
});
