import { TodoFilters } from '../models/todo.d';

interface Props {
  filterSelected: (typeof TodoFilters)[keyof typeof TodoFilters];
  onFilterChange: (filer: (typeof TodoFilters)[keyof typeof TodoFilters]) => void;
}

export function Filters({ filterSelected, onFilterChange }: Props) {
  return (
    <ul>
      <li>
        <a
          href={`/?filter=${TodoFilters.ALL}`}
          className={`${filterSelected === TodoFilters.ALL ? 'selected' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            onFilterChange(TodoFilters.ALL);
          }}
        >
          Todos
        </a>
      </li>
      <li>
        <a
          href={`/?filter=${TodoFilters.COMPLETED}`}
          className={`${filterSelected === TodoFilters.COMPLETED ? 'completed' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            onFilterChange(TodoFilters.COMPLETED);
          }}
        >
          Completados
        </a>
      </li>
      <li>
        <a
          href={`/?filter=${TodoFilters.ACTIVE}`}
          className={`${filterSelected === TodoFilters.ACTIVE ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            onFilterChange(TodoFilters.ACTIVE);
          }}
        >
          Activos
        </a>
      </li>
    </ul>
  );
}
