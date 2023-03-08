import { Square } from './square';

interface Props {
  board: any[];
  handleUpdate: (index: number) => void;
}

export function Board({ board, handleUpdate }: Props) {
  return (
    <div
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
      {board.map((turn, index) => (
        <Square key={index} index={index} updateBoard={handleUpdate}>
          <span key={turn} className='animate-zoom'>
            {turn}
          </span>
        </Square>
      ))}
    </div>
  );
}
