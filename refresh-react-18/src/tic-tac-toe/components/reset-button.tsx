interface Props {
  resetGame: () => void;
}

export function ResetButton({ resetGame }: Props) {
  return (
    <button className='bg-red-400 text-white py-2 px-4 rounded-md' onClick={resetGame}>
      Volver a jugar
    </button>
  );
}
