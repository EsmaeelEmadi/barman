import React from "react";
import { render, screen } from "@testing-library/react";
import MainHeader from "./MainHeader";

describe("MainHeader Component", () => {
  test("renders header text", () => {
    render(<MainHeader />);
    const MainHeaderComponent = screen.getByTestId("main-header");
    expect(MainHeaderComponent).toBeInTheDocument();
  });
});
