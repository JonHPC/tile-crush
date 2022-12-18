import React, { useState, useEffect } from 'react';
import CurrentScore from './CurrentScore';

const GameBoard = () => {
  const [hand, setHand] = useState([]);
  const [score, setScore] = useState(0);
  // const [board, setBoard] = useState([
  //   ['-', '-', '-'],
  //   ['-', '-', '-'],
  //   ['-', '-', '-']
  // ]);
  const [board, setBoard] = useState([
    ['X', 'O', 'O'],
    ['O', 'X', 'O'],
    ['O', 'X', 'X']
  ]);

  // const generateRandomBoard = () => {
  //   const updatedBoard = [...board];
  //   for (let i = 0; i < updatedBoard.length; i++) {
  //     for (let j = 0; j < updatedBoard[i].length; j++) {
  //       // Generate a random number between 0 and 1
  //       const randomNumber = Math.random();
  //       // Assign 'X' or 'O' to the element based on the random number
  //       updatedBoard[i][j] = randomNumber < 0.5 ? 'X' : 'O';
  //     }
  //   }
  //   setBoard(updatedBoard);
  // };

  // useEffect(() => {
  //   generateRandomBoard();
  // }, []);

  const checkHand = (hand) => {
    //check if there is 3 of a kind in the hand
    const newHand = []
    const count = {}
    let tileToRemove = ''

    hand.forEach(el => {
      count[el] = count[el] + 1 || 1;
      //if a tile has a count of 3, tag those for removal
      if(count[el] === 3){
        tileToRemove = el;
      }
    })

    //create a new hand and push only tiles if they aren't tagged for removal
    hand.forEach(el => {
      if(el !== tileToRemove){
        newHand.push(el);
      }
    })

    //check if there are 7 tiles in the hand, if so, game over!
    if(newHand.length >= 7){
      alert("Game Over!");
      return newHand;
    }else{
      console.log("Count: ", count)
      console.log("New Hand after checkHand: ", newHand);
      return newHand;
    }
  }

  const handleClick = (row, col) => {
    //Update the hand state with the clicked value
    const updatedHand = [...hand];
    updatedHand.push(board[row][col]);
    setHand(checkHand(updatedHand));
    // Update the board state with the new value
    const updatedBoard = [...board];
    // updatedBoard[row][col] = board[row][col] === 'X' ? 'O' : 'X';
    updatedBoard[row][col] = '-';
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