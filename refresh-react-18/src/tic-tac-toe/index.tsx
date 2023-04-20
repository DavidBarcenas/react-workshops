import { useState } from 'react';
import { Board } from './components/board';
import { ResetButton } from './components/reset-button';
import { Score } from './components/score';
import { WinnerModal } from './components/winner-modal';
import { turns, winnerCombos } from './utils/constants';
import { resetGameStorage, saveGame } from './storage';

export function TicTacToe() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board');
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null);
  });
  const [turn, setTurn] = useState<any>(() => {
    const turnFromStorage = window.localStorage.getItem('turn');
    return turnFromStorage ? JSON.parse(turnFromStorage) : turns.x;
  });
  const [winner, setWinner] = useState<boolean | null>(null);

  const checkWinner = (board: any) => {
    for (const combo of winnerCombos) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const handleUpdate = (index: any) => {
    if (board[index] || winner) return;

    const newTurn = turn === turns.x ? turns.o : turns.x;
    setTurn(newTurn);

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    saveGame(newBoard, newTurn);

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(() => newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(() => false);
    }
  };

  const checkEndGame = (board: any) => {
    return board.every((square: any) => square !== null);
  };

  const resetGame = () => {
    setWinner(null);
    setBoard(Array(9).fill(null));
    setTurn(turns.x);
    resetGameStorage();
  };

  return (
    <main className='bg-tic-tac-toe w-full h-screen'>
      <div className='max-w-md m-auto text-center'>
        <h1 className='text-white text-5xl py-10 mb-5'>Tic Tac Toe</h1>
        <Board board={board} handleUpdate={handleUpdate} />
        <div className='flex justify-between items-center'>
          <Score turn={turn} />
          <ResetButton resetGame={resetGame} />
        </div>
        <WinnerModal winner={winner} resetGame={resetGame} />
      </div>
    </main>
  );
}
