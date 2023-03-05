export interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
}

export type TodoId = TodoItem['id'];

export const TodoFilters = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed',
} as const;
