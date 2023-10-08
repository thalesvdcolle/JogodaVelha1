import { render, screen } from "@testing-library/react";
import Board, { BOARD_SIZE } from "./Board";

describe("components > Board", () => {
  it("should render Square quantity correcly", () => {
    render(<Board squares={Array.from(Array(BOARD_SIZE).keys())} />);
    const squares = screen.getAllByRole("button");
    expect(squares.length).toBe(9);
  });
});
