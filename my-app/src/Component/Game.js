import React, { useState } from 'react';
import Board from './Board'

export default function Game() {
<<<<<<< HEAD
  
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  // Get the current state, or an empty array if history is empty
  // const currentSquares = history.length > 0 ? history[history.length - 1] : Array(9).fill(null);
  const currentSquares = history[currentMove];
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    // setXIsNext(!xIsNext);
  }
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    // setXIsNext(nextMove % 2 === 0);
  }
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
=======
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);

  // Get the current state, or an empty array if history is empty
  const currentSquares = history.length > 0 ? history[history.length - 1] : Array(9).fill(null);

  function handlePlay(nextSquares) {
    setHistory((prevHistory) => [...prevHistory, nextSquares]);
    setXIsNext(!xIsNext);
  }

>>>>>>> aefa38b92e8e513e3242308616eb201fef73aa25
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
<<<<<<< HEAD
        <ol>{moves}</ol>
=======
        <ol>{/*TODO*/}</ol>
>>>>>>> aefa38b92e8e513e3242308616eb201fef73aa25
      </div>
    </div>
  );
  
}
