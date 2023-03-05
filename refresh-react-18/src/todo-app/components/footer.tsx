import { Filters } from './filters';
import { type TodoFilters } from '../models/todo';

interface Props {
  activeCount: number;
  completedCount: number;
  filterSelected: (typeof TodoFilters)[keyof typeof TodoFilters];
  handleFilterChange: (filter: (typeof TodoFilters)[keyof typeof TodoFilters]) => void;
  onClearCompleted: () => void;
}

export function Footer({
  activeCount = 0,
  completedCount = 0,
  filterSelected,
  handleFilterChange,
  onClearCompleted,
}: Props) {
  return (
    <footer>
      <span>
        <strong>{activeCount}</strong>
        tareas pendiendtes
      </span>

      <Filters filterSelected={filterSelected} onFilterChange={handleFilterChange} />

      {completedCount > 0 && <button onClick={onClearCompleted}>Limpiar completados</button>}
    </footer>
  );
}
