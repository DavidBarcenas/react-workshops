import { Todo } from './todo';
import { type TodoItem, type TodoId } from '../models/todo';

export interface Props {
  list: TodoItem[];
  onRemove: (id: TodoId) => void;
  onCompleted: (id: TodoId) => void;
}

export function Todos({ list, onRemove, onCompleted }: Props) {
  return (
    <ul className='w-full bg-white rounded-t-md rounded-tr-md overflow-hidden'>
      {list.map((todo) => (
        <li key={todo.id} className='py-3 px-5 border-b border-gray-200 hover:bg-gray-50'>
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
