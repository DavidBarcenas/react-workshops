interface Props {
  children: React.ReactNode;
  updateBoard: (index: number) => void;
  index: number;
}

export function Square({ children, updateBoard, index }: Props) {
  const handleClick = () => {
    updateBoard(index);
  };
  return (
    <div
      className={`w-full min-h-[140px] flex items-center justify-center font-bold text-6xl text-white`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}
