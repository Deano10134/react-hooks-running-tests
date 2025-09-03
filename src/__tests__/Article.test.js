import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

import Article from "../components/Article";

test("renders the article", () => {
  const { container } = render(<Article />);
  expect(container).not.toBeEmptyDOMElement();
});
