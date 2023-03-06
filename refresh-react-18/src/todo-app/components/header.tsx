import { useState } from 'react';

interface Props {
  onAddTodo: (title: string) => void;
}

export function Header({ onAddTodo }: Props) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue('');
  };

  return (
    <header className='text-center text-white mt-20 mb-5'>
      <h1 className='text-5xl font-light mb-8'>Lista de tareas</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='w-full py-3 px-5 text-black outline-none border-2 border-transparent focus:border-2 focus:border-lime-200 rounded-md'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Agrega una tarea'
          autoFocus
        />
      </form>
    </header>
  );
}
