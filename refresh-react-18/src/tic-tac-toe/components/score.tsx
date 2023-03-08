import { turns } from '../utils/constants';

interface Props {
  turn: keyof typeof turns;
}

export function Score({ turn }: Props) {
  return (
    <div>
      <span className={`text-5xl inline-block w-24 ${turn === turns.x ? 'bg-orange-300' : ''}`}>
        {turns.x}
      </span>
      <span className={`text-5xl inline-block w-24 ${turn === turns.o ? 'bg-orange-300' : ''}`}>
        {turns.o}
      </span>
    </div>
  );
}
