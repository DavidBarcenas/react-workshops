import { useState } from 'react';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Todos } from './components/todos';
import { TodoFilters, type TodoId, type TodoItem } from './models/todo.d';

const mockTodos: TodoItem[] = [
  {
    id: '1',
    title: 'Todo 1',
    completed: true,
  },
  {
    id: '2',
    title: 'Todo 2',
    completed: false,
  },
  {
    id: '3',
    title: 'Todo 3',
    completed: false,
  },
];

export function ToDoApp() {
  const [todos, setTodos] = useState(mockTodos);
  const [filter, setFilter] = useState<(typeof TodoFilters)[keyof typeof TodoFilters]>(
    TodoFilters.ALL,
  );

  const handleRemove = (id: TodoId) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleCompleted = (id: TodoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleFilterChange = (filter: (typeof TodoFilters)[keyof typeof TodoFilters]) => {
    setFilter(filter);
  };

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.filter((todo) => todo.completed).length;
  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case TodoFilters.ACTIVE:
        return !todo.completed;
      case TodoFilters.COMPLETED:
        return todo.completed;
      default:
        return todo;
    }
  });

  const handleRemoveAllCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const handleAddTodo = (title: string) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  return (
    <div>
      <Header onAddTodo={handleAddTodo} />
      <Todos list={filteredTodos} onRemove={handleRemove} onCompleted={handleCompleted} />
      <Footer
        handleFilterChange={handleFilterChange}
        filterSelected={filter}
        activeCount={activeCount}
        completedCount={completedCount}
        onClearCompleted={handleRemoveAllCompleted}
      />
    </div>
  );
}
