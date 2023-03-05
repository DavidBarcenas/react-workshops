import { type TodoId, type TodoItem } from './types.d';

interface Props extends TodoItem {
  onRemove: (id: TodoId) => void;
  onCompleted: (id: TodoId) => void;
}

export function Todo({ id, title, completed, onRemove, onCompleted }: Props) {
  return (
    <div>
      <input type='checkbox' checked={completed} onChange={() => onCompleted(id)} />
      <label>{title}</label>
      <button onClick={() => onRemove(id)}>Eliminar</button>
    </div>
  );
}
