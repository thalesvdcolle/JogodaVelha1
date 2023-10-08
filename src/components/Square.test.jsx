import { render, screen, fireEvent } from "@testing-library/react";
import Square from "./Square";

describe("components > Square", () => {
  it("should render value prop correctly", () => {
    render(<Square value="1" />);
    expect(screen.getByText("1").textContent).toBe("1");
  });
  it("should trigger onClick prop correctly", () => {
    const onClick = jest.fn();
    render(<Square value="2" onClick={() => onClick("2")} />);
    const button = screen.getByRole("button", {
      name: "2"
    });
    fireEvent.click(button);
    expect(onClick).toBeCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith("2");
  });
});
