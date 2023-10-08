import React from "react";
import Board from "../components/Board";

import "../index.css";
import calculateWinner from "../utils/calculateWinner";

const initialState = {
  history: [
    {
      squares: Array(9).fill(null)
    }
  ],
  stepNumber: 0,
  xIsNext: true
};

const Game = () => {
  const [state, setState] = React.useState(initialState);

  const handleClick = (i) => {
    const history = state.history.slice(0, state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = state.xIsNext ? "X" : "O";
    setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !state.xIsNext
    });
  };

  const jumpTo = (step) =>
    setState((prevState) => {
      return {
        ...prevState,
        stepNumber: step,
        xIsNext: step % 2 === 0
      };
    });

  const resetGame = () => setState(initialState);

  const history = state.history;
  const current = history[state.stepNumber];
  const winner = calculateWinner(current.squares);
  const draw = history[state.stepNumber].squares.every(
    (square) => square !== null
  );

  const moves = history.map((step, move) => {
    const desc = move ? "Movimento #" + move : "Comece o Jogo";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = "Ganhador: " + winner;
  } else if (draw) {
    status = "Desenhe!";
  } else {
    status = "Proximo Jogador: " + (state.xIsNext ? "X" : "O");
  }
  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
        {(winner || draw) && (
          <button onClick={() => resetGame()}>Recomeçar Jogo</button>
        )}
      </div>
    </div>
  );
};

export default Game;
