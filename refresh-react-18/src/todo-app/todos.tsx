import { Todo } from './todo';
import { type TodoItem, type TodoId } from './types.d';

export interface Props {
  list: TodoItem[];
  onRemove: (id: TodoId) => void;
  onCompleted: (id: TodoId) => void;
}

export function Todos({ list, onRemove, onCompleted }: Props) {
  return (
    <ul>
      {list.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemove={onRemove}
            onCompleted={onCompleted}
          />
        </li>
      ))}
    </ul>
  );
}
