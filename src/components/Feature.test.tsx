import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Feature from "./Feature";

describe("Feature", () => {
  it("renders an image after clicking a button", () => {
    render(<Feature />);
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
