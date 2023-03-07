import { useState } from 'react';

const turns = {
  x: '✗',
  o: '○',
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
      className={`w-full min-h-[140px] flex items-center justify-center font-bold text-6xl text-white ${
        isSelected ? 'bg-orange-500' : ''
      }`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

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

    window.localStorage.setItem('board', JSON.stringify(newBoard));
    window.localStorage.setItem('turn', JSON.stringify(newTurn));

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

    window.localStorage.remoItem('board');
    window.localStorage.remoItem('turn');
  };

  return (
    <main className='bg-tic-tac-toe w-full h-screen'>
      <div className='max-w-md m-auto text-center'>
        <h1 className='text-white text-5xl py-10 mb-5'>Tic Tac Toe</h1>
        <section
          className='
          grid grid-cols-3 mb-16 animate-zoom
          [&>*]:border-b
          [&>*:nth-child(2)]:border-l 
          [&>*:nth-child(2)]:border-r
          [&>*:nth-child(5)]:border-l 
          [&>*:nth-child(5)]:border-r
          [&>*:nth-child(8)]:border-l 
          [&>*:nth-child(8)]:border-r
          [&>*:nth-child(7)]:border-b-0
          [&>*:nth-child(8)]:border-b-0
          [&>*:nth-child(9)]:border-b-0
          '
        >
          {board.map((_, index) => (
            <Square key={index} index={index} updateBoard={handleUpdate}>
              <span key={board[index]} className='animate-zoom'>
                {board[index]}
              </span>
            </Square>
          ))}
        </section>
        <section>
          <span className={`text-5xl inline-block w-24 ${turn === turns.x ? 'bg-orange-300' : ''}`}>
            {turns.x}
          </span>
          <span className={`text-5xl inline-block w-24 ${turn === turns.o ? 'bg-orange-300' : ''}`}>
            {turns.o}
          </span>
        </section>
        {winner !== null && (
          <section className='fixed top-0 left-0 w-full h-full bg-black/70 grid place-content-center animate-zoom'>
            <div className='bg-orange-300 min-w-[600px] py-10'>
              <h2 className='text-5xl font-bold mb-4'>
                {winner === false ? 'Empate' : 'Ganó: ' + winner}
              </h2>
              <footer>
                <button onClick={resetGame}>Volver a jugar</button>
              </footer>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
