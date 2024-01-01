import React, { useState } from 'react';
import Board from './Board'

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);

  // Get the current state, or an empty array if history is empty
  const currentSquares = history.length > 0 ? history[history.length - 1] : Array(9).fill(null);

  function handlePlay(nextSquares) {
    setHistory((prevHistory) => [...prevHistory, nextSquares]);
    setXIsNext(!xIsNext);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
  
}
