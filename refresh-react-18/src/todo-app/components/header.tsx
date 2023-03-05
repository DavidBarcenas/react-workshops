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
    <header>
      <h1>ToDo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='¿Qué quieres hacer?'
          autoFocus
        />
      </form>
    </header>
  );
}
