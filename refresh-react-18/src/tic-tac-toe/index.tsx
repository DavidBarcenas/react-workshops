import { useState } from 'react';

const turns = {
  x: 'X',
  o: 'O',
};

const winnerCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Square = ({ children, updateBoard, index, isSelected }: any) => {
  const handleClick = () => {
    updateBoard(index);
  };
  return (
    <div
      className={`border w-28 h-28 flex items-center justify-center ${
        isSelected ? 'bg-orange-500' : ''
      }`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(turns.x);
  const [winner, setWinner] = useState(null);

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

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(() => newWinner);
    }
  };

  return (
    <main>
      <div className='max-w-sm m-auto'>
        <h1>Tic Tac Toe</h1>
        <section className='grid grid-cols-3 gap-2'>
          {board.map((_, index) => (
            <Square key={index} index={index} updateBoard={handleUpdate}>
              <span>{board[index]}</span>
            </Square>
          ))}
        </section>
        <section>
          <Square isSelected={turn === turns.x}>{turns.x}</Square>
          <Square isSelected={turn === turns.o}>{turns.o}</Square>
        </section>
      </div>
    </main>
  );
}
