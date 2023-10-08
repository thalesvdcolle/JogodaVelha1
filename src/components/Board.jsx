import React from "react";
import Square from "./Square";

export const BOARD_SIZE = 9;

const Board = (props) => {
  const renderSquare = (i) => {
    return (
      <Square
        key={i}
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
      />
    );
  };

  const board = Array.from(Array(BOARD_SIZE).keys());

  return (
    <div className="board">{board.map((square) => renderSquare(square))}</div>
  );
};

export default Board;
