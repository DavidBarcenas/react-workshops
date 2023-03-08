interface Props {
  resetGame: () => void;
}

export function ResetButton({ resetGame }: Props) {
  return (
    <footer>
      <button onClick={resetGame}>Volver a jugar</button>
    </footer>
  );
}
