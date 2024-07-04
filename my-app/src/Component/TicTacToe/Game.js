import React, { useState } from 'react';
import Board from './Board'

export default function Game() {
  
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
    const isCurrentMove = move === currentMove
    return (
      <li key={move}>
        {/* For the current move only, show “You are at move #…” instead of a button. */}
        {isCurrentMove?(<span>{description}</span>): 
         <button onClick={() => jumpTo(move)}>{description}</button>
         }
      
      </li>
    );
  });
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
  
}