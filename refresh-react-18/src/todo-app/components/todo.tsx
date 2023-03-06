import { type TodoId, type TodoItem } from '../models/todo';

interface Props extends TodoItem {
  onRemove: (id: TodoId) => void;
  onCompleted: (id: TodoId) => void;
}

export function Todo({ id, title, completed, onRemove, onCompleted }: Props) {
  return (
    <div className='flex items-center justify-between group'>
      <div className='flex'>
        <input
          type='checkbox'
          id={id}
          checked={completed}
          onChange={() => onCompleted(id)}
          className='cursor-pointer'
        />
        <label
          htmlFor={id}
          className={`ml-3 text-sm cursor-pointer ${completed ? 'line-through opacity-30' : ''}`}
        >
          {title}
        </label>
      </div>
      <button onClick={() => onRemove(id)}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='text-gray-400 transition-opacity duration-200 opacity-0 group-hover:opacity-100'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M18 6l-12 12' />
          <path d='M6 6l12 12' />
        </svg>
      </button>
    </div>
  );
}
