import React, { useState, useEffect } from 'react';
import CurrentScore from './CurrentScore';

const GameBoard = () => {
  const [score, setScore] = useState(0);
  const [board, setBoard] = useState([
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
  ]);

  const generateRandomBoard = () => {
    const updatedBoard = [...board];
    for (let i = 0; i < updatedBoard.length; i++) {
      for (let j = 0; j < updatedBoard[i].length; j++) {
        // Generate a random number between 0 and 1
        const randomNumber = Math.random();
        // Assign 'X' or 'O' to the element based on the random number
        updatedBoard[i][j] = randomNumber < 0.5 ? 'X' : 'O';
      }
    }
    setBoard(updatedBoard);
  };

  useEffect(() => {
    generateRandomBoard();
  }, []);

  const handleClick = (row, col) => {
    // Update the board state with the new value
    const updatedBoard = [...board];
    updatedBoard[row][col] = board[row][col] === 'X' ? 'O' : 'X';
    setBoard(updatedBoard);
  };
  
  return (
    <div>
    <CurrentScore score={score} />
      {board.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((col, colIndex) => (
            <button key={colIndex} onClick={() => handleClick(rowIndex, colIndex)}>
              {col}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;